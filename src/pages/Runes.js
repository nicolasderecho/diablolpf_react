import React, {useState} from 'react';
import { Box, Columns, Field, Label, Control, Input, Button, Column, Title, Table, Content } from 'tenpines-bulma-react';
import RunesData from '../data/runes.json';

const isBlank = string => string === '';

const Runes = (props) => {
    const [name, setname] = useState('');
    const [level, setlevel] = useState('');
    const [runes, setrunes] = useState(RunesData);
    const [weapon, setweapon] = useState('');
    const [shield, setshield] = useState('');
    const matchesNameFilter = (rune) =>  isBlank(name) || new RegExp(name, 'i').test(rune.name);
    const matchesLevelFilter = (rune) =>  isBlank(level) || level.toString() === rune.level.toString();
    const matchesWeaponFilter = (rune) => {
        const regExp = new RegExp(weapon, 'i');
        return isBlank(weapon) || rune.weapons.some((weaponProp) => regExp.test(weaponProp));
    }
    const matchesShieldFilter = (rune) => {
        const regExp = new RegExp(shield, 'i');
        return isBlank(shield) || rune.shields.some((shieldProp) => regExp.test(shieldProp));
    }    
    const matchesFilters = (rune) => {
        return matchesNameFilter(rune) && matchesLevelFilter(rune) && matchesWeaponFilter(rune) && matchesShieldFilter(rune);
    };
    const filterRunes = () => {
        setrunes(RunesData.filter( (rune) => matchesFilters(rune)));
    }
    const onSubmit = (event) => {
        event.preventDefault();
        filterRunes()
    }
    return <div className={'page-container'}>
        <Box className={'diablo-filter-box'}>
            <form onSubmit={onSubmit}>
                <Columns>
                    <Column>
                        <Field>
                            <Label>Nombre</Label>
                            <Control>
                                <Input type='text' placeholder='Ej: Sur' value={name} onChange={ (event) => setname(event.target.value) } />
                            </Control>
                        </Field>
                    </Column>
                    <Column>
                        <Field>
                            <Label>Nivel</Label>
                            <Control>
                                <Input type='text' placeholder='Ej: 11' value={level} onChange={(event) => setlevel(event.target.value)} />
                            </Control>
                        </Field>
                    </Column> 
                    <Column style={{flexGrow: '2'}}>
                        <Field>
                            <Label>Armas Contienen</Label>
                            <Control>
                                <Input type='text' placeholder='Ej: Vida robada por impacto' value={weapon} onChange={(event) => setweapon(event.target.value)} />
                            </Control>
                        </Field>
                    </Column>
                    <Column style={{flexGrow: '2'}}>
                        <Field>
                            <Label>Armaduras/Yelmos/Escudos contienen</Label>
                            <Control>
                                <Input type='text' placeholder='Ej: El atacante recibe el daño de' value={shield} onChange={(event) => setshield(event.target.value)} />
                            </Control>
                        </Field>
                    </Column>                                              
                </Columns>
                <Columns>
                    <Column><Field><Control><Button color='link' type='submit'>Submit</Button></Control></Field></Column>
                </Columns>
            </form>
        </Box>
        <Title as='span' style={{color: 'white', margin: '1em', marginLeft: '0.5em'}}>{runes.length} { runes.length > 1 ? 'Resultados' : 'Resultado' } </Title>
        <Content className={'table-container'} style={{padding: '1em'}}>
            <Table bordered striped className={'diablo-table'}>
                <Table.Head>
                    <Table.Row>
                        <Table.CellHeader className={'diablo-table-item'}>Número</Table.CellHeader>
                        <Table.CellHeader className={'diablo-table-item'}>Nombre</Table.CellHeader>
                        <Table.CellHeader className={'diablo-table-item'}>A través del cubo</Table.CellHeader>
                        <Table.CellHeader className={'diablo-table-item'}>Nível</Table.CellHeader>
                        <Table.CellHeader className={'diablo-table-item'}>Armas</Table.CellHeader>
                        <Table.CellHeader className={'diablo-table-item'}>Armaduras/Yelmos/Escudos</Table.CellHeader>
                    </Table.Row>
                </Table.Head>
                <Table.Body>
                    { runes.map( (rune) => <Table.Row key={rune.code}>
                        <Table.Cell className={'diablo-table-item'} >{rune.name}</Table.Cell>
                        <Table.Cell className={'diablo-table-item'} >{rune.position}</Table.Cell>
                        <Table.Cell className={'diablo-table-item'} >{rune.name}</Table.Cell>
                        <Table.Cell className={'diablo-table-item'} >{rune.level}</Table.Cell>
                        <Table.Cell className={'diablo-table-item'} >{rune.weapons.map( (property, i) => <div key={i}>{property}</div>)}</Table.Cell>
                        <Table.Cell className={'diablo-table-item'} >{rune.shields.map( (property, i) => <div key={i}>{property}</div>)}</Table.Cell>
                    </Table.Row>) }
                </Table.Body>
            </Table>            
        </Content>
    </div>;
}

export default Runes;
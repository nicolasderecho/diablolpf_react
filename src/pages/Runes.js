import React, {useState} from 'react';
import { Box, Columns, Field, Label, Control, Input, Button, Column, Table } from 'tenpines-bulma-react';
import {isBlank} from '../shared/util';
import {RunesData} from '../shared/data'; 
import DiabloTable from '../shared/DiabloTable.js';
import Rune from '../shared/Rune';
import CubeRecipe from '../shared/CubeRecipe';

const matchesArrayFilter = (filter, array) => {
    const regExp = new RegExp(filter, 'i');
    return isBlank(filter) || array.some((prop) => regExp.test(prop));
}
const TABLE_HEADERS = ['Número', 'Nombre', 'A través del cubo', 'Nível', 'Armas', 'Armaduras/Yelmos/Escudos'];

const Runes = (props) => {
    const [name, setname] = useState('');
    const [level, setlevel] = useState('');
    const [runes, setrunes] = useState(RunesData);
    const [weapon, setweapon] = useState('');
    const [shield, setshield] = useState('');
    const matchesNameFilter   = (rune) =>  isBlank(name) || new RegExp(name, 'i').test(rune.name);
    const matchesLevelFilter  = (rune) =>  isBlank(level) || level.toString() === rune.level.toString();
    const matchesWeaponFilter = (rune) => matchesArrayFilter(weapon, rune.weapons);
    const matchesShieldFilter = (rune) => matchesArrayFilter(shield, rune.shields);
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
    const renderRow = (rune) => <Table.Row key={rune.code}>
        <Table.Cell className={'diablo-table-item'} >{rune.position}</Table.Cell>
        <Table.Cell className={'diablo-table-item'} ><Rune code={rune.code} name={rune.name}/></Table.Cell>
        <Table.Cell className={'diablo-table-item'} ><CubeRecipe items={rune.itemsRecipe} /></Table.Cell>
        <Table.Cell className={'diablo-table-item'} >{rune.level}</Table.Cell>
        <Table.Cell className={'diablo-table-item'} >{rune.weapons.map( (property, i) => <div key={i}>{property}</div>)}</Table.Cell>
        <Table.Cell className={'diablo-table-item'} >{rune.shields.map( (property, i) => <div key={i}>{property}</div>)}</Table.Cell>
    </Table.Row>

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
                    <Column style={{flexGrow: '4'}}>
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
        <DiabloTable headers={TABLE_HEADERS} items={runes} renderRow={renderRow}/>
    </div>;
}

export default Runes;
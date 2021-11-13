import React, {useState} from 'react';
import {Box, Columns, Column, Field, Label, Control, Input, Table, Button} from 'tenpines-bulma-react';
import {matchesArrayFilter} from '../shared/helpers/util';
import {Gems as GemList} from '../shared/information/data';
import DiabloTable from '../shared/DiabloTable.js';
import Gem from '../shared/Gem';
import ReactGA from 'react-ga';

const TABLE_HEADERS = ['Nombre', 'Nivel', 'Armas', 'Armaduras/Yelmos', 'Escudos'];

const Gems = () => {
    const [weapon, setweapon] = useState('');
    const [shield, setshield] = useState('');
    const [helm, sethelm] = useState('');
    const [gems, setgems] = useState(GemList);
    const matchesWeaponFilter = (gem) => matchesArrayFilter(weapon, gem.weapons);
    const matchesShieldFilter = (gem) => matchesArrayFilter(shield, gem.shields);
    const matchesHelmFilter = (gem) => matchesArrayFilter(helm, gem.helms);
    const matchesFilters = (gem) => {
        return matchesWeaponFilter(gem) && matchesShieldFilter(gem) && matchesHelmFilter(gem);
    };
    const filterGems = () => setgems(GemList.filter( (gem) => matchesFilters(gem)));
    const onSubmit = (event) => {
        event.preventDefault();
        ReactGA.event({
          category: 'Gems',
          action: 'filtering-gems'
        });
        filterGems()
    }
    const renderRow = (gem) => <Table.Row key={gem.code}>
        <Table.Cell className={'diablo-table-item'} ><Gem code={gem.code} name={gem.name} /></Table.Cell>
        <Table.Cell className={'diablo-table-item'} >{gem.level}</Table.Cell>
        <Table.Cell className={'diablo-table-item'} >{gem.weapons.map( (property, i) => <div key={i}>{property}</div>)}</Table.Cell>
        <Table.Cell className={'diablo-table-item'} >{gem.helms.map( (property, i) => <div key={i}>{property}</div>)}</Table.Cell>
        <Table.Cell className={'diablo-table-item'} >{gem.shields.map( (property, i) => <div key={i}>{property}</div>)}</Table.Cell>
    </Table.Row>

    return <div className={'page-container'}>
        <Box className={'diablo-filter-box'}>
            <form onSubmit={onSubmit}>
                <Columns>
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
                            <Label>Armaduras/Yelmos contienen</Label>
                            <Control>
                                <Input type='text' placeholder='Ej: El atacante recibe el daño de' value={helm} onChange={(event) => sethelm(event.target.value)} />
                            </Control>
                        </Field>
                    </Column>
                    <Column style={{flexGrow: '4'}}>
                        <Field>
                            <Label>Escudos contienen</Label>
                            <Control>
                                <Input type='text' placeholder='Ej: El atacante recibe el daño de' value={shield} onChange={(event) => setshield(event.target.value)} />
                            </Control>
                        </Field>
                    </Column>                     
                </Columns>
                <Columns>
                    <Column><Field><Control><Button color='link' type='submit'>Filtrar</Button></Control></Field></Column>
                </Columns>
            </form> 
        </Box>
        <DiabloTable headers={TABLE_HEADERS} items={gems} renderRow={renderRow}/>
    </div>
}

export default Gems;
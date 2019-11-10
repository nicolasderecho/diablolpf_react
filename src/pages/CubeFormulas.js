import React, {useState} from 'react';
import {Column, Box, Columns, Field, Label, Control, Input, Button, Table} from 'tenpines-bulma-react';
import {CubeRecipes} from '../shared/data';
import DiabloTable from '../shared/DiabloTable.js';
import {isBlank, matchesArrayFilter} from '../shared/util';

const TABLE_HEADERS = ['Formula', 'Resultado', 'Detalles'];

const CubeFormulas = () => {
    const [cubeFormulas, setCubeFormulas] = useState(CubeRecipes);
    const [item,setItems] = useState('');
    const [result,setResults] = useState('');
    const [description,setDescription] = useState('');

    const renderRow = (cubeFormula, index) => <Table.Row key={index}>
        <Table.Cell className={'diablo-table-item formula'} >
            <div className={'formula-container'}>{cubeFormula.items.map((item, index) => <div key={index}>- {item}</div>)}</div>
        </Table.Cell>
        <Table.Cell className={'diablo-table-item'} >{cubeFormula.result}</Table.Cell>
        <Table.Cell className={'diablo-table-item'} >{cubeFormula.description}</Table.Cell>
    </Table.Row>

    const matchesItem = (formula) => matchesArrayFilter(item, formula.items);
    const matchesResult = (formula) => isBlank(result) || !!formula.result.toLowerCase().match(result.toLowerCase());
    const matchesDescription = (formula) => isBlank(description) || !!formula.description.toLowerCase().match(description.toLowerCase());
    
    const matchesFilters = (formula) => {
        return matchesItem(formula) && matchesResult(formula) && matchesDescription(formula);
    }
    const filterFormulas = () => setCubeFormulas(CubeRecipes.filter( (formula) => matchesFilters(formula)));

    const onSubmit = (event) => {
        event.preventDefault();
        filterFormulas();
    };
    return <div className={'page-container'}>
    <Box className={'diablo-filter-box'}>
        <form onSubmit={onSubmit}>
            <Columns>
                <Column style={{flexGrow: '2'}}>
                    <Field>
                        <Label>Contiene Item</Label>
                        <Control>
                            <Input type='text' placeholder='Ej: Ral' value={item} onChange={(event) => setItems(event.target.value)} />
                        </Control>
                    </Field>
                </Column>
                <Column style={{flexGrow: '4'}}>
                    <Field>
                        <Label>Resultado</Label>
                        <Control>
                            <Input type='text' placeholder='Ej: Flechas' value={result} onChange={(event) => setResults(event.target.value)} />
                        </Control>
                    </Field>
                </Column>
                <Column style={{flexGrow: '4'}}>
                    <Field>
                        <Label>Descripción</Label>
                        <Control>
                            <Input type='text' placeholder='Ej: Detalles' value={description} onChange={(event) => setDescription(event.target.value)} />
                        </Control>
                    </Field>
                </Column>                               
            </Columns>
            <Columns>
                <Column><Field><Control><Button color='link' type='submit'>Filtrar</Button></Control></Field></Column>
            </Columns>
        </form> 
    </Box>
    <DiabloTable headers={TABLE_HEADERS} items={cubeFormulas} renderRow={renderRow}/>
</div>
}


 export default CubeFormulas;
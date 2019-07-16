import React, {useState} from 'react';
import {Column, Box, Columns, Field, Label, Control, Button, Table} from 'tenpines-bulma-react';
import {Runewords as RunewordsList, RunesData} from '../shared/data';
import Rune from '../shared/Rune';
import DiabloTable from '../shared/DiabloTable.js';
import {isBlank} from '../shared/util';
import flatten from 'lodash/flatten';
import uniq from 'lodash/uniq';
import capitalize from 'lodash/capitalize';
import Select from 'react-select';

const TABLE_HEADERS = ['Palabra Rúnica', 'Especificaciones'];

const names = uniq(RunewordsList.map( runeword => runeword.name)).sort();
const originalNames = uniq(RunewordsList.map( runeword => runeword.code)).sort();
const applicableInList = uniq(flatten((RunewordsList.map( runeword => runeword.applicableIn)))).sort();
const levels = uniq(RunewordsList.map( runeword => runeword.level)).sort();
const runewordNames = [{value: '', label: 'Cualquiera'}].concat( names.map( name => ({value: name, label: name})));
const runewordOriginalNames = [{value: '', label: 'Cualquiera'}].concat( originalNames.map( name => ({value: name, label: capitalize(name)})));
const runewordLevels = [{value: '', label: 'Cualquiera'}].concat( levels.map( level => ({value: level, label: level})));
const holeOptions = [{value: '', label: 'Cualquiera'}].concat( [2,3,4,5,6].map((number) => ({label: number, value: number}) ) );
const applicableInOptions = applicableInList.map( (item) => ({value: item, label: item}));
const runesOptions = RunesData.map( rune => ({value: rune.code, label: capitalize(rune.name)}));

const selectTheme= (theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
        ...theme.colors,
        primary25: '#3273dc'
        }
  });
const selectStyles= { option: (provided, state) => ({ ...provided, color: state.isFocused ? 'white': '#4a4a4a'}) };

const optionValue = (value) => ({value: value, label: capitalize(value || 'Cualquiera')});

const Runewords = () => {
    const [runewords, setRunewords] = useState(RunewordsList);
    const [name,setName] = useState('');
    const [originalName,setOriginalName] = useState('');
    const [level,setLevel] = useState('');
    const [holes,setHoles] = useState('');
    const [applicableIn,setApplicableIn] = useState([]);
    const [runes,setRunes] = useState([]);

    const matchesName = (runeword) => isBlank(name) || new RegExp(`${runeword.name}`, 'i').test(name);
    const matchesOriginalName = (runeword) => isBlank(originalName) || new RegExp(`${runeword.code}`, 'i').test(originalName);
    const matchesLevel = (runeword) => isBlank(level) || runeword.level.toString() === level.toString();
    const matchesHoles = (runeword) => isBlank(holes) || runeword.holes.toString() === holes.toString();
    const matchesApplicableIn = (runeword) => applicableIn.length === 0 || applicableIn.some((item) => runeword.applicableIn.indexOf(item) !== -1);
    const matchesRunes = (runeword) => runes.length === 0 || runes.some((runeCode) => runeword.runes.some( rune => rune.code === runeCode ));

    const matchesFilters = (runeword) => {
        return matchesName(runeword) && matchesOriginalName(runeword) && matchesLevel(runeword) && matchesHoles(runeword) && matchesApplicableIn(runeword) && matchesRunes(runeword);
    };

    const filterRunewords = () => setRunewords(RunewordsList.filter( (runeword) => matchesFilters(runeword)));

    const onSubmit = (event) => {
        event.preventDefault();
        filterRunewords();
    }

    const renderRow = (runeword) => <Table.Row key={runeword.code}>
        <Table.Cell className={'diablo-table-item'} >
            <Columns className={'runeword-name'} from={'mobile'} multiline>
                <Column className={'runeword-stats'} mobileColumnSize={'full'} tabletColumnSize={'half'} touchColumnSize={'full'} desktopColumnSize={'half'} >
                    <div><b>Nombre: </b>{runeword.name}</div>
                    <div><b>Nombre original: </b>{runeword.code}</div>
                    <div><b>Nivel: </b>{runeword.level}</div>
                    <div><b>Aplicable en: </b>{runeword.applicableIn.join(', ')}</div>                
                </Column>
                <Column className={'runeword-runes'} mobileColumnSize={'full'} tabletColumnSize={'half'} touchColumnSize={'full'} desktopColumnSize={'half'} >
                    {runeword.runes.map((rune, index) => <div key={index} ><Rune code={rune.code} name={rune.name}/></div>)}
                </Column>
            </Columns>
        </Table.Cell>
        <Table.Cell className={'diablo-table-item runeword-specs'} >
            {runeword.specs.map( (spec, index) => <div key={index}>
                {spec}
            </div>)}
        </Table.Cell>
    </Table.Row>

    return <div className={'page-container'}>
    <Box className={'diablo-filter-box'}>
        <form onSubmit={onSubmit}>
            <Columns>
                <Column style={{flexGrow: '2'}}>
                    <Field>
                        <Label>Nombre</Label>
                        <Control>
                            <Select theme={selectTheme} styles={selectStyles} placeholder='Ej: Espiritu' value={optionValue(name)} onChange={(selectedOption) => setName(selectedOption.value)} options={runewordNames} />
                        </Control>
                    </Field>
                </Column>
                <Column style={{flexGrow: '4'}}>
                    <Field>
                        <Label>Nombre original</Label>
                        <Control>
                            <Select theme={selectTheme} styles={selectStyles} placeholder='Ej: Spirit' value={optionValue(originalName)} onChange={(selectedOption) => setOriginalName(selectedOption.value)} options={runewordOriginalNames} />
                        </Control>
                    </Field>
                </Column>
                <Column style={{flexGrow: '4'}}>
                    <Field>
                        <Label>Nivel</Label>
                        <Control>
                            <Select theme={selectTheme} styles={selectStyles} placeholder='Ej: 11' value={optionValue(level)} onChange={(selectedOption) => setLevel(selectedOption.value)} options={runewordLevels} />
                        </Control>
                    </Field>
                </Column>         
                <Column style={{flexGrow: '4'}}>
                    <Field>
                        <Label>Engarces</Label>
                        <Control>
                            <Select theme={selectTheme} styles={selectStyles} placeholder='Ej: Cualquiera' value={optionValue(holes)} onChange={(selectedOption) => setHoles(selectedOption.value)} options={holeOptions} />
                        </Control>
                    </Field>
                </Column>                       
            </Columns>
            <Columns>
                <Column style={{flexGrow: '4'}}>
                        <Field>
                            <Label>Aplicable En</Label>
                            <Control>
                                <Select isMulti theme={selectTheme} styles={selectStyles} placeholder='Ej: Cualquiera' onChange={(selectedOption) => {setApplicableIn(selectedOption.map((option) => option.value))}} options={applicableInOptions} />
                            </Control>
                        </Field>
                    </Column>          
                    <Column style={{flexGrow: '4'}}>
                        <Field>
                            <Label>Runas que contiene</Label>
                            <Control>
                                <Select isMulti theme={selectTheme} styles={selectStyles} placeholder='Ej: Cualquiera' onChange={(selectedOption) => {setRunes(selectedOption.map((option) => option.value))}} options={runesOptions} />
                            </Control>
                        </Field>
                    </Column>            
            </Columns>
            <Columns>
                <Column><Field><Control><Button color='link' type='submit'>Submit</Button></Control></Field></Column>
            </Columns>
        </form> 
    </Box>
    <DiabloTable headers={TABLE_HEADERS} items={runewords} renderRow={renderRow}/>
</div>
}


 export default Runewords;
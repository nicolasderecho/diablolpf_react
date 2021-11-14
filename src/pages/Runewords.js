import React, {useState, useEffect} from 'react';
import {Column, Box, Columns, Field, Label, Control, Button, Table, Tag} from 'tenpines-bulma-react';
import RunewordsList from '../data/json/runewords.json';
import RunesData from '../data/json/runes.json';
import Rune from '../shared/Rune';
import DiabloTable from '../shared/DiabloTable.js';
import {isBlank} from '../shared/helpers/util';
import flatten from 'lodash/flatten';
import uniq from 'lodash/uniq';
import capitalize from 'lodash/capitalize';
import Select from 'react-select';
import Spinner from '../shared/Spinner';
import ReactGA from 'react-ga';

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
    const [displayTable, setDisplayTable] = useState(false);

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
        ReactGA.set({ filter: JSON.stringify({name, originalName, holes, applicableIn, level, runes}) });
        ReactGA.event({
          category: 'Runewords',
          action: 'filtering-runewords'
        });
        filterRunewords();
    }

    useEffect(() => { window.setTimeout( () => setDisplayTable(true), 0) }, []);

    const renderRow = (runeword) => <Table.Row key={runeword.code}>
        <Table.Cell className={'diablo-table-item item-column-mobile'} >
            <Columns className={'runeword-name-container'} from={'mobile'} multiline>
                <Column className={'runeword-stats'} touchColumnSize={'full'} desktopColumnSize={'full'} widescreenColumnSize={'half'} >
                    <div className={'runeword-name-label'}>
                        <div className={'runeword-name'}><b>Nombre: </b>{runeword.name}</div>
                        { runeword.unlockable ? <Tag className={'unlockable'} color={'link'} size={'normal'} rounded>Desbloqueable</Tag> : null }
                    </div>
                    <div><b>Nombre original: </b>{runeword.code}</div>
                    <div><b>Nivel: </b>{runeword.level}</div>
                    <div><b>Aplicable en: </b>{runeword.applicableIn.join(', ')}</div>                
                </Column>
                <Column className={'runeword-runes'} touchColumnSize={'full'} desktopColumnSize={'full'} widescreenColumnSize={'half'} >
                    {runeword.runes.map((rune, index) => <div key={index} className={'rune-object'} ><Rune code={rune.code} name={rune.name}/></div>)}
                </Column>
            </Columns>
        </Table.Cell>
        <Table.Cell className={'diablo-table-item runeword-specs specifications-column-mobile'} >
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
                                <Select isMulti theme={selectTheme} styles={selectStyles} placeholder='Ej: Cualquiera' onChange={(selectedOption) => { setApplicableIn((selectedOption || []).map((option) => option.value))}} options={applicableInOptions} />
                            </Control>
                        </Field>
                    </Column>          
                    <Column style={{flexGrow: '4'}}>
                        <Field>
                            <Label>Runas que contiene</Label>
                            <Control>
                                <Select isMulti theme={selectTheme} styles={selectStyles} placeholder='Ej: Cualquiera' onChange={(selectedOption) => {setRunes( (selectedOption || []).map((option) => option.value))}} options={runesOptions} />
                            </Control>
                        </Field>
                    </Column>            
            </Columns>
            <Columns>
                <Column><Field><Control><Button color='link' type='submit'>Filtrar</Button></Control></Field></Column>
            </Columns>
        </form> 
    </Box>
    { displayTable  
        ? <DiabloTable headers={TABLE_HEADERS} items={runewords} renderRow={renderRow}/>
        : <div className={'spinner-container'}><Spinner /></div>
    }
</div>
}


 export default Runewords;
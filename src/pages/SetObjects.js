import React, {useState, useEffect}  from 'react';
import {Title, Table, Columns, Column, Box, Field, Control, Label, Subtitle} from 'tenpines-bulma-react';
import Spinner from '../shared/Spinner';
import { Sets } from '../shared/data';
import Select from 'react-select';

const selectTheme= (theme) => ({
  ...theme,
  borderRadius: 0,
  colors: {
  ...theme.colors,
  primary25: '#3273dc'
  }
});
const selectStyles= { option: (provided, state) => ({ ...provided, color: state.isFocused ? 'white': '#4a4a4a'}) };
const optionValue = (value, list) => list.find( element => element.value === value);

const SetTable = ({ setId }) => {
		const set = Sets.find(aSet => aSet.id === setId);

		if(!set) { return <div className='set-select-label'>Elegí un Set</div> }

    return <React.Fragment>
			<Title as='span' style={{color: 'white', margin: '1em', marginLeft: '0.5em'}}>Aca iria el nombre</Title>
			<div className={'table-container'} style={{padding: '1em'}}>
				<Table bordered striped className={'diablo-table'}>
					<Table.Head>
						<Table.Row>
							<Table.CellHeader className={'diablo-table-item'}>Item</Table.CellHeader>
							<Table.CellHeader className={'diablo-table-item'}>Especificaciones</Table.CellHeader>
						</Table.Row>
					</Table.Head>
					<Table.Body>
						{ set.items.map( item => <Table.Row key={item.name}>
							<Table.Cell className={'diablo-table-item'} >
								<Columns from={'mobile'} multiline>
									<Column>{item.name}</Column>
								</Columns>
							</Table.Cell>
							<Table.Cell className={'diablo-table-item'} >{item.attributes.join(',')}</Table.Cell>
						</Table.Row>)}
						<Table.Cell colspan='2' className='bonuses-container'>
							<Columns multiline>
								<Column className='set-bonuses'>
									<Subtitle sizeNumber='6'>Bonificaciones Parciales</Subtitle>
									{ set.partialBonuses.length > 0 
										? set.partialBonuses.map( bonus => <span>{bonus}</span> )
										: <span>Ninguna</span> 
									}
								</Column>
								<Column className='set-bonuses'>
									<Subtitle sizeNumber='6'>Bonificaciones Totales</Subtitle>
										{ set.completeBonuses.length > 0 
											? set.completeBonuses.map( bonus => <span>{bonus}</span> )
											: <span>Ninguna</span> 
										}									
								</Column>
							</Columns>
						</Table.Cell>
					</Table.Body>
				</Table>
			</div>
    </React.Fragment>
};

const sortedSets = Sets.map(set => set.name).sort().map( setName => Sets.find( set => set.name === setName));
const SetsOptions = [{value: '', label: 'Selecciona un set'}].concat( sortedSets.map( set => ({value: set.id, label: set.name})) );

const SetObjects = () => {
	  const [selectableOptions, updateSelectableOptions] = useState(SetsOptions);
    const [selectedSet, updateSelectedSet] = useState('');
    const [displayTable, setDisplayTable] = useState(false);
    useEffect(() => { window.setTimeout( () => setDisplayTable(true), 0) }, []);

		const updateSelectedOption = (selectedOption) => {
			if(selectableOptions[0].value === '') { updateSelectableOptions(selectableOptions.slice(1)); }
			updateSelectedSet(selectedOption.value);
		}

    return <div className={'page-container'}>
			<Box className={'diablo-filter-box'}>
				<Columns>
					<Column style={{flexGrow: '2'}}>
						<Field>
							<Label>Nombre del Set</Label>
							<Control>
								<Select theme={selectTheme} searchable={false} styles={selectStyles} value={optionValue(selectedSet, SetsOptions)} onChange={updateSelectedOption} options={selectableOptions} />
							</Control>
						</Field>
					</Column>                   
				</Columns>
			</Box>
      { displayTable  
        ? <SetTable setId={selectedSet} />
        : <div className={'spinner-container'}><Spinner /></div>
      }
    </div>;
}

export default SetObjects;
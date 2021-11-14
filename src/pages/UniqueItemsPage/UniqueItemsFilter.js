import React, {useState} from 'react';
import ObjectTypes from '../../data/json/object_types.json';
import {Columns, Box, Button, Column, Label, Control, Field} from 'tenpines-bulma-react';

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

const getKeyByValue = (element, value) => Object.keys(element).find(key => element[key] === value);

const objectTypesValues = Object.values(ObjectTypes).sort();
const objectTypes = [{value: '', label: 'Cualquiera'}].concat( objectTypesValues.map(label => ({value: getKeyByValue(ObjectTypes, label), label: label})) );
const itemTypes  = [{value: '', label: 'Cualquiera'}, {value: 'normal', label: 'Normal'}, {value: 'exceptional', label: 'Excepcional'}, {value: 'elite', label: 'Elite'}];
const characters = [{value: '', label: 'Cualquiera'}, {value: 'amazon', label: 'Amazona'}, {value: 'assasin', label: 'Asesina'}, {value: 'barbarian', label: 'Bárbaro'},{value: 'druid', label: 'Druída'}, {value: 'sorcerer', label: 'Hechicera'}, {value: 'necromancer', label: 'Nigromante'}, {value: 'paladin', label: 'Paladín'}];

const UniqueItemsFilter = ({onSubmit = () => {}, ...props}) => {
	const [itemType,setItemType] = useState('');
	const [character,setCharacter] = useState('');
	const [objectType,setObjectType] = useState('');
	const submitForm = (event) => {
		onSubmit(event, {itemType, character, objectType});
	};
	return <Box className={'diablo-filter-box'}>
		<form onSubmit={submitForm}>
			<Columns>
				<Column style={{flexGrow: '2'}}>
					<Field>
						<Label>Tipo de Item</Label>
						<Control>
							<Select theme={selectTheme} searchable={false} styles={selectStyles} value={optionValue(itemType, itemTypes)} onChange={(selectedOption) => setItemType(selectedOption.value)} options={itemTypes} />
						</Control>
					</Field>
				</Column>
				<Column style={{flexGrow: '2'}}>
					<Field>
						<Label>Personaje</Label>
						<Control>
							<Select theme={selectTheme} searchable={false} styles={selectStyles} value={optionValue(character, characters)} onChange={(selectedOption) => setCharacter(selectedOption.value)} options={characters} />
						</Control>
					</Field>
				</Column>
				<Column style={{flexGrow: '2'}}>
					<Field>
						<Label>Tipo de Objeto</Label>
						<Control>
							<Select theme={selectTheme} searchable={false} styles={selectStyles} value={optionValue(objectType, objectTypes)} onChange={(selectedOption) => setObjectType(selectedOption.value)} options={objectTypes} />
						</Control>
					</Field>
				</Column>								             
			</Columns>
			<Columns>
					<Column><Field><Control><Button color='link' type='submit'>Filtrar</Button></Control></Field></Column>
			</Columns>
		</form> 
	</Box>;
};

export default UniqueItemsFilter;
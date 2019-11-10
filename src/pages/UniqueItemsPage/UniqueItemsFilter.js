import React, {useState} from 'react';
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

const itemTypes = [{value: '', label: 'Cualquiera'}, {value: 'normal', label: 'Normal'}, {value: 'exceptional', label: 'Excepcional'}, {value: 'elite', label: 'Elite'}];

const UniqueItemsFilter = ({onSubmit = () => {}, ...props}) => {
	const [itemType,setItemType] = useState('');
	const submitForm = (event) => {
		onSubmit(event, {itemType});
	};
	return <Box className={'diablo-filter-box'}>
		<form onSubmit={submitForm}>
			<Columns>
				<Column style={{flexGrow: '2'}}>
					<Field>
						<Label>Tipo de Item</Label>
						<Control>
							<Select theme={selectTheme} styles={selectStyles} value={optionValue(itemType, itemTypes)} onChange={(selectedOption) => setItemType(selectedOption.value)} options={itemTypes} />
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
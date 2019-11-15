import React, {useState, useEffect}  from 'react';
import {Columns, Column, Box, Field, Control, Label} from 'tenpines-bulma-react';
import Spinner from '../../shared/Spinner';
import { Sets } from '../../shared/information/data';
import Select from 'react-select';
import SetTable from './SetTable';

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
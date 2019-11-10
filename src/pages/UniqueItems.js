import React, {useState, useEffect} from 'react';
import {Table, Columns, Box, Button, Column, Label, Control, Field} from 'tenpines-bulma-react';
import DiabloTable from '../shared/DiabloTable.js';
import Spinner from '../shared/Spinner';
import { UniqueItems } from '../shared/data.js';
import UniqueItem from '../shared/UniqueItem.js';
import ItemRequirements from '../shared/ItemRequirements.js';
import ItemSpecifications from '../shared/ItemSpecifications.js';
import capitalize from 'lodash/capitalize';
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

const optionValue = (value) => ({value: value, label: capitalize(value || 'Cualquiera')});

const TABLE_HEADERS = ['Item', 'Especificaciones'];
const itemTypes = ['normal', 'exceptional', 'elite'];

const UniqueItemsPage = (props) => {
    const renderRow = (item) => <Table.Row key={item.id}>
        <Table.Cell className={'diablo-table-item no-border-padding'} >
            <UniqueItem name={item.itemLabelName} image={item.image} />
            <ItemRequirements item={item} />
        </Table.Cell>
        <Table.Cell>
            <ItemSpecifications item={item} />
        </Table.Cell>
    </Table.Row>;
    const [displayTable, setDisplayTable] = useState(false);
    const availableItems = UniqueItems;
    const [itemType,setItemType] = useState('');
    useEffect(() => { window.setTimeout( () => setDisplayTable(true), 0) }, []);

    const onSubmit = () => console.log('Vamos a filtrar mi amor...');

    return <div className={'page-container'}>
      <Box className={'diablo-filter-box'}>
        <form onSubmit={onSubmit}>
            <Columns>
                <Column style={{flexGrow: '2'}}>
                    <Field>
                        <Label>Tipo de Item</Label>
                        <Control>
                            <Select theme={selectTheme} styles={selectStyles} value={optionValue(itemType)} onChange={(selectedOption) => setItemType(selectedOption.value)} options={itemTypes} />
                        </Control>
                    </Field>
                </Column>               
            </Columns>
          <Columns>
              <Column><Field><Control><Button color='link' type='submit'>Submit</Button></Control></Field></Column>
          </Columns>
        </form> 
      </Box>        
      { displayTable  
        ? <DiabloTable className={'unique-items-table'} headers={TABLE_HEADERS} items={availableItems} renderRow={renderRow}/>
        : <div className={'spinner-container'}><Spinner /></div>
      }
    </div>;
}

export default UniqueItemsPage;
import React, {useState, useEffect} from 'react';
import {Table} from 'tenpines-bulma-react';
import DiabloTable from '../../shared/DiabloTable.js';
import Spinner from '../../shared/Spinner';
import { UniqueItems } from '../../shared/data.js';
import UniqueItem from '../../shared/UniqueItem.js';
import ItemRequirements from '../../shared/ItemRequirements.js';
import ItemSpecifications from '../../shared/ItemSpecifications.js';
import UniqueItemsFilter from './UniqueItemsFilter';
import { isBlank } from '../../shared/util.js';

const TABLE_HEADERS = ['Item', 'Especificaciones'];

const renderRow = (item) => <Table.Row key={item.id}>
  <Table.Cell className={'diablo-table-item no-border-padding unique-item-data'} >
      <UniqueItem name={item.itemLabelName} image={item.image} />
      <ItemRequirements item={item} />
  </Table.Cell>
  <Table.Cell>
      <ItemSpecifications item={item} />
  </Table.Cell>
</Table.Row>;

const UniqueItemsPage = () => {
    const [items, setItems] = useState(UniqueItems);
    const [displayTable, setDisplayTable] = useState(false);
    
    const matchesItemType = (item, selectedItemType) => isBlank(selectedItemType) || item.itemClass === selectedItemType;
    const matchesCharacter = (item, selectedCharacter) => isBlank(selectedCharacter) || item.character === selectedCharacter;
    const matchesObjectType = (item, selectedObjectType) => isBlank(selectedObjectType) || item.itemType === selectedObjectType;
    const matchesFilters = (item, filters) => matchesItemType(item, filters.itemType) && matchesCharacter(item, filters.character) && matchesObjectType(item, filters.objectType); 
    const filterItems = (filters) => setItems(UniqueItems.filter(item => matchesFilters(item, filters)));

    const onSubmit = (event, filters) => {
      event.preventDefault();
      setDisplayTable(false);
      window.setTimeout( () => {
        filterItems(filters);
        setDisplayTable(true);
      }, 0);
    }

    useEffect(() => { window.setTimeout( () => setDisplayTable(true), 0) }, []);

    return <div className={'page-container'}>
      <UniqueItemsFilter onSubmit={onSubmit} />
      { displayTable  
        ? <DiabloTable className={'unique-items-table'} headers={TABLE_HEADERS} items={items} renderRow={renderRow}/>
        : <div className={'spinner-container'}><Spinner /></div>
      }
    </div>;
}

export default UniqueItemsPage;
import React, {useState, useEffect} from 'react';
import {Table} from 'tenpines-bulma-react';
import DiabloTable from '../../shared/DiabloTable.js';
import Spinner from '../../shared/Spinner';
import BaseItems from '../../data/json/base_items.json';
import ObjectTypes from '../../data/json/object_types.json';
import BaseItemsFilter from './BaseItemsFilter';
import { isBlank, itemClassName, characterName } from '../../shared/helpers/util.js';
import { capitalize } from 'lodash'

const TABLE_HEADERS = ['Item', 'Especificaciones'];

const renderRow = (item) => { 
return <Table.Row key={`${item.codeName}-${item.itemType}-${item.itemClass}`}>
  <Table.Cell className={'diablo-table-item no-border-padding unique-item-data item-column'} >
      <div className="base-item-type">{ObjectTypes[capitalize(item.itemType)]}</div>
      <div className="base-item-image">
          <img src={item.imageUrl} alt={item.name} />
      </div>
      <div className="has-text-weight-bold">{item.name}</div>
      <div className="unique-name">{item.originalName}</div>
      {
          item.tcNumber 
          ? <div className="item-tc-number">TC: {item.tcNumber}</div>
          : null 
      }
  </Table.Cell>
  <Table.Cell className='specifications-column'>
      <div className="character-item">
        Item {itemClassName(item.itemClass)}
      </div>
      {
          item.character 
            ? <div className="green-text"> Solo para {characterName(item.character)} </div>
            : null
      }
      {
          !!item.requiredLevel
          ? <div className="item-requirement">Nivel: {item.requiredLevel}</div>
          : null
      }
      {
          !!item.requiredStrength
          ? <div className="item-requirement">Fuerza: {item.requiredStrength}</div>
          : null
      }
      {
          !!item.requiredDexterity
          ? <div className="item-requirement">Destreza: {item.requiredDexterity}</div>
          : null
      }
      {
          !!item.sockets
          ? <div className="item-requirement">Engarces: {item.sockets} (Máximo)</div>
          : null
      }
      {
          !!item.hitDamage
          ? <div className="item-requirement">Daño de Golpe del Paladín: {item.hitDamage}</div>
          : null
      }
      {
          !!item.blockPala && item.blockPala > 0
          ? <div className="item-requirement">Posibilidad de bloqueo Paladín: {item.blockPala}%</div>
          : null
      }
      {
          !!item.blockDruNecSorc && item.blockDruNecSorc > 0
          ? <div className="item-requirement">Posibilidad de bloqueo Druida/Hechi/Nigro: {item.blockDruNecSorc}%</div>
          : null
      }
      {
          !!item.blockAmaAsaBaba && item.blockAmaAsaBaba > 0
          ? <div className="item-requirement">Posibilidad de bloqueo Amazona/Asesina/Baba: {item.blockAmaAsaBaba}%</div>
          : null
      }
    
      { item.attributes.map( (attribute, index) => <div key={index}>{attribute}</div> ) }
  </Table.Cell>
</Table.Row> };

const BaseItemsPage = () => {
    const [items, setItems] = useState(BaseItems);
    const [displayTable, setDisplayTable] = useState(false);
    
    const matchesItemType = (item, selectedItemType) => isBlank(selectedItemType) || item.itemClass.toLowerCase() === selectedItemType.toLowerCase();
    const matchesCharacter = (item, selectedCharacter) => isBlank(selectedCharacter) || item.character === selectedCharacter;
    const matchesObjectType = (item, selectedObjectType) => isBlank(selectedObjectType) || item.itemType.toLowerCase() === selectedObjectType.toLowerCase();
    const matchesFilters = (item, filters) => matchesItemType(item, filters.itemType) && matchesCharacter(item, filters.character) && matchesObjectType(item, filters.objectType); 
    const filterItems = (filters) => setItems(BaseItems.filter(item => matchesFilters(item, filters)));

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
      <BaseItemsFilter onSubmit={onSubmit} />
      { displayTable  
        ? <DiabloTable className={'unique-items-table'} headers={TABLE_HEADERS} items={items} renderRow={renderRow}/>
        : <div className={'spinner-container'}><Spinner /></div>
      }
    </div>;
}

export default BaseItemsPage;
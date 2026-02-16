import React, { useState, useEffect } from 'react';
import DiabloTable from '../../shared/DiabloTable.js';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import PageContainer from '../../components/ui/PageContainer';
import TableRow from '../../components/ui/TableRow';
import UniqueItems from '../../data/json/unique_items.json';
import UniqueItem from '../../shared/UniqueItem.js';
import ItemRequirements from '../../shared/ItemRequirements.js';
import ItemSpecifications from '../../shared/ItemSpecifications.js';
import UniqueItemsFilter from './UniqueItemsFilter';
import { isBlank } from '../../shared/helpers/util.js';

const TABLE_HEADERS = ['Item', 'Especificaciones'];

const renderRow = (item) => (
  <TableRow key={item.id}>
    <td className="diablo-table-item px-0 unique-item-data w-1/4 min-w-[200px] table-cell align-top text-center">
      <UniqueItem name={item.itemLabelName} image={item.imageUrl} />
      <ItemRequirements item={item} />
    </td>
    <td className="specifications-column min-w-[300px] table-cell align-top text-left">
      <ItemSpecifications item={item} />
    </td>
  </TableRow>
);

const UniqueItemsPage = () => {
  const [items, setItems] = useState(UniqueItems);
  const [displayTable, setDisplayTable] = useState(false);

  const matchesItemType = (item, selectedItemType) =>
    isBlank(selectedItemType) || item.itemClass === selectedItemType;
  const matchesCharacter = (item, selectedCharacter) =>
    isBlank(selectedCharacter) || item.character === selectedCharacter;
  const matchesObjectType = (item, selectedObjectType) =>
    isBlank(selectedObjectType) || item.itemType === selectedObjectType;
  const matchesFilters = (item, filters) =>
    matchesItemType(item, filters.itemType) &&
    matchesCharacter(item, filters.character) &&
    matchesObjectType(item, filters.objectType);
  const filterItems = (filters) => setItems(UniqueItems.filter((item) => matchesFilters(item, filters)));

  const onSubmit = (event, filters) => {
    event.preventDefault();
    setDisplayTable(false);
    window.setTimeout(() => {
      filterItems(filters);
      setDisplayTable(true);
    }, 0);
  };

  useEffect(() => {
    window.setTimeout(() => setDisplayTable(true), 0);
  }, []);

  return (
    <PageContainer>
      <UniqueItemsFilter onSubmit={onSubmit} />
      {displayTable ? (
        <DiabloTable className="unique-items-table" headers={TABLE_HEADERS} items={items} renderRow={renderRow} />
      ) : (
        <LoadingSpinner />
      )}
    </PageContainer>
  );
};

export default UniqueItemsPage;

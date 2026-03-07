import { useEffect, useState, type FormEvent } from 'react';
import DiabloTable from '../../shared/DiabloTable';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import PageContainer from '../../components/ui/PageContainer';
import TableRow from '../../components/ui/TableRow';
import RawUniqueItems from '../../data/json/unique_items.json';
import UniqueItem from '../../shared/UniqueItem';
import ItemRequirements from '../../shared/ItemRequirements';
import ItemSpecifications from '../../shared/ItemSpecifications';
import UniqueItemsFilter from './UniqueItemsFilter';
import { isBlank } from '../../shared/helpers/util';
import type { FilterValues, UniqueItemData } from '../../types';

const TABLE_HEADERS = ['Item', 'Especificaciones'];
const UniqueItemsData = RawUniqueItems as UniqueItemData[];

const renderRow = (item: UniqueItemData) => (
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
  const [items, setItems] = useState<UniqueItemData[]>(UniqueItemsData);
  const [displayTable, setDisplayTable] = useState(false);

  const matchesItemType = (item: UniqueItemData, selectedItemType: string): boolean =>
    isBlank(selectedItemType) || item.itemClass === selectedItemType;
  const matchesCharacter = (item: UniqueItemData, selectedCharacter: string): boolean =>
    isBlank(selectedCharacter) || item.character === selectedCharacter;
  const matchesObjectType = (item: UniqueItemData, selectedObjectType: string): boolean =>
    isBlank(selectedObjectType) || item.itemType === selectedObjectType;
  const matchesFilters = (item: UniqueItemData, filters: FilterValues): boolean =>
    matchesItemType(item, filters.itemType) &&
    matchesCharacter(item, filters.character) &&
    matchesObjectType(item, filters.objectType);

  const filterItems = (filters: FilterValues) =>
    setItems(UniqueItemsData.filter((item) => matchesFilters(item, filters)));

  const onSubmit = (event: FormEvent<HTMLFormElement>, filters: FilterValues) => {
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
        <DiabloTable
          className="unique-items-table"
          headers={TABLE_HEADERS}
          items={items}
          renderRow={renderRow}
        />
      ) : (
        <LoadingSpinner />
      )}
    </PageContainer>
  );
};

export default UniqueItemsPage;

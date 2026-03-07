import { useEffect, useState, type FormEvent } from 'react';
import { capitalize } from 'lodash';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import PageContainer from '../../components/ui/PageContainer';
import TableRow from '../../components/ui/TableRow';
import DiabloTable from '../../shared/DiabloTable';
import RawBaseItems from '../../data/json/base_items.json';
import ObjectTypesJson from '../../data/json/object_types.json';
import BaseItemsFilter from './BaseItemsFilter';
import { characterName, isBlank, itemClassName } from '../../shared/helpers/util';
import type { BaseItemData, FilterValues, ObjectTypeMap } from '../../types';

const TABLE_HEADERS = ['Item', 'Especificaciones'];
const BaseItemsData = RawBaseItems as BaseItemData[];
const ObjectTypes = ObjectTypesJson as ObjectTypeMap;

const renderRow = (item: BaseItemData) => (
  <TableRow key={`${item.codeName}-${item.itemType}-${item.itemClass}`}>
    <td className="diablo-table-item px-0 unique-item-data w-1/4 min-w-[200px] table-cell align-top text-center">
      <div className="flex flex-col items-center">
        <div className="base-item-type">{ObjectTypes[capitalize(item.itemType)]}</div>
        <div className="base-item-image">
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className="font-bold">{item.name}</div>
        <div className="unique-name">{item.originalName}</div>
        {item.tcNumber ? <div className="item-tc-number text-diablo-orange">TC: {item.tcNumber}</div> : null}
      </div>
    </td>
    <td className="specifications-column min-w-[300px] table-cell align-top text-left">
      <div className="character-item">Item {itemClassName(item.itemClass)}</div>
      {item.character ? (
        <div className="text-diablo-green"> Solo para {characterName(item.character)} </div>
      ) : null}
      {!!item.requiredLevel && <div className="item-requirement">Nivel: {item.requiredLevel}</div>}
      {!!item.requiredStrength && <div className="item-requirement">Fuerza: {item.requiredStrength}</div>}
      {!!item.requiredDexterity && <div className="item-requirement">Destreza: {item.requiredDexterity}</div>}
      {!!item.sockets && <div className="item-requirement">Engarces: {item.sockets} (Máximo)</div>}
      {!!item.hitDamage && (
        <div className="item-requirement">Daño de Golpe del Paladín: {item.hitDamage}</div>
      )}
      {!!item.blockPala && item.blockPala > 0 && (
        <div className="item-requirement">Posibilidad de bloqueo Paladín: {item.blockPala}%</div>
      )}
      {!!item.blockDruNecSorc && item.blockDruNecSorc > 0 && (
        <div className="item-requirement">
          Posibilidad de bloqueo Druida/Hechi/Nigro: {item.blockDruNecSorc}%
        </div>
      )}
      {!!item.blockAmaAsaBaba && item.blockAmaAsaBaba > 0 && (
        <div className="item-requirement">
          Posibilidad de bloqueo Amazona/Asesina/Baba: {item.blockAmaAsaBaba}%
        </div>
      )}
      {item.attributes.map((attribute, index) => (
        <div key={index}>{attribute}</div>
      ))}
    </td>
  </TableRow>
);

const BaseItemsPage = () => {
  const [items, setItems] = useState<BaseItemData[]>(BaseItemsData);
  const [displayTable, setDisplayTable] = useState(false);

  const matchesItemType = (item: BaseItemData, selectedItemType: string): boolean =>
    isBlank(selectedItemType) || item.itemClass.toLowerCase() === selectedItemType.toLowerCase();
  const matchesCharacter = (item: BaseItemData, selectedCharacter: string): boolean =>
    isBlank(selectedCharacter) || item.character === selectedCharacter;
  const matchesObjectType = (item: BaseItemData, selectedObjectType: string): boolean =>
    isBlank(selectedObjectType) || item.itemType.toLowerCase() === selectedObjectType.toLowerCase();
  const matchesFilters = (item: BaseItemData, filters: FilterValues): boolean =>
    matchesItemType(item, filters.itemType) &&
    matchesCharacter(item, filters.character) &&
    matchesObjectType(item, filters.objectType);

  const filterItems = (filters: FilterValues) =>
    setItems(BaseItemsData.filter((item) => matchesFilters(item, filters)));

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
      <BaseItemsFilter onSubmit={onSubmit} />
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

export default BaseItemsPage;

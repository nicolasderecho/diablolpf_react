import { itemClassName, requirementName } from './helpers/util';
import type { UniqueItemData } from '../types';

const itemExtraAttributes = (extraAttributes: string[]): string[] =>
  extraAttributes.filter((attribute) => !attribute.match(/required/));

type ItemSpecificationsProps = {
  item: UniqueItemData;
};

const ItemSpecifications = ({ item }: ItemSpecificationsProps) => (
  <>
    <div className="text-diablo-orange">Item {itemClassName(item.itemClass)}</div>
    {itemExtraAttributes(item.extraAttributes).map((attribute, index) => (
      <div key={index} className="text-diablo-blue">
        {requirementName(attribute)}: {String(item[attribute] ?? '')}
      </div>
    ))}
    {item.attributes.map((attribute, index) => (
      <div key={index}>{attribute}</div>
    ))}
  </>
);

export default ItemSpecifications;

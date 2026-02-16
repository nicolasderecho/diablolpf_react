import React from  'react';
import { requirementName, itemClassName } from './helpers/util';

const itemExtraAttributes = (extraAttributes) => extraAttributes.filter(attribute => !attribute.match(/required/));

const ItemSpecifications = ({ item }) => (
  <>
    <div className="text-diablo-orange">Item {itemClassName(item.itemClass)}</div>
    {itemExtraAttributes(item.extraAttributes).map((attribute, index) => (
      <div key={index} className="text-diablo-blue">
        {requirementName(attribute)}: {item[attribute]}
      </div>
    ))}
    {item.attributes.map((attribute, index) => (
      <div key={index}>{attribute}</div>
    ))}
  </>
);

export default ItemSpecifications;
import React from  'react';
import { requirementName, characterName } from './helpers/util';

const extraRequirements = (extraAttributes) => extraAttributes.filter(attribute => !!attribute.match(/required/));

const ItemRequirements = ({ item }) => {
  const characterLabel = item.isCharacterItem ? (
    <div className="text-diablo-green">Solo para {characterName(item.character)}</div>
  ) : null;
  return (
    <>
      <div className="text-diablo-gold font-medium">{item.name}</div>
      <div className="text-diablo-gold font-medium">({item.originalName})</div>
      {characterLabel}
      <div>
        <div className="text-diablo-blue">Nivel requerido: {item.requiredLevel}</div>
        {extraRequirements(item.extraAttributes).map((attribute) => (
          <div key={attribute} className="text-diablo-blue">
            {requirementName(attribute)}: {item[attribute]}
          </div>
        ))}
      </div>
      {!!item.tcNumber && <div className="text-diablo-orange">TC: {item.tcNumber}</div>}
    </>
  );
};

export default ItemRequirements;
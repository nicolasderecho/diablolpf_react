import { characterName, requirementName } from './helpers/util';
import type { UniqueItemData } from '../types';

const extraRequirements = (extraAttributes: string[]): string[] =>
  extraAttributes.filter((attribute) => !!attribute.match(/required/));

type ItemRequirementsProps = {
  item: UniqueItemData;
};

const ItemRequirements = ({ item }: ItemRequirementsProps) => {
  const characterLabel = item.isCharacterItem ? (
    <div className="text-diablo-green">Solo para {characterName(item.character || '')}</div>
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
            {requirementName(attribute)}: {String(item[attribute] ?? '')}
          </div>
        ))}
      </div>
      {!!item.tcNumber && <div className="text-diablo-orange">TC: {item.tcNumber}</div>}
    </>
  );
};

export default ItemRequirements;

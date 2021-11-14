import React from  'react';
import { requirementName, characterName } from './helpers/util';

const extraRequirements = (extraAttributes) => extraAttributes.filter(attribute => !!attribute.match(/required/));

const ItemRequirements = ({item}) => {
    const characterLabel = item.isCharacterItem ? <div className={'green-text'}>Solo para {characterName(item.character)}</div> : null;
    return <React.Fragment>
        <div className={'unique-name'}>{item.name}</div>
        <div className={'unique-name'}>({item.originalName})</div>
        {characterLabel}
        <div className={'item-requirements'}>
            <div className={'item-requirement'}>Nivel requerido: {item.requiredLevel}</div>
            { extraRequirements(item.extraAttributes).map( attribute =>  <div key={attribute} className={'item-requirement'}>
                { requirementName(attribute) }: { item[attribute] }
            </div> )}
        </div>
    </React.Fragment>;
}

export default ItemRequirements;
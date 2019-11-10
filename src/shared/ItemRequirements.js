import React from  'react';
import {Image} from 'tenpines-bulma-react';

const REQUIREMENT_NAMES = {
    damage: 'Daño',
    defense: 'Defensa',
    requiredDexterity: 'Destreza requerida',
    requiredStrong: 'Fuerza requerida',
    oneHandedamage: 'Daño a una mano',
    twoHandedamage: 'Daño a dos manos',
    assassinDamage: 'Daño de Patada de la Asesina',
    beltHoles: 'Huecos',
    paladinDamage: 'Daño de Golpe del Paladín',
    paladinBlock: 'Posibilidad de bloqueo Paladín',
    druNecSorBlock: 'Posibilidad de bloqueo Druida/Hechi/Nigro',
    amaAssaBarBlock: 'Posibilidad de bloqueo Amazona/Asesina/Baba',
    throwingDamage: 'Daño de lanzamiento',
    maximumCapacity: 'Capacidad máxima',
    blockChance: 'Posibilidad de bloqueo',
    hitDamage: 'Daño de Golpe'
};

const CHARACTER_NAMES = {
    amazon: 'Amazona',
    necromancer: 'Nigromante',
    sorcerer: 'Hechicera',
    barbarian: 'Bárbaro',
    druid: 'Druída',
    assasin: 'Asesina',
    paladin: 'Paladín'
};

const requirementName = (requirement) => REQUIREMENT_NAMES[requirement] || requirement;
const characterName = (character) => CHARACTER_NAMES[character] || character;

const ItemRequirements = ({item}) => {
    const characterLabel = item.isCharacterItem ? <div className={'character-item'}>Solo para {characterName(item.character)}</div> : null;
    return <React.Fragment>
        <div className={'unique-name'}>{item.name}</div>
        <div className={'unique-name'}>({item.originalName})</div>
        {characterLabel}
        <div className={'item-requirements'}>
            <div className={'item-requirement'}>Nivel requerido: {item.requiredLevel}</div>
            { item.extraAttributes.map( attribute =>  <div key={attribute} className={'item-requirement'}>
                { requirementName(attribute) }: { item[attribute] }
            </div> )}
        </div>
    </React.Fragment>;
}

export default ItemRequirements;
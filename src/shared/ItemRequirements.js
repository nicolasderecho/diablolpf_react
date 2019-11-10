import React from  'react';
import {Image} from 'tenpines-bulma-react';

const REQUIREMENT_NAMES = {
    damage: 'Daño',
    defense: 'Defensa',
    requiredDexterity: 'Destreza requerida',
    requiredStrong: 'Fuerza requerida',
    oneHandedamage: 'Daño a una mano',
    twoHandedamage: 'Daño a dos manos',
    assassinDamage: 'assassinDamage',
    beltHoles: 'Huecos',
    paladinDamage: 'pala',
    paladinBlock: 'Posibilidad de bloqueo Paladín',
    druNecSorBlock: 'druNecSorBlock',
    amaAssaBarBlock: 'amaAssaBarBlock',
    throwingDamage: 'Daño de lanzamiento',
    maximumCapacity: 'Capacidad máxima',
    blockChance: 'Posibilidad de bloqueo',
    hitDamage: 'Daño de Golpe del Paladín'
};

const requirementName = (requirement) => REQUIREMENT_NAMES[requirement] || requirement;

const ItemRequirements = ({item}) => {
    return <React.Fragment>
        <div className={'unique-name'}>{item.name}</div>
        <div className={'unique-name'}>({item.originalName})</div>
        <div className={'item-requirements'}>
            <div className={'item-requirement'}>Nivel requerido: {item.requiredLevel}</div>
            { item.extraAttributes.map( attribute =>  <div key={attribute} className={'item-requirement'}>
                { requirementName(attribute) }: { item[attribute] }
            </div> )}
        </div>
    </React.Fragment>;
}

export default ItemRequirements;
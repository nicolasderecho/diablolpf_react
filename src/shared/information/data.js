import JsonRunes from '../../data/runes.json';
import JsonGems from '../../data/gems.json';
import JsonRunewords from '../../data/runewords.json';
import JsonCubeRecipes from '../../data/cube_recipies.json';
import sortBy from 'lodash/sortBy';
import flattenDeep from 'lodash.flattendeep'; 
import { NORMAL_ITEMS, ELITE_ITEMS, EXCEPTIONAL_ITEMS, PJ_ITEMS, SETS } from '../../data/uniqueItems';

const findRuneByCode = (code) => JsonRunes.find((aRune) => aRune.code === code);
const findGemByCode  = (code) => JsonGems.find((aGem) => aGem.code === code);
const findItemByCode = (code) => findRuneByCode(code) || findGemByCode(code);

const RunesData = JsonRunes.map( rune => Object.assign({}, rune , {itemsRecipe: rune.upgrade_item_codes.map(findItemByCode)}));
const CubeRecipes = JsonCubeRecipes;
const Gems = JsonGems;

const UnorderedRunewords = JsonRunewords.map( (runeword) => Object.assign({}, 
    { holes: runeword.holes, level: runeword.level, name: runeword.name, type: runeword.type, code: runeword.code, specs: runeword.specs, applicableIn: runeword.applicable_in, unlockable: !!runeword.unlockable }, 
    { runes: runeword.rune_codes.map( (runeCode) => findRuneByCode(runeCode) ), runeCodes: runeword.rune_codes } ) ); 

const Runewords = sortBy(UnorderedRunewords, ['level', 'name']);

const randomString = () =>  Math.random().toString(36).substr(2, 9);
const buildId = () => `${randomString()}-${randomString()}-${randomString()}-${randomString()}`;
const cleanAttributes = (attributes) => {
    const rawAttributes = attributes || [];
    return rawAttributes.filter( attribute => attribute !== 'speed' && attribute !== 'requiredLevel' );
}
const itemTypeFor = (itemType) => {
    const translations = {
        Glove: 'Gloves',
        Ring: 'Helm',
        Bastón: 'Staff',
        Daga: 'Dagger',
        Cetro: 'Scepter'
    }
    return translations[itemType] || itemType;
}

const itemLabelFor = (itemLabel, itemType) => {
    const translations = {
        Dagger: 'Daga',
        Armor: 'Armadura',
        Belt: 'Cinturón',
        Boot: 'Botas',
        Scepter: 'Cetro',
        Staff: 'Bastón',
    }
    return translations[itemType] || itemLabel;
}
const UniqueItems = flattenDeep([NORMAL_ITEMS, ELITE_ITEMS, EXCEPTIONAL_ITEMS, PJ_ITEMS])
    .map(item => Object.assign({}, item, {
        id: buildId(), 
        itemLabelName: item.itemLabelName || item.itemLabel,
        extraAttributes: cleanAttributes(item.extraAttributes),
        isCharacterItem: !!(item.isCharacterItem),
        itemType: itemTypeFor(item.itemType),
        itemLabel: itemLabelFor(item.itemLabel, itemTypeFor(item.itemType))
    }));

const ObjectTypes = UniqueItems.reduce( (objects, item) => Object.assign({}, objects, {[item.itemType]: item.itemLabel}), {});

window.items = UniqueItems;
window.objectTypes = ObjectTypes;

export const REQUIREMENT_NAMES = {
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

const Sets = SETS.map( set => Object.assign({}, set, {id: buildId() }));

export const requirementName = (requirement) => REQUIREMENT_NAMES[requirement] || requirement;

export { RunesData, Gems, CubeRecipes, Runewords, UniqueItems, ObjectTypes, Sets }
import JsonRunes from '../../data/runes.json';
import JsonGems from '../../data/gems.json';
import JsonRunewords from '../../data/runewords.json';
import JsonCubeRecipes from '../../data/cube_recipies.json';
import sortBy from 'lodash/sortBy';
import isNil from 'lodash/isNil';
import flattenDeep from 'lodash.flattendeep'; 
import { NORMAL_ITEMS, ELITE_ITEMS, EXCEPTIONAL_ITEMS, PJ_ITEMS, SETS, ITEM_IMAGES } from '../../data/items';
import {buildId} from "../helpers/util";
import {D2_MANTIX_IMAGES} from "../../data/images";

const normalizedString = string => string.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const isSameName = (firstName, secondName) => !isNil(firstName) && !isNil(secondName) && normalizedString(firstName) === normalizedString(secondName);
const mantixImages = flattenDeep(Object.values(D2_MANTIX_IMAGES));

const allImages = ITEM_IMAGES.map(image => {
    const mantixImage = mantixImages.find(anImage => isSameName(anImage.name, image.name) || isSameName(anImage.originalName, image.originalName) ) || {};
    return Object.assign({}, image, {
        url: mantixImage.image
    })
});

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
        id: item.id || buildId(),
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
    oneHandedDamage: 'Daño a una mano',
    twoHandedamage: 'Daño a dos manos',
    twoHandedDamage: 'Daño a dos manos',
    assassinDamage: 'Daño de Patada de la Asesina',
    kickDamage: 'Daño de Patada de la Asesina',
    beltHoles: 'Huecos',
    paladinDamage: 'Daño de Golpe del Paladín',
    paladinBlock: 'Posibilidad de bloqueo Paladín',
    blockPala: 'Posibilidad de bloqueo Paladín',
    druNecSorBlock: 'Posibilidad de bloqueo Druida/Hechi/Nigro',
    blockDruNecSorc: 'Posibilidad de bloqueo Druida/Hechi/Nigro',
    amaAssaBarBlock: 'Posibilidad de bloqueo Amazona/Asesina/Baba',
    blockAmaAsaBaba: 'Posibilidad de bloqueo Amazona/Asesina/Baba',
    throwingDamage: 'Daño de lanzamiento',
    maximumCapacity: 'Capacidad máxima',
    blockChance: 'Posibilidad de bloqueo',
    hitDamage: 'Daño de Golpe',
    requiredLevel: 'Nivel Requerido',
    durability: 'Durabilidad'
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
export const characterName = (character) => CHARACTER_NAMES[character] || character;

const Sets = SETS.map( set => Object.assign({}, set, {id: set.id || buildId() }));

export const requirementKeys = () => [ "requiredLevel", "requiredStrong", "requiredDexterity", "damage", "oneHandedamage", "oneHandedDamage", "twoHandedamage", "twoHandedDamage", "defense", "assassinDamage", "kickDamage", "paladinDamage", "paladinBlock", "blockPala", "druNecSorBlock", "blockDruNecSorc", "amaAssaBarBlock", "blockAmaAsaBaba", "throwingDamage", "maximumCapacity", "blockChance", "hitDamage", "beltHoles"];

export const requirementKeysFor = (itemKeys) => requirementKeys().filter( itemKey => itemKeys.indexOf(itemKey) !== -1 );

export const requirementName = (requirement) => REQUIREMENT_NAMES[requirement] || requirement;

export const imageUrl = (image) => {
    const itemImage = allImages.find( element => element.image === image ) || {};
    return itemImage.url || itemImage.image || image;
};

export { RunesData, Gems, CubeRecipes, Runewords, UniqueItems, ObjectTypes, Sets }
import JsonRunes from '../data/runes.json';
import JsonGems from '../data/gems.json';
import JsonRunewords from '../data/runewords.json';
import JsonCubeRecipes from '../data/cube_recipies.json';
import sortBy from 'lodash/sortBy';
import flattenDeep from 'lodash.flattendeep'; 
import { NORMAL_ITEMS, ELITE_ITEMS, EXCEPTIONAL_ITEMS, PJ_ITEMS } from '../data/uniqueItems'; 

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

const Tips = {
    fireSkills: 'Icluye todo el árbol Fuego de hechicera, así como habilidades de amazona (flecha de fuego, flecha explosiva, flecha inmoladora), de paladín (fuego sagrado), de druida (garras de fuego, tormenta de fuego, roca líquida, fisura, volcán, armagedón), de asesina (puños de fuego, cola de dragón, ráfaga de fuego, estela de fuego, estela infernal), y de nigromante (golem de fuego, explosión de cadáveres).',
    damageOnMana: "Es un modificador que sirve para recuperar cantidades de la preciada materia azul cada vez que eres dañado. Contrariamente a la creencia popular, NO reduce de ninguna manera los daños recibidos, sino que el porcentaje poseído se aplica sobre la cifra obtenida para calcular cuánto maná se recupera. De esta manera, si tenemos 50% de daño infligido repercute en el maná y nos llevamos 100 puntos de daño, perderíamos 100 puntos de vida (supongamos que no tenemos resistencias ni daños reducidos de ninguna clase) y, en caso de no tener nuestra orbe de maná completa, recuperaríamos de golpe 50 puntos de materia azul. Si la cantidad bruta de maná recuperado excede el total que podemos llegar a tener los puntos restantes se perderán.<br/>Daño infligido repercute en el maná sólamente se aplica cuando se reciben daños de tipo físico, sean hechos en combate cuerpo a cuerpo o a distancia. El modificador no será tenido en cuenta si nos atacan con magia, elementales, o veneno.",
    normalUnique: 'Son los objetos únicos que tienen como base un objeto normal (que se puede encontrar en los niveles de dificultad normal, pesadilla e infierno).',
    exceptionalUnique: 'Son los objetos únicos que tienen como base un objeto excepcional (que se puede encontrar finalizando el nivel de dificultad normal, y empieza a ser más común en los niveles pesadilla e infierno).',
    eliteUnique: 'Son los objetos que tienen como base un objeto élite (que se puede encontrar finalizando el nivel de dificultad pesadilla, y empieza a ser más común en el nivel infierno).'
}

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

export const requirementName = (requirement) => REQUIREMENT_NAMES[requirement] || requirement;

export { RunesData, Gems, CubeRecipes, Runewords, Tips, UniqueItems, ObjectTypes }
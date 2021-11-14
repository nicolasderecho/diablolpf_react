export const isBlank = (string) => string === '';

export const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export const matchesArrayFilter = (filter, array) => {
    const regExp = new RegExp(escapeRegExp(filter), 'i');
    return isBlank(filter) || array.some((prop) => regExp.test(prop));
};

export const randomString = () =>  Math.random().toString(36).substr(2, 9);
export const buildId = () => `${randomString()}-${randomString()}-${randomString()}-${randomString()}`;

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

export const requirementKeys = () => [ "requiredLevel", "requiredStrong", "requiredDexterity", "damage", "oneHandedamage", "oneHandedDamage", "twoHandedamage", "twoHandedDamage", "defense", "assassinDamage", "kickDamage", "paladinDamage", "paladinBlock", "blockPala", "druNecSorBlock", "blockDruNecSorc", "amaAssaBarBlock", "blockAmaAsaBaba", "throwingDamage", "maximumCapacity", "blockChance", "hitDamage", "beltHoles"];

export const requirementKeysFor = (itemKeys) => requirementKeys().filter( itemKey => itemKeys.indexOf(itemKey) !== -1 );

export const requirementName = (requirement) => REQUIREMENT_NAMES[requirement] || requirement;
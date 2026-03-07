import type { Character, ItemClass } from '../../types';

export const isBlank = (value: string): boolean => value === '';

export const escapeRegExp = (value: string): string =>
  value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export const matchesArrayFilter = (filter: string, array: string[]): boolean => {
  const regExp = new RegExp(escapeRegExp(filter), 'i');
  return isBlank(filter) || array.some((prop) => regExp.test(prop));
};

export const randomString = (): string => Math.random().toString(36).substr(2, 9);

export const buildId = (): string =>
  `${randomString()}-${randomString()}-${randomString()}-${randomString()}`;

export const REQUIREMENT_NAMES: Record<string, string> = {
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
  durability: 'Durabilidad',
};

const CHARACTER_NAMES: Record<Character, string> = {
  amazon: 'Amazona',
  necromancer: 'Nigromante',
  sorcerer: 'Hechicera',
  barbarian: 'Bárbaro',
  druid: 'Druída',
  assasin: 'Asesina',
  paladin: 'Paladín',
};

const ITEM_CLASSES: Record<ItemClass, string> = {
  normal: 'Normal',
  exceptional: 'Excepcional',
  elite: 'Elite',
};

export const itemClassName = (itemClass: string): string =>
  ITEM_CLASSES[itemClass as ItemClass] || itemClass;

export const characterName = (character: string): string =>
  CHARACTER_NAMES[character as Character] || character;

export const requirementKeys = (): string[] => [
  'requiredLevel',
  'requiredStrong',
  'requiredDexterity',
  'damage',
  'oneHandedamage',
  'oneHandedDamage',
  'twoHandedamage',
  'twoHandedDamage',
  'defense',
  'assassinDamage',
  'kickDamage',
  'paladinDamage',
  'paladinBlock',
  'blockPala',
  'druNecSorBlock',
  'blockDruNecSorc',
  'amaAssaBarBlock',
  'blockAmaAsaBaba',
  'throwingDamage',
  'maximumCapacity',
  'blockChance',
  'hitDamage',
  'beltHoles',
];

export const requirementKeysFor = (itemKeys: string[]): string[] =>
  requirementKeys().filter((itemKey) => itemKeys.indexOf(itemKey) !== -1);

export const requirementName = (requirement: string): string =>
  REQUIREMENT_NAMES[requirement] || requirement;

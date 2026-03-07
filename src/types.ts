export type ItemClass = 'normal' | 'exceptional' | 'elite' | (string & {});
export type Character =
  | 'amazon'
  | 'assasin'
  | 'barbarian'
  | 'druid'
  | 'necromancer'
  | 'paladin'
  | 'sorcerer'
  | (string & {});

export interface SelectOption<T extends string | number = string> {
  value: T;
  label: string;
}

export type RequirementValue = string | number;

export interface RequirementMap {
  [key: string]: RequirementValue;
}

export interface ActArea {
  originalName: string;
  normalTc: number;
  nightmareTc: number;
  hellTc: number;
  name: string;
}

export interface CubeRecipeItem {
  type: 'gem' | 'rune' | string;
  code: string;
  name: string;
}

export interface RuneData {
  position: number;
  name: string;
  level: number;
  code: string;
  type: string;
  upgrade_item_codes: string[];
  armors: string[];
  helms: string[];
  shields: string[];
  weapons: string[];
  itemsRecipe: CubeRecipeItem[];
  imageUrl?: string;
}

export interface GemData {
  name: string;
  level: number;
  code: string;
  gem_type: string;
  type: string;
  armors: string[];
  helms: string[];
  shields: string[];
  weapons: string[];
}

export interface CubeFormula {
  description: string;
  items: string[];
  result: string;
  type: string;
}

type ItemRecordValue =
  | string
  | number
  | boolean
  | undefined
  | string[]
  | RequirementMap
  | SetItemData[];

export interface ItemRecord {
  [key: string]: ItemRecordValue;
}

export interface UniqueItemData extends ItemRecord {
  name: string;
  originalName: string;
  itemType: string;
  itemLabel: string;
  itemClass: ItemClass;
  requiredLevel?: number;
  attributes: string[];
  id: string;
  itemLabelName: string;
  extraAttributes: string[];
  isCharacterItem: boolean;
  imageCodeName: string;
  imageUrl: string;
  tcNumber?: number;
  character?: Character;
}

export interface BaseItemData extends ItemRecord {
  name: string;
  originalName: string;
  codeName: string;
  tcNumber?: number;
  attributes: string[];
  itemType: string;
  itemClass: ItemClass;
  sockets?: number;
  imageUrl: string;
  character?: Character;
  requiredLevel?: number;
  requiredStrength?: number;
  requiredDexterity?: number;
  hitDamage?: number | string;
  blockPala?: number;
  blockDruNecSorc?: number;
  blockAmaAsaBaba?: number;
}

export interface SetItemData extends ItemRecord {
  labelName: string;
  name: string;
  originalName: string;
  requirements: RequirementMap;
  attributes: string[];
  id: string;
  imageUrl: string;
  tcNumber?: number;
  setAttributes?: string[];
  isCharacterItem?: boolean;
}

export interface SetData {
  name: string;
  items: SetItemData[];
  partialBonuses: string[];
  completeBonuses: string[];
  id: string;
  isCharacterSet?: boolean;
  character?: Character;
}

export interface RunewordData {
  holes: number;
  level: number;
  name: string;
  type: string;
  code: string;
  specs: string[];
  applicableIn: string[];
  unlockable?: boolean;
  runeCodes: string[];
  runes: RuneData[];
}

export interface FilterValues {
  itemType: string;
  character: string;
  objectType: string;
}

export type ObjectTypeMap = Record<string, string>;

const JsonRunes = require('./runes.json');
const JsonGems = require('./gems.json');
const JsonRunewords = require('./runewords.json');
const JsonCubeRecipes = require('./cube_recipes.json');
const { sortBy, flattenDeep, pickBy, uniq, includes } = require('lodash');
const { NORMAL_ITEMS, ELITE_ITEMS, EXCEPTIONAL_ITEMS, PJ_ITEMS, SETS } = require('./items');
const { BASE_ITEMS } = require("./base_items")
const { TC_AREAS } = require("./tc_by_area") //position 0 acto 1, position 39 Acto 2, position 74 Acto 3,position 102 Acto 4, position 108 Acto 5 
const { UNIQUE_ITEMS } = require("./unique_items")

const randomString = () =>  Math.random().toString(36).substr(2, 9);
const buildId = () => `${randomString()}-${randomString()}-${randomString()}-${randomString()}`;
const findRuneByCode = (code) => JsonRunes.find((aRune) => aRune.code === code);
const findGemByCode  = (code) => JsonGems.find((aGem) => aGem.code === code);
const findItemByCode = (code) => findRuneByCode(code) || findGemByCode(code);

const RunesData = JsonRunes.map( rune => {
    const data = Object.assign({}, rune , {itemsRecipe: rune.upgrade_item_codes.map(findItemByCode), imageUrl: `/assets/legacy/runes/${rune.code.toLowerCase()}.png`})
    delete data.image
    return data
});
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

const toImageName = name => name.toLowerCase().trim().replace(/\s/g, "_").replaceAll("'", "")

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

const parseItemOriginalName = string => string.toLowerCase().replace(/\s+/gi, "").replace(/\á/gi,'a').replace(/\é/gi,'e').replace(/\í/gi,'i').replace(/\ó/gi,'o').replace(/\ú/gi,'u').replace(/\'s/gi,'')

const UniqueItems = flattenDeep([NORMAL_ITEMS, ELITE_ITEMS, EXCEPTIONAL_ITEMS, PJ_ITEMS])
    .map(item => {
        delete item.image
        const uniqueItem = UNIQUE_ITEMS.find(uitem => parseItemOriginalName(uitem.codeName) === parseItemOriginalName(item.originalName) ) || {}        
        return Object.assign({}, item, {
            id: item.id || buildId(),
            itemLabelName: item.itemLabelName || item.itemLabel,
            extraAttributes: cleanAttributes(item.extraAttributes),
            isCharacterItem: !!(item.isCharacterItem),
            itemType: itemTypeFor(item.itemType),
            itemLabel: itemLabelFor(item.itemLabel, itemTypeFor(item.itemType)),
            imageCodeName: toImageName(item.originalName),
            tcNumber: uniqueItem.tcNumber || item.tcNumber,
            imageUrl: `/assets/legacy/items/unique/${toImageName(item.originalName)}.png`
        })
    });

const ObjectTypes = UniqueItems.reduce( (objects, item) => Object.assign({}, objects, {[item.itemType]: item.itemLabel.toLowerCase() === 'casco' ? 'Yelmo' : item.itemLabel}), {});

const Sets = SETS.map( set => {
    return Object.assign({}, set, {
        id: (set.id || buildId()), 
        items: set.items.map(item => {
            delete item.image 
            return Object.assign({}, item, {imageUrl: `/assets/legacy/items/set/${toImageName(item.originalName)}.png`})
        }) 
    })
});

const BaseItems = BASE_ITEMS.map(baseItem => {
    const attributes = baseItem.attributes.filter(string => !string.match(/tipo de objeto/i))
    delete baseItem.image
    return Object.assign({}, baseItem, { attributes: attributes, imageUrl: `/assets/legacy/items/base/${toImageName(baseItem.originalName)}.png` });
})

const BASE_ITEM_TYPES = uniq(BaseItems.map(baseItem => baseItem.itemType))

const BaseItemObjectTypes = pickBy(ObjectTypes, (value, key) => includes(BASE_ITEM_TYPES, key.toLocaleLowerCase()) )

const ActOneAreas = TC_AREAS.slice(1, 39)
const ActTwoAreas = TC_AREAS.slice(40, 74)
const ActThreeAreas = TC_AREAS.slice(75, 102)
const ActFourAreas = TC_AREAS.slice(103, 108)
const ActFiveAreas = TC_AREAS.slice(109, 140)

module.exports = {
    RunesData: RunesData,
    Gems: Gems,
    CubeRecipes: CubeRecipes,
    Runewords: Runewords,
    UniqueItems: UniqueItems,
    ObjectTypes: ObjectTypes,
    Sets: Sets,
    BaseItems: BaseItems,
    BaseItemObjectTypes: BaseItemObjectTypes,
    ActOneAreas, ActTwoAreas, ActThreeAreas, ActFourAreas, ActFiveAreas
}
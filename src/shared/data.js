import JsonRunes from '../data/runes.json';
import JsonGems from '../data/gems.json';

const findRuneByCode = (code) => JsonRunes.find((aRune) => aRune.code === code);
const findGemByCode  = (code) => JsonGems.find((aGem) => aGem.code === code);
const findItemByCode = (code) => findRuneByCode(code) || findGemByCode(code);

const RunesData = JsonRunes.map( rune => Object.assign({}, rune , {itemsRecipe: rune.upgrade_item_codes.map(findItemByCode)}));

const Gems = JsonGems;

export { RunesData, Gems }
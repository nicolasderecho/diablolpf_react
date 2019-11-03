//Shared methods
const lastElement  = (list) => list.slice(-1)[0];
const cleanEmpty   = (list) => list.filter( item => item !== null && item !== undefined && item !== "" );
const cleanSymbols = (string) => string.replace(new RegExp('↵|\n', 'g'), '').replace(new RegExp('`|’', 'g'), '\'');
const imageURL = (imagePath) => `https://www.diablo2latino.com/${imagePath}`;
const findAndParseAttribute = (element) => cleanSymbols(lastElement(element)).trim();
var extractItems = (rootElement, { itemClass, itemType, itemLabel, extraAttributesSearcher = () => ({}), levelPosition = 4, levelSubposition = 3, imagePosition = 3, namesPosition = 1, attributesPosition = 5 }) => {
    const itemsContainers = Array.from(rootElement.querySelectorAll('table'));
    return itemsContainers.map(itemContainer => {
        const itemDataList = itemContainer.querySelectorAll('tr > td');
        const namesContainer = itemDataList[namesPosition].querySelector('strong');
        const imageContainer = itemDataList[imagePosition].querySelector('strong');
        const itemLabelName = lastElement(imageContainer.innerHTML.split('<br>'));
        const image = imageURL(imageContainer.querySelector('img').getAttribute('src'));
        const requiredLevelContainer = itemDataList[levelPosition].innerHTML.split('<br>');
        const requiredLevel = lastElement(cleanSymbols(requiredLevelContainer[levelSubposition]).split(' '));
        const attributesContainer = itemDataList[attributesPosition].querySelector('font');
        const rawAttributes = attributesContainer.innerHTML.split('<br>');
        const attributes = cleanEmpty(rawAttributes).map(cleanSymbols);
        const [rawName, rawOriginalName] = namesContainer.innerText.split('(');
        const name = rawName.trim();
        const originalName = cleanSymbols(rawOriginalName).replace(')', '').trim();
        return Object.assign({}, {
            name,
            originalName,
            itemClass,
            itemType,
            itemLabel,
            itemLabelName,
            image,
            requiredLevel,
            attributes
        }, extraAttributesSearcher(itemDataList))
    });    
}
//Shared methods

var extractBows = (itemsContainer, itemClass) => {
    const searcher = (itemDataList) => {
        const base = itemDataList[4].innerHTML.split('<br>');
        const damage = findAndParseAttribute(base[2].split(':'));
        const requiredStrong = findAndParseAttribute(base[4].split(':'))
        const requiredDexterity = findAndParseAttribute(base[5].split(':'));
        const speed = findAndParseAttribute(base[6].split(':'));
        return { speed, damage, requiredStrong, requiredDexterity, extraAttributes: ["damage", "requiredStrong", "requiredDexterity", "speed"] }
    };
    return extractItems(itemsContainer, { extraAttributesSearcher: searcher, itemClass: itemClass, itemType: 'Bow', itemLabel: 'Arco' });
}

//funciona con cascos
var extractArmors = (itemsContainer, itemClass, itemType = 'Armor', itemLabel = 'Arma de Guerra') => {
    const searcher = (itemDataList) => {
        const base = itemDataList[4].innerHTML.split('<br>');
        const defense = findAndParseAttribute(base[2].split(':'));
        const requiredStrong = findAndParseAttribute(base[4].split(':'));
        return { defense, requiredStrong, extraAttributes: ["defense", "requiredStrong"] }
    };
    return extractItems(itemsContainer, { extraAttributesSearcher: searcher, itemClass: itemClass, itemType: itemType, itemLabel: itemLabel });
}

//funciona con bastones
var extractWarWeapons = (itemsContainer, itemClass, itemType = 'War-Weapon', itemLabel = 'Arma de Guerra') => {
    const searcher = (itemDataList) => {
        const base = itemDataList[4].innerHTML.split('<br>');
        const damage = findAndParseAttribute(base[2].split(':'));
        const requiredStrong = findAndParseAttribute(base[4].split(':'))
        const requiredDexterity = findAndParseAttribute(base[5].split(':'));
        const speed = findAndParseAttribute(base[7].split(':'));
        return { speed, damage, requiredStrong, requiredDexterity, extraAttributes: ["damage", "requiredStrong", "requiredDexterity", "speed"] }
    };
    return extractItems(itemsContainer, { extraAttributesSearcher: searcher, itemClass: itemClass, itemType: itemType, itemLabel: itemLabel });
}

var extractCrossBows = (itemsContainer, itemClass, itemType = 'CrossBow', itemLabel = 'Ballesta') => {
    const searcher = (itemDataList) => {
        const base = itemDataList[4].innerHTML.split('<br>');
        const damage = findAndParseAttribute(base[2].split(':'));
        const requiredStrong = findAndParseAttribute(base[4].split(':'))
        const requiredDexterity = findAndParseAttribute(base[5].split(':'));
        const speed = findAndParseAttribute(base[6].split(':'));
        return { speed, damage, requiredStrong, requiredDexterity, extraAttributes: ["damage", "requiredStrong", "requiredDexterity", "speed"] }
    };
    return extractItems(itemsContainer, { extraAttributesSearcher: searcher, itemClass: itemClass, itemType: itemType, itemLabel: itemLabel });
}

var extractBoots = (itemsContainer, itemClass) => {
    const searcher = (itemDataList) => {
        const base = itemDataList[4].innerHTML.split('<br>');
        const defense = findAndParseAttribute(base[2].split(':'));
        const requiredStrong = findAndParseAttribute(base[4].split(':'));
        const assassinDamage = findAndParseAttribute(base[6].split(':'));
        return { defense, requiredStrong, assassinDamage, extraAttributes: ["defense", "requiredStrong", "assassinDamage"] }
    };
    return extractItems(itemsContainer, { extraAttributesSearcher: searcher, itemClass: itemClass, itemType: 'Boot', itemLabel: 'Bota' });
}
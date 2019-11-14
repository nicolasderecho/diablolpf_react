//http://www.d2mantix.com/diablo2lod-items-sets.html
//Shared methods
const lastElement  = (list) => list.slice(-1)[0];
const cleanEmpty   = (list) => list.filter( item => item !== null && item !== undefined && item !== "" );
const cleanSymbols = (string) => string.replace(new RegExp('↵|\n', 'g'), '').replace(new RegExp('`|’', 'g'), '\'');
const imageURL = (imagePath) => `https://www.diablo2latino.com/${imagePath}`;
const findAndParseAttribute = (element) => cleanSymbols(lastElement(element)).trim();
const nodeListToArray = (nodeList) => Array.from(nodeList);

const tabsRegExp = /(\r\n|\n|\r)/gm;

const extractBonus = (element) => {
    return element.innerText.split(tabsRegExp).splice(2).filter( attribute => !attribute.match(tabsRegExp)).map(cleanSymbols);
}

var requirementNames = {
    defensa: 'defense',
    nivel: 'requiredLevel',
    fuerza: 'requiredStrong',
    durabilidad: 'durability',
    'destreza': 'requiredDexterity',
    'daño 2 manos': 'twoHandedDamage',
    'daño de patada': 'kickDamage',
    huecos: 'beltHoles',
    'posibilidad de bloqueardru/nig/hech': 'blockChance',
    'daño 1 mano': 'oneHandedDamage',
    'daño de golpe': 'hitDamage',
    'posibilidad de bloquear pal': 'blockPala',
    'ama/asn/bar': 'blockAmaAsaBaba',
    'dru/nig/hech': 'blockDruNecSorc'
};

const cleanString = (string) => cleanSymbols(string).trim().replace(/\s+/g, ' ');

const htmlStringToText = (string) => {
    const htmlElement = document.createElement('div');
    htmlElement.innerHTML = string;    
    return cleanString(htmlElement.innerText);
}

//wrappear texto blanco en div .requirements
//wrappear texto azul en div .attributes

//a = document.createElement('div');
//a.innerHTML = array[0].split('Defensa:')[1]
var extractSetItems = (rootElement, name) => {
    const rows = nodeListToArray(rootElement.querySelectorAll('tbody > tr'))
    const bonusRow = lastElement(rows);
    const setItems = rows.slice(0, -1).map(row => {
        const tds = row.querySelectorAll('td');
        const firstPart = tds[0];
        const secondPart = tds[1];
        const image = row.querySelector('img').src;
        const labelNameSection = firstPart.innerHTML.split('<br>');
        const labelName = labelNameSection[3];
        const [itemName, itemOriginalName] = firstPart.querySelector('.TituloSet').innerHTML.split('<br>');
        const item = { image, labelName: labelName, name:itemName, originalName: itemOriginalName, requirements: {} };
        
        const requirementsContainer = secondPart.querySelector('.requirements'); 
        const attributesContainer = secondPart.querySelector('.attributes');
        const setAttributesContainer = secondPart.querySelector('.set'); 

        if(!!setAttributesContainer) {
            item.setAttributes = setAttributesContainer.innerHTML.split('<br>').map(cleanString);
        }
        
        item.attributes = attributesContainer.innerHTML.split('<br>').map(htmlStringToText);

        const rawRequirements = requirementsContainer.innerHTML.split('<br>').filter(a => a.length > 0);
        rawRequirements.forEach(requirementRow => {
            const [rawKey, value] = requirementRow.split(':');
            const key = rawKey.toLowerCase();
            if(Object.keys(requirementNames).some(aKey => aKey === key)) {
                item.requirements[ requirementNames[key] ] = htmlStringToText(value);
            }
        });
        
        //$0.querySelector('.requirements').innerHTML.split('<br>').filter(a => a.length > 0)
        //item.requirements = { requiredLevel: 30, defense: 'as', requiredStrong: 12 };
        const texto = tds[1].innerText;
        return item;
    });
    //bonus
    const bonuses = bonusRow.querySelectorAll('td')[1].querySelectorAll('.TituloUnico');
    let partialBonuses,completeBonuses;
    if(bonuses.length == 2){
        partialBonuses = extractBonus(bonuses[0]);
        completeBonuses = extractBonus(bonuses[1]);
    }
    else {
        partialBonuses = [];
        completeBonuses = extractBonus(bonuses[0]);
    }

    return {name, items: setItems, partialBonuses, completeBonuses, isCharacterSet: false };
}
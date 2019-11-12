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

const extractSetItems = (rootElement, name) => {
    const rows = nodeListToArray(rootElement.querySelectorAll('tbody > tr'))
    const bonusRow = lastElement(rows);
    const setItems = rows.slice(0, -1).map(row => {
        const tds = row.querySelectorAll('td');
        const image = row.querySelector('img').src;
        const labelName = lastElement(tds[0].innerHTML.split('<br>'));
        const [itemName, itemOriginalName] = rows[0].querySelectorAll('td')[0].querySelector('.TituloSet').innerHTML.split('<br>');
        const item = { image, labelName: labelName, name:itemName, originalName: itemOriginalName  };
        //item.requirements = { requiredLevel: 30, defense: 'as', requiredStrong: 12 };
        const texto = tds[1].innerText;
        console.log(texto);
        debugger
        return item;
    });
    //bonus
    const bonuses = bonusRow.querySelectorAll('td')[1].querySelectorAll('.TituloUnico');
    const partialBonuses = extractBonus(bonuses[0]);
    const completeBonuses = extractBonus(bonuses[1]);
     
    return {name, items: setItems, partialBonuses, completeBonuses };
}
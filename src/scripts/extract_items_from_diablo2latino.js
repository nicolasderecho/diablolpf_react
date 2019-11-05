//https://www.diablo2latino.com/Objetos-unicoslista.html
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

//funciona con cascos y guantes
var extractArmors = (itemsContainer, itemClass, itemType = 'Armor', itemLabel = 'Arma de Guerra') => {
    const searcher = (itemDataList) => {
        const base = itemDataList[4].innerHTML.split('<br>');
        const defense = findAndParseAttribute(base[2].split('Defensa:'));
        const requiredStrong = findAndParseAttribute(base[4].split(':'));
        return { defense, requiredStrong, extraAttributes: ["defense", "requiredStrong"] }
    };
    return extractItems(itemsContainer, { extraAttributesSearcher: searcher, itemClass: itemClass, itemType: itemType, itemLabel: itemLabel });
}

//funciona con bastones, cetros, dagas, Lanzas
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

var extractBelts = (itemsContainer, itemClass, itemType = 'Belt', itemLabel = 'Belts') => {
    const searcher = (itemDataList) => {
        const base = itemDataList[4].innerHTML.split('<br>');
        const defense = findAndParseAttribute(base[2].split(':'));
        const requiredStrong = findAndParseAttribute(base[4].split(':'));
        const beltHoles = findAndParseAttribute(base[6].split(':')).split(' ')[0];
        return { defense, requiredStrong, beltHoles, extraAttributes: ["defense", "requiredStrong", "beltHoles"] }
    };
    return extractItems(itemsContainer, { extraAttributesSearcher: searcher, itemClass: itemClass, itemType: itemType, itemLabel: itemLabel });
}

var extractShields = (itemsContainer, itemClass, itemType = 'Shield', itemLabel = 'Escudo') => {
    const searcher = (itemDataList) => {
        const base = itemDataList[4].innerHTML.split('<br>');
        const defense = findAndParseAttribute(base[2].split('Defensa:'));
        const requiredStrong = findAndParseAttribute(base[4].split(':'))
        const blockBase = findAndParseAttribute(base[5].split('bloqueo:'));
        const blockByPj = blockBase.split(',');
        const paladinBlock = lastElement(blockByPj[0].split(' '));
        const amaAssaBarBlock = lastElement(blockByPj[1].split(' '));
        const druNecSorBlock = lastElement(blockByPj[2].split(' '));
        const paladinDamage = findAndParseAttribute(base[6].split(':'));
        const extraKeys = { paladinDamage, defense, requiredStrong, paladinBlock, druNecSorBlock, amaAssaBarBlock };
        return Object.assign({}, extraKeys, { extraAttributes: Object.keys(extraKeys) });
    };
    return extractItems(itemsContainer, { extraAttributesSearcher: searcher, itemClass: itemClass, itemType: itemType, itemLabel: itemLabel });
}

var extractSwords = (itemsContainer, itemClass, itemType = 'Sword', itemLabel = 'Espada') => {
    const oneHandedSwords = (base, itemDataList) => {
        const oneHandedamage = findAndParseAttribute(base[2].split(':'));
        const requiredStrong = findAndParseAttribute(base[4].split(':'))
        const requiredDexterity = findAndParseAttribute(base[5].split(':'));
        const speed = findAndParseAttribute(base[7].split(':'));
        return { speed, oneHandedamage, requiredStrong, requiredDexterity }; 
    }    
    const twoHandedSwords = (base, itemDataList) => {
        const oneHandedamage = findAndParseAttribute(base[2].split(':'));
        const twoHandedamage = findAndParseAttribute(base[3].split(':'));
        const requiredLevel = findAndParseAttribute(base[4].split(':'))
        const requiredStrong = findAndParseAttribute(base[5].split(':'))
        const requiredDexterity = findAndParseAttribute(base[6].split(':'));
        const speed = findAndParseAttribute(base[7].split(':'));
        return { speed, oneHandedamage, twoHandedamage, requiredLevel, requiredDexterity, requiredStrong };         
    }
    const searcher = (itemDataList) => {
        const base = itemDataList[4].innerHTML.split('<br>');
        const extractMethod = !!itemDataList[4].innerText.match('dos manos') ? twoHandedSwords : oneHandedSwords ;
        const extraKeys = extractMethod(base, itemDataList);
        return Object.assign({}, extraKeys, { extraAttributes: Object.keys(extraKeys) });
    };
    return extractItems(itemsContainer, { extraAttributesSearcher: searcher, itemClass: itemClass, itemType: itemType, itemLabel: itemLabel });
}

var extractAxes = (itemsContainer, itemClass, itemType = 'Axe', itemLabel = 'Hacha') => {
    const searcher = (itemDataList) => {
        const base = itemDataList[4].innerHTML.split('<br>');
        const damageKey = !!itemDataList[4].innerText.match('dos manos') ? 'twoHandedamage' : 'oneHandedamage';
        const damageValue = findAndParseAttribute(base[2].split(':'));
        const requiredStrong = findAndParseAttribute(base[4].split(':'))
        const requiredDexterity = findAndParseAttribute(base[5].split(':'));
        const speed = findAndParseAttribute((base[7] || base[5]).split(':'));
        const extraKeys = { speed, [damageKey]: damageValue, requiredStrong, requiredDexterity }; 
        return Object.assign({}, extraKeys, { extraAttributes: Object.keys(extraKeys) });
    };
    return extractItems(itemsContainer, { extraAttributesSearcher: searcher, itemClass: itemClass, itemType: itemType, itemLabel: itemLabel });
}

//funciona con objetos de lanzamientos
var extractJavelins = (itemsContainer, itemClass, itemType = 'Javelin', itemLabel = 'Jabalina') => {
    const searcher = (itemDataList) => {
        const base = itemDataList[4].innerHTML.split('<br>');
        const throwingDamage = findAndParseAttribute(base[2].split(':'));
        const damage = findAndParseAttribute(base[3].split(':'))
        const requiredLevel = findAndParseAttribute(base[4].split(':'));
        const requiredStrong = findAndParseAttribute(base[5].split(':'));
        const requiredDexterity = findAndParseAttribute(base[6].split(':'));
        const speed = findAndParseAttribute(base[7].split(':'));
        const maximumCapacity = findAndParseAttribute(base[8].split('(')).replace(')', '');
        const extraKeys = { damage, throwingDamage, requiredStrong, requiredDexterity, speed, maximumCapacity, requiredLevel };
        return Object.assign({}, extraKeys, { extraAttributes: Object.keys(extraKeys) });
    };
    return extractItems(itemsContainer, { extraAttributesSearcher: searcher, itemClass: itemClass, itemType: itemType, itemLabel: itemLabel });
}

var extractMaces = (itemsContainer, itemClass, itemType = 'Mace', itemLabel = 'Maza') => {
    const commonStats = (base, itemDataList) => {
        const requiredStrong = findAndParseAttribute(base[4].split(':'));
        const speed = findAndParseAttribute((base[7] || base[5]).split(':'));
        return { speed, requiredStrong }; 
    }    
    const dexterityStats = (base, itemDataList) => {
        const requiredStrong = findAndParseAttribute(base[4].split(':'))
        const requiredDexterity = findAndParseAttribute(base[5].split(':'));
        const speed = findAndParseAttribute(base[7].split(':'));
        return { speed, requiredDexterity, requiredStrong };         
    }
    const searcher = (itemDataList) => {
        const base = itemDataList[4].innerHTML.split('<br>');
        const damageKey = !!itemDataList[4].innerText.match('dos manos') ? 'twoHandedamage' : 'oneHandedamage';
        const damageValue = findAndParseAttribute(base[2].split(':'));
        const extractMethod = !!itemDataList[4].innerText.match('Destreza requerida') ? dexterityStats : commonStats ;
        const extraKeys = Object.assign({}, { [damageKey]: damageValue}, extractMethod(base, itemDataList)); 
        return Object.assign({}, extraKeys, { extraAttributes: Object.keys(extraKeys) });
    };
    return extractItems(itemsContainer, { extraAttributesSearcher: searcher, itemClass: itemClass, itemType: itemType, itemLabel: itemLabel });
}

var extractRods = (itemsContainer, itemClass, itemType = 'Rod', itemLabel = 'Vara') => {
    const searcher = (itemDataList) => {
        const base = itemDataList[4].innerHTML.split('<br>');
        const damage = findAndParseAttribute(base[2].split(':'));
        const requiredStrong = findAndParseAttribute(base[4].split(':'))
        const speed = findAndParseAttribute(base[6].split(':'));
        return { speed, damage, requiredStrong, extraAttributes: ["damage", "requiredStrong", "speed"] }
    };
    return extractItems(itemsContainer, { extraAttributesSearcher: searcher, itemClass: itemClass, itemType: itemType, itemLabel: itemLabel });
}

//Ejemplo para extraer joyas y hechizos
//extractItems($0, { itemClass: 'exceptional', itemType: 'Jewel', itemLabel: 'Joya', levelSubposition: 2 })

var extractRings = (itemsContainer, itemClass, itemType = 'Ring', itemLabel = 'Aro') => {
    const searcher = (itemDataList) => {
        const base = itemDataList[4].innerHTML.split('<br>');
        const defense = findAndParseAttribute(base[2].split('Defensa:'));
        return { defense, extraAttributes: ["defense"] }
    };
    return extractItems(itemsContainer, { extraAttributesSearcher: searcher, itemClass: itemClass, itemType: itemType, itemLabel: itemLabel });
}

var extractAmazonItems = (itemsContainer, itemClass, itemType = 'Javelin', itemLabel = 'Jabalina') => {
    const otherParser = (base, itemDataList) => {
        const twoHandedamage = findAndParseAttribute(base[2].split(':'));
        const requiredLevel = findAndParseAttribute(base[3].split(':'));
        const requiredStrong = findAndParseAttribute(base[4].split(':'));
        const requiredDexterity = findAndParseAttribute(base[5].split(':'));
        const extraKeys = { twoHandedamage, requiredStrong, requiredLevel, requiredDexterity, isCharacterItem: true, character: 'amazon' };
        return Object.assign({}, extraKeys, { extraAttributes: ["twoHandedamage", "requiredStrong", "requiredDexterity"] });        
    }

    const javelinParser = (base, itemDataList) => {
        const throwingDamage = findAndParseAttribute(base[2].split(':'));
        const oneHandedamage = findAndParseAttribute(base[3].split(':'));
        const requiredLevel = findAndParseAttribute(base[4].split(':'));
        const requiredStrong = findAndParseAttribute(base[5].split(':'));
        const requiredDexterity = findAndParseAttribute(base[6].split(':'));
        const maximumCapacity = findAndParseAttribute(base[7].split(':'));
        const extraKeys = { throwingDamage, oneHandedamage, requiredStrong, requiredLevel, requiredDexterity, maximumCapacity, isCharacterItem: true, character: 'amazon' };
        return Object.assign({}, extraKeys, { extraAttributes: ["throwingDamage", "oneHandedamage", "requiredStrong", "requiredDexterity", "maximumCapacity"] });        
    }

    const searcher = (itemDataList) => {
        const base = itemDataList[4].innerHTML.split('<br>');
        const isJavelin = !!itemDataList[4].innerHTML.match(/lanzamiento/);
        return isJavelin ? javelinParser(base, itemDataList) : otherParser(base, itemDataList);
    };
    return extractItems(itemsContainer, { extraAttributesSearcher: searcher, itemClass: itemClass, itemType: itemType, itemLabel: itemLabel });
}

var extractAssassinItems = (itemsContainer, itemClass, itemType = 'Claw', itemLabel = 'Garra') => {

    const searcher = (itemDataList) => {
        const base = itemDataList[4].innerHTML.split('<br>');
        const damage = findAndParseAttribute(base[2].split(':'));
        const requiredLevel = findAndParseAttribute(base[3].split(':'));
        const requiredStrong = findAndParseAttribute(base[4].split(':'));
        const requiredDexterity = findAndParseAttribute(base[5].split(':'));
        const extraKeys = { damage, requiredStrong, requiredLevel, requiredDexterity, isCharacterItem: true, character: 'assasin' };
        return Object.assign({}, extraKeys, { extraAttributes: ["damage", "requiredStrong", "requiredDexterity"] });        
    };
    return extractItems(itemsContainer, { extraAttributesSearcher: searcher, itemClass: itemClass, itemType: itemType, itemLabel: itemLabel });
}

var extractBabaItems = (itemsContainer, itemClass, itemType = 'Helm', itemLabel = 'Casco') => {

    const searcher = (itemDataList) => {
        const base = itemDataList[4].innerHTML.split('<br>');
        const defense = findAndParseAttribute(base[2].split('Defensa:'));
        const requiredLevel = findAndParseAttribute(base[3].split(':'));
        const requiredStrong = findAndParseAttribute(base[4].split(':'));
        const extraKeys = { defense, requiredStrong, requiredLevel, isCharacterItem: true, character: 'barbarian' };
        return Object.assign({}, extraKeys, { extraAttributes: ["defense", "requiredStrong"] });        
    };
    return extractItems(itemsContainer, { extraAttributesSearcher: searcher, itemClass: itemClass, itemType: itemType, itemLabel: itemLabel });
}

var extractDruidItems = (itemsContainer, itemClass, itemType = 'Helm', itemLabel = 'Casco') => {

    const searcher = (itemDataList) => {
        const base = itemDataList[4].innerHTML.split('<br>');
        const defense = findAndParseAttribute(base[2].split('Defensa:'));
        const requiredLevel = findAndParseAttribute(base[3].split(':'));
        const requiredStrong = findAndParseAttribute(base[4].split(':'));
        const extraKeys = { defense, requiredStrong, requiredLevel, isCharacterItem: true, character: 'druid' };
        return Object.assign({}, extraKeys, { extraAttributes: ["defense", "requiredStrong"] });        
    };
    return extractItems(itemsContainer, { extraAttributesSearcher: searcher, itemClass: itemClass, itemType: itemType, itemLabel: itemLabel });
}

var extractSorcItems = (itemsContainer, itemClass, itemType = 'Orb', itemLabel = 'Orbe') => {

    const searcher = (itemDataList) => {
        const base = itemDataList[4].innerHTML.split('<br>');
        const damage = findAndParseAttribute(base[2].split(':'));
        const requiredLevel = findAndParseAttribute(base[3].split(':'));
        const extraKeys = { damage, requiredLevel, isCharacterItem: true, character: 'sorcerer' };
        return Object.assign({}, extraKeys, { extraAttributes: ["damage"] });        
    };
    return extractItems(itemsContainer, { extraAttributesSearcher: searcher, itemClass: itemClass, itemType: itemType, itemLabel: itemLabel });
}
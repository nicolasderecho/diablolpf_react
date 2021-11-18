const nodeListToArray = (nodeList) => Array.from(nodeList);

//itemType => amulet
//itemClass => elite
var extractUniqueItems = (rootElement, itemType, itemClass, character) => {
    const rows = nodeListToArray(rootElement.querySelectorAll('tbody > tr'))

    items = rows.map(row => {
        const columns = nodeListToArray( row.querySelectorAll(":scope > td") )
        const leftSection = columns[0] 
        const rightSection = columns[1] 
        const image = leftSection.querySelector("img").src;
        const names = leftSection.querySelector('b').innerText.split("\n").map(string => string.trim())
        const name = names[0]
        const originalName = names[1]
        const codeName = originalName.replace(/\s+/g, '').toLowerCase()
        const tcElement = leftSection.children[leftSection.childElementCount - 1]
        const tcNumber = Number(tcElement.innerText.split(":")[tcElement.innerText.split(":").length - 1])
        const rawAttributes = rightSection.innerText.split('\n').filter(string => string.length > 0)
        
        const rawSockets =  rawAttributes.find(string => !!string.match(/engarces\:/i) ) || ""
        const rawRequiredStrength = rawAttributes.find(string => !!string.match(/fuerza\:/i) ) || ""
        const rawRequiredDexterity = rawAttributes.find(string => !!string.match(/destreza\:/i) ) || ""
        const rawRequiredLevel = rawAttributes.find(string => !!string.match(/nivel\:/i) ) || ""
        const rawPaladinSmite = rawAttributes.find(string => !!string.match(/paladin/i) ) || ""
        const rawBlockChance = rawAttributes.find(string => !!string.match(/posibilidad de bloquear/i) ) || ""
        const blockChances = rawBlockChance.match(/\d+/g)

        const requiredStrengthDigits = rawRequiredStrength.match(/\d+/)
        const requiredDexterityDigits = rawRequiredDexterity.match(/\d+/)
        const requiredLevelDigits = rawRequiredLevel.match(/\d+/)
        const paladingSmiteDigits = rawPaladinSmite.match(/\d+/g)
        
        const socketDigits = rawSockets.match(/\d+/)
        const attributesV0 = rawAttributes.filter(string => !string.match(/engarces\:/i) && !string.match(/fuerza\:/i) && !string.match(/destreza\:/i) && !string.match(/nivel\:/i) && !string.match(/paladin/i) && !string.match(/posibilidad de bloquear/i) && !string.match(/\(solo/i) && !string.match(/tipo de objeto/i) )
        const attributes = attributesV0.map(string => string.replace(/\* \(mas informacion\)/gi, ""))
        const data = { image, name, originalName, codeName, tcNumber, attributes, itemType, itemClass }

        if(requiredStrengthDigits) data.requiredStrength = Number(requiredStrengthDigits[0])
        if(requiredDexterityDigits) data.requiredDexterity = Number(requiredDexterityDigits[0])
        if(requiredLevelDigits) data.requiredLevel = Number(requiredLevelDigits[0])
        if(paladingSmiteDigits && paladingSmiteDigits.length > 0) data.hitDamage = paladingSmiteDigits.join("-")

        if(character && character.length > 0) data.character = character

        if(blockChances && blockChances.length > 0) {
            data.blockPala = Number(blockChances[0] || "")
            data.blockAmaAsaBaba = Number(blockChances[1] || "")
            data.blockDruNecSorc = Number(blockChances[2] || "")
        }

        if(socketDigits) data.sockets = Number(socketDigits[0])

        return data
    })

    return items

}
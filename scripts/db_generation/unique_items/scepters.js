const NORMAL_UNIQUE_SCEPTERS = [{"image":"http://www.d2mantix.com/diablo2img/scepter.JPG","name":"Knell Striker","originalName":"Knell Striker","codeName":"knellstriker","tcNumber":3,"attributes":["Daño 1 mano: (11-12) a (20-21) (varia) Rango (1)","Durabilidad: 50","Velocidad: [0]","+70-80% DaÃ±o Mejorado (Varia)","+50% DaÃ±o Aumentado a Muertos Vivientes","25% Posibilidad de Golpe Triturador","+35 a Puntacion de Ataque","Resistenca al Veneno +20%","Resistencia al Fuego +20%","+15 de mana"],"itemType":"scepter","itemClass":"normal","requiredStrength":25,"requiredLevel":5},{"image":"http://www.d2mantix.com/diablo2img/grandscepter.JPG","name":"Mango Oxidado","originalName":"Rusthandle","codeName":"rusthandle","tcNumber":15,"attributes":["Daño 1 mano: (16-17) a (35-37) (varia) Rango (2)","Durabilidad: 60","Velocidad: [10]","+50-60% DaÃ±o Mejorado (varia)","AÃ±ade 3-7 de DaÃ±o","100-110% DaÃ±o a los Muertos Vivientes (varia)","8% Vida Robada Por Impacto","DaÃ±o de Magia Reducido en 1"],"itemType":"scepter","itemClass":"normal","requiredStrength":37,"requiredLevel":18,"hitDamage":"1"},{"image":"http://www.d2mantix.com/diablo2img/warscepter.JPG","name":"Ojo de la Tormenta","originalName":"Stormeye","codeName":"stormeye","tcNumber":21,"attributes":["Daño 1 mano: (19-24)-(32-39) (varia) Rango (3)","Durabilidad: 70","Velocidad: [-10]","+80-120% Daño Mejorado (varia)","Añade 1-6 de Daño de Relámpago","Añade 3-5 de Daño de Frio, Duración 3 Seg. en Normal","Repostar Vida +10","+50% Daño a los Muertos Vivientes"],"itemType":"scepter","itemClass":"normal","requiredStrength":55,"requiredLevel":30}]

const EXCEPTIONAL_UNIQUE_SCEPTERS = [{"image":"http://www.d2mantix.com/diablo2img/scepter.JPG","name":"Mano de Zakarum","originalName":"Zakarum's Hand","codeName":"zakarumhand","tcNumber":33,"attributes":["Daño 1 mano: (39-44) a (70-80) (varia) Rango (1)","Durabilidad: 50","Velocidad: [0]","6% de Posibilidades de Lanzar el Nivel 5 Ventisca al Azotar","30% Velocidad de Ataque Aumentada","+180-220% DaÃ±o Mejorado (varia)","Ignorar Defensa del Objetivo","8% mana Robado Por Impacto","Regenerar mana 10%","Curar Resistencia Extra 15%","+50% DaÃ±o a los Muertos Vivientes"],"itemType":"scepter","itemClass":"exceptional","requiredStrength":58,"requiredLevel":37,"hitDamage":"2"},{"image":"http://www.d2mantix.com/diablo2img/grandscepter.JPG","name":"El Hisopo Fetido","originalName":"The Fetid Sprinkler","codeName":"thefetidsprinkler","tcNumber":42,"attributes":["Daño 1 mano: (54-58) a (121-132) (varia) Rango (2)","Durabilidad: 60","Velocidad: [10]","+160-190% Daño Mejorado (varia)","Añade 15-25 de Daño","+50% Daño a los Muertos Vivientes","+2 a los Niveles de Habilidad del Paladín","10% de Posibilidades de Lanzar el Nivel 1 Confusión al Azotar","5% de Posibilidades de Lanzar el Nivel 1 Decrepitación al Azotar","+160 de Daño de Veneno Durante 4 Segundos","+150-200 a Puntuación de Ataque (varia)"],"itemType":"scepter","itemClass":"exceptional","requiredStrength":76,"requiredLevel":38},{"image":"http://www.d2mantix.com/diablo2img/warscepter.JPG","name":"Mano de Luz Bendita","originalName":"Hand of Blessed Light","codeName":"handofblessedlight","tcNumber":45,"attributes":["Daño 1 mano: (59-64) a (134-146) (varia) Rango (3)","Durabilidad: 70","Velocidad: [-10]","+130-160% Daño Mejorado (varia)","Añade 20-45 de Daño","100% de Bonificación en el Ataque","+50% Daño a los Muertos Vivientes","Regenerar maná 15%","+50 Defensa","5% de Posibilidades de Lanzar el Nivel 4 Puño de los Cielos al Azotar","+4 al Radio de Luz","+2 a los Niveles de Habilidad del Paladín"],"itemType":"scepter","itemClass":"exceptional","requiredStrength":103,"requiredLevel":42}]

const ELITE_UNIQUE_SCEPTERS = [{"image":"http://www.d2mantix.com/diablo2img/scepter.JPG","name":"Luz Celestial","originalName":"Heaven's Light","codeName":"heavenlight","tcNumber":63,"attributes":["Daño 1 mano: (143-164) a (185-212) (varia) Rango (1)","Durabilidad: 50","Velocidad: [0]","+250-300% DaÃ±o Mejorado (varia)","+50% DaÃ±o a los Muertos Vivientes","-33% Defensa del Objetivo","+20% Velocidad de Ataque Aumentada","33% Posibilidad de Golpe Triturador","+15-20 a la Vida Tras Cada Demonio Muerte (varia)","+3 al Radio de Luz","Engarces (1-2) (varia)"],"itemType":"scepter","itemClass":"elite","requiredStrength":125,"requiredDexterity":65,"requiredLevel":61,"hitDamage":"2-3"},{"image":"http://www.d2mantix.com/diablo2img/scepter.JPG","name":"El Redentor","originalName":"The Redeemer","codeName":"theredeemer","tcNumber":63,"attributes":["Daño 1 mano: (143-164) a (185-332) (varia) Rango (2)","Durabilidad: 50","Velocidad: [0]","+250-300% Daño Mejorado (varia)","Daño +60-120 (varia)","+50% Daño a los Muertos Vivientes","+200-250% Daño a Demonios (varia)","+2 a los Niveles de Habilidad del Paladín","-33% Defensa del Objetivo","+3 al Radio de Luz","Requisitos -60%"],"itemType":"scepter","itemClass":"elite"},{"image":"http://www.d2mantix.com/diablo2img/warscepter.JPG","name":"Guardian de Hierro de Astreon","originalName":"Astreon's Iron Ward","codeName":"astreonironward","tcNumber":87,"attributes":["Daño 1 mano: (169-188) a (234-256) (varia) Rango (3)","Durabilidad: 70","Velocidad: [-10]","+240-290% DaÃ±o Mejorado (varia)","DaÃ±o +40-85 (varia)","+50% DaÃ±o a los Muertos Vivientes","AÃ±ade 80-240 de DaÃ±o Magico","33% Posibilidad de Golpe Triturador","Ralentiza el Objetivo un 25%","DaÃ±o Reducido en 4-7 (varia)","+10% Velocidad de Ataque Aumentada","150-200% de Bonificacion en el Ataque (varia)"],"itemType":"scepter","itemClass":"elite","requiredStrength":97,"requiredDexterity":70,"requiredLevel":66,"hitDamage":"2-4"}]

module.exports = { NORMAL_UNIQUE_SCEPTERS, EXCEPTIONAL_UNIQUE_SCEPTERS, ELITE_UNIQUE_SCEPTERS }
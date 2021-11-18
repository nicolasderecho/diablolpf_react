const NORMAL_UNIQUE_CROSSBOWS = [{"image":"http://www.d2mantix.com/diablo2img/leadcrow.JPG","name":"Cuervo de Plomo","originalName":"Leadcrow","codeName":"leadcrow","tcNumber":6,"attributes":["Daño 2 manos: 10 a 15 Rango (0)","Velocidad: [-10]","+70% DaÃ±o Mejorado","+40 a Puntuacion de Ataque","25% Azote Mortal","+10 de Destreza","+10 de Vida","Resistencia al Veneno +30%"],"itemType":"crossbow","itemClass":"normal","requiredStrength":21,"requiredDexterity":27,"requiredLevel":9},{"image":"http://www.d2mantix.com/diablo2img/ichorsting.JPG","name":"Aguijon de Ichor","originalName":"Ichorstring","codeName":"ichorstring","tcNumber":15,"attributes":["Daño 2 manos: 13 a 24 Rango (0)","Velocidad: [0]","+50% Daño Mejorado","+30 de Daño de Veneno Durante 3 Segundos","20% Velocidad de Ataque Aumentada","+50 a Puntuación de Ataque","+20 de Destreza","Ataque Perforador (50)"],"itemType":"crossbow","itemClass":"normal","requiredStrength":40,"requiredDexterity":33,"requiredLevel":18},{"image":"http://www.d2mantix.com/diablo2img/hellcast.JPG","name":"Rastro Infernal","originalName":"Hellcast","codeName":"hellcast","tcNumber":24,"attributes":["Daño 2 manos: (23-25) a (44-46) (varia) Rango (0)","Velocidad: [10]","20% Velocidad de Ataque Aumentada","Dispara Saetas Explosivas [Nivel 5]","+70-80% Daño Mejorado (varia)","+70 a Puntuación de Ataque","Añade 15-35 de Daño de Fuego","15% a la Resistencia Máxima al Fuego","Resistencia al Fuego +15%"],"itemType":"crossbow","itemClass":"normal","requiredStrength":60,"requiredDexterity":40,"requiredLevel":27},{"image":"http://www.d2mantix.com/diablo2img/doomspittle.JPG","name":"Horda de la Perdicion","originalName":"Doomslinger","codeName":"doomslinger","tcNumber":33,"attributes":["Daño 2 manos: (9-12) a (19.24) (varia) Rango (0)","Velocidad: [-40]","+60-100% Daño Mejorado (varia)","+30% Velocidad de Ataque Aumentada","+15 de Vida","Ataque Perforador (35)","+1 a los Niveles de Habilidad de la Amazona"],"itemType":"crossbow","itemClass":"normal","requiredStrength":40,"requiredDexterity":50,"requiredLevel":28}]

const EXCEPTIONAL_UNIQUE_CROSSBOWS = [{"image":"http://www.d2mantix.com/diablo2img/langerbriser.JPG","name":"Langer Briser","originalName":"Langer Briser","codeName":"langerbriser","tcNumber":36,"attributes":["Daño 2 manos: (37-42) a (82-111) (varia) Rango (0)","Velocidad: [-10]","+170-200% DaÃ±o Mejorado (varia)","+10-30 al DaÃ±o Maximo (varia)","AÃ±ade 1-212 de DaÃ±o de Relampago","33% Posibilidad de Heridas Abiertas","+30 de Vida","El Objetivo Retrocede","30-60% Mas Posibilidades de Conseguir un Objeto Magico (varia)"],"itemType":"crossbow","itemClass":"exceptional","requiredStrength":52,"requiredDexterity":61,"requiredLevel":32},{"image":"http://www.d2mantix.com/diablo2img/pusspitter.JPG","name":"Maldad de Pus","originalName":"Pus Spitter","codeName":"pusspitter","tcNumber":42,"attributes":["Daño 2 manos: (50-64) a (105-134) (varia) Rango (0)","Velocidad: [0]","9% de Posibilidad de Lanzar el Nivel 6 de Veneno Nova al recibir un Azote","4% de Posibilidad de Lanzar el Nivel 1 de Reducción de Resistencia al Azotar","+2 a los Niveles de Habilidad del Nigromante","10% Velocidad de Ataque Aumentada","+150-220% Daño Mejorado (varia)","+5-495 a Puntuación de Ataque Muerto Viviente (+5 Por Nivel)","+150 Daño de Veneno Durante 8 Segundos","Requisitos -60%"],"itemType":"crossbow","itemClass":"exceptional","requiredStrength":32,"requiredDexterity":28,"requiredLevel":36},{"image":"http://www.d2mantix.com/diablo2img/hellcast.JPG","name":"Buriza-Do Kyanon","originalName":"Buriza-Do Kyanon","codeName":"buriza-dokyanon","tcNumber":48,"attributes":["Daño 2 manos: (82-99) a (139-412) (varia) Rango (0)","Velocidad: [10]","+150-200% DaÃ±o Mejorado (varia)","+2-247 al DaÃ±o Maximo (+2.5 Por Nivel)","AÃ±ade 32-196 de DaÃ±o de Frio, Duracion 8 Seg. en Normal","Ataque Perforador (100)","80% Velocidad de Ataque Aumentada","Congela al Objetivo +3","+75-150 Defensa (varia)","+35 de Destreza"],"itemType":"crossbow","itemClass":"exceptional","requiredStrength":110,"requiredDexterity":80,"requiredLevel":41},{"image":"http://www.d2mantix.com/diablo2img/demonmachine.JPG","name":"Maquina Demoniaca","originalName":"Demon Machine","codeName":"demonmachine","tcNumber":54,"attributes":["Daño 2 manos: 31-137 Rango (0)","Velocidad: [-60]","Dispara Saetas Explosivas [Nivel 6]","Ataque Perforador (66)","+123% Daño Mejorado","+66 al Daño Máximo","+632 de Puntuación de Ataque","+321 Defensa","+36 de maná"],"itemType":"crossbow","itemClass":"exceptional","requiredStrength":80,"requiredDexterity":95,"requiredLevel":49}]

const ELITE_UNIQUE_CROSSBOWS = [{"image":"http://www.d2mantix.com/diablo2img/hellrack.JPG","name":"Potro Infernal","originalName":"Hellrack","codeName":"hellrack","tcNumber":75,"attributes":["Daño 2 manos: (89-105) a (254-300) (varia) Rango (0)","Velocidad: [10]","+180-230% Daño Mejorado (varia)","100-150% de Bonificación en el Ataque (varia)","Añade 63-324 Daño de Fuego","Añade 63-324 Daño de Relámpago","Añade 63-324 Daño de Frio","+20% Velocidad de Ataque Aumentada","Nivel 18 Flecha Inmoladora (150 Cargas)","Engarces (2)"],"itemType":"crossbow","itemClass":"elite","requiredStrength":163,"requiredDexterity":77,"requiredLevel":76},{"image":"http://www.d2mantix.com/diablo2img/gutsiphon.JPG","name":"Sifon de Tripas","originalName":"Gut Siphon","codeName":"gutsiphon","tcNumber":84,"attributes":["Daño 2 manos: (67-83) a (104-128) (varia) Rango (0)","Velocidad: [-60]","+160-220% DaÃ±o Mejorado (varia)","Ataque Perforador [33]","12-18% Vida Robada Por Impacto (varia)","33% Posibilidad de Heridas Abiertas","Ralentiza el Objetivo un 25%"],"itemType":"crossbow","itemClass":"elite","requiredStrength":141,"requiredDexterity":98,"requiredLevel":71}]

module.exports = { NORMAL_UNIQUE_CROSSBOWS, EXCEPTIONAL_UNIQUE_CROSSBOWS, ELITE_UNIQUE_CROSSBOWS }
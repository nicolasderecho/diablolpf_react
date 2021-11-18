const NORMAL_UNIQUE_RODS = [{"image":"http://www.d2mantix.com/diablo2img/irostorch.JPG","name":"Antorcha de Iro","originalName":"Torch of Iro","codeName":"torchofiro","tcNumber":3,"attributes":["Daño 1 mano: 2 a 4 Rango (1)","Durabilidad: 15","Velocidad: [0]","+1 a las Habilidades del Nigromante","Añade 5-9 de Daño de Fuergo","6% Vida Robado Por Impacto","+10 de Energia","Regenera maná 5%","+3 al Radio de Luz","+50% Daño a los Muertos Vivientes"],"itemType":"rod","itemClass":"normal","requiredLevel":5},{"image":"http://www.d2mantix.com/diablo2img/maelstromwrath.JPG","name":"Torbellino de Ira","originalName":"Maelstrom","codeName":"maelstrom","tcNumber":12,"attributes":["Daño 1 mano: 2 a 8 Rango (1)","Durabilidad: 15","Velocidad: [10]","30% Velocidad de Lanzamiento Mayor","Añade 1-9 de Daño de Relámpago","+13 de maná","Resistencia a los Rayos +40%","+50% Daño a los Muertos Vivientes"],"itemType":"rod","itemClass":"normal","requiredLevel":14},{"image":"http://www.d2mantix.com/diablo2img/gravenspine.JPG","name":"Espina de la Tumba","originalName":"Gravenspine","codeName":"gravenspine","tcNumber":18,"attributes":["Daño 1 mano: 3 a 7 Rango (1)","Durabilidad: 15","Velocidad: [-20]","+2 a los Niveles de Habilidad del Nigromante","Añade 4-8 de Daño de Frio, Duración 3 Seg. en Normal","5% maná Robado Por Impacto","+10 de Fuerza","+10 de Destreza","+25-50 maná (varia)","+50% Daño a los Muertos Vivientes"],"itemType":"rod","itemClass":"normal","requiredLevel":20},{"image":"http://www.d2mantix.com/diablo2img/grimwand.JPG","name":"Lamento de Ume","originalName":"Ume","codeName":"ume","tcNumber":27,"attributes":["Daño 1 mano: 5 a 11 Rango (1)","Durabilidad: 15","Velocidad: [0]","+50% DaÃ±o a los Muertos Vivientes","20% Velocidad de Lanzamiento Mayor","+40 mana","El Impacto Hace que el Monstruo Huya 50%","+2 a los Niveles de Habilidad del Nigromante"],"itemType":"rod","itemClass":"normal","requiredLevel":28}]

const EXCEPTIONAL_UNIQUE_RODS = [{"image":"http://www.d2mantix.com/diablo2img/wand.JPG","name":"Rama de Suicidio","originalName":"Suicide Branch","codeName":"suicidebranch","tcNumber":33,"attributes":["Daño 1 mano: 8 a 18 Rango (1)","Durabilidad: 15","Velocidad: [0]","+50% Daño a los Muertos Vivientes","50% Velocidad de Lanzamiento Mayor","Aumenta el maná Máximo 10%","Todas las Resistencias +10","+40 de Vida","El Atacante Recibe el Daño de 25","+1 a Todos los Niveles de Habilidad"],"itemType":"rod","itemClass":"exceptional","requiredStrength":25,"requiredLevel":33},{"image":"http://www.d2mantix.com/diablo2img/maelstromwrath.JPG","name":"Fragmento de Mojon","originalName":"Carin Shard","codeName":"carinshard","tcNumber":39,"attributes":["Daño 1 mano: 8 a 24 Rango (1)","Durabilidad: 15","Velocidad: [10]","+50% Daño a los Muertos Vivientes","10% Velocidad de Lanzamiento Mayor","30% Recuperación de Impacto Mas Rápida","Repostar Vida +5","+1-123 de maná Muerto Viviente (+1.25 Por Nivel)","+1-123 de Vida Muerto Viviente (+1.25 Por Nivel)","+1 a los Niveles de Habilidad del Nigromante"],"itemType":"rod","itemClass":"exceptional","requiredStrength":25,"requiredLevel":35},{"image":"http://www.d2mantix.com/diablo2img/gravenspine.JPG","name":"Brazo del Rey Leoric","originalName":"Arm Of King Leoric","codeName":"armofkingleoric","tcNumber":45,"attributes":["Daño 1 mano: 10 a 22 Rango (1)","Durabilidad: 15","Velocidad: [-20]","10% de Posibilidades de Lanzar el Nivel 2 Prisión Ósea al Recibir un Azote","5% de Posibilidades de Lanzar el Nivel 10 Espíritu de Hueso al Recibir un Azote","10% Velocidad de Lanzamiento Mayor","+1-123 de maná Muerto Viviente (+1.25 Por Nivel)","+50% Daño a los Muertos Vivientes"],"itemType":"rod","itemClass":"exceptional","requiredStrength":25,"requiredLevel":36},{"image":"http://www.d2mantix.com/diablo2img/blackhandkey.JPG","name":"Llave de la Mano Negra","originalName":"Blackhand Key","codeName":"blackhandkey","tcNumber":51,"attributes":["Daño 1 mano: 13 a 29 Rango (1)","Durabilidad: 15","Velocidad: [0]","Nivel 13 Pabellon Lugubre (30 cargas)","+2 a los Niveles de Habilidades del Nigromante","30% Velocidad de Lanzamiento Mayor","+50 de Vida","Resistencia al Fuego +37%","20% el DaÃ±o Infligido Repercute en el mana","-2 al Radio de Luz","+50% DaÃ±o a los Muertos Vivientes"],"itemType":"rod","itemClass":"exceptional","requiredStrength":25,"requiredLevel":41}]

const ELITE_UNIQUE_RODS = [{"image":"http://www.d2mantix.com/diablo2img/gravenspine.JPG","name":"Sombrientas","originalName":"Boneshade","codeName":"boneshade","tcNumber":75,"attributes":["Daño 1 mano: 10 a 31 Rango (1)","Durabilidad: 17","Velocidad: [-20]","+50% Daño a los Muertos Vivientes","+2 a los Niveles de Habilidad del Nigromante","+25% Velocidad de Lanzamiento Mayor"],"itemType":"rod","itemClass":"elite","requiredStrength":25,"requiredLevel":79},{"image":"http://www.d2mantix.com/diablo2img/deathsweb.JPG","name":"Red Mortal","originalName":"Death's Web","codeName":"death'sweb","tcNumber":87,"attributes":["Daño 1 mano: 22 a 28 Rango (1)","Durabilidad: 18","Velocidad: [0]","+50% Daño a los Muertos Vivientes","-40-50% para Resistencia al Veneno Enemigo (varia)","+7-12 al maná Tras Cada Muerte (varia)","+7-12 Vida Después de cada Muerte (varia)","+2 a Todas las Habilidades"],"itemType":"rod","itemClass":"elite","requiredStrength":25,"requiredLevel":66}]

module.exports = { NORMAL_UNIQUE_RODS, EXCEPTIONAL_UNIQUE_RODS, ELITE_UNIQUE_RODS }
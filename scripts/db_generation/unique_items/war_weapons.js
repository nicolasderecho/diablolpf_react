const NORMAL_UNIQUE_WAR_WEAPONS = [{"image":"http://www.d2mantix.com/diablo2img/bardiche.JPG","name":"Talla del Roble Sombrio","originalName":"Dimoak's Hew","codeName":"dimoak'shew","tcNumber":6,"attributes":["Daño 2 manos: 4 a 56 Rango (3)","Durabilidad: 50","Velocidad: [10]","+100% Daño Mejorado","20% Velocidad de Ataque Aumentada","+15 de Destreza","-8 Defensa"],"itemType":"war-weapon","itemClass":"normal","requiredStrength":40,"requiredLevel":8},{"image":"http://www.d2mantix.com/diablo2img/steelgoad.JPG","name":"Aguijon de Acero","originalName":"Steelgoad","codeName":"steelgoad","tcNumber":12,"attributes":["Daño 2 manos: (11-12) a (35-39) (varia) Rango (3)","Durabilidad: 50","Velocidad: [0]","+60-80% DaÃ±o Mejorado (varia)","+30 a Puntuacion de Ataque","30% Azote Mortal","El Impacto Hace que el Monstruo Huya 75%","Todas las Resistencias +5"],"itemType":"war-weapon","itemClass":"normal","requiredStrength":50,"requiredLevel":14},{"image":"http://www.d2mantix.com/diablo2img/soulharvest.JPG","name":"Cosechadora de Almas","originalName":"Soul Harvest","codeName":"soulharvest","tcNumber":15,"attributes":["Daño 2 manos: (13-17) a (32-39) (varia) Rango (2)","Durabilidad: 65","Velocidad: [-10]","+50-90% DaÃ±o Mejorado (varia)","30% Posibilidad de Heridas Abiertas","+45 a Puntuacion de Ataque","10% mana Robado Por Impacto","Todas las Resistencias +20","+5 de Energia"],"itemType":"war-weapon","itemClass":"normal","requiredStrength":41,"requiredDexterity":41,"requiredLevel":19},{"image":"http://www.d2mantix.com/diablo2img/poleaxe.JPG","name":"Rama de la Batalla","originalName":"The Battlebranch","codeName":"thebattlebranch","tcNumber":21,"attributes":["Daño 2 manos: (28-32) a (60-68) (varia) Rango (4)","Durabilidad: 65","Velocidad: [10]","+50-70% Daño Mejorado (varia)","30% Velocidad de Ataque Aumentada","+50-100 a Puntuación de Ataque (varia)","7% Vida Robada Por Impacto","+10 de Destreza"],"itemType":"war-weapon","itemClass":"normal","requiredStrength":62,"requiredLevel":25},{"image":"http://www.d2mantix.com/diablo2img/halberd.JPG","name":"El PeldaÃ±o de la Congoja","originalName":"Woestave","codeName":"woestave","tcNumber":30,"attributes":["Daño 2 manos: (15-18) a (55-64) (varia) Rango (5)","Durabilidad: 55","Velocidad: [0]","+20-40% DaÃ±o Mejorado (varia)","50% Posibilidad de Heridas Abiertas","Evita la Curacion del Monstruo","El Impacto Ciega al Objetivo +3","Congela al Objetivo","Ralentiza el Objetivo un 50%","-50 a la Defensa del Monstruo por Golpe","-3 al Radio de Luz"],"itemType":"war-weapon","itemClass":"normal","requiredStrength":75,"requiredDexterity":47,"requiredLevel":28},{"image":"http://www.d2mantix.com/diablo2img/warscythe.JPG","name":"El Segador Implacable","originalName":"The Grim Reaper","codeName":"thegrimreaper","tcNumber":36,"attributes":["Daño 2 manos: 34 a 44 Rango (5)","Durabilidad: 55","Velocidad: [-10]","+20% DaÃ±o Mejorado","+15 al DaÃ±o Minimo","5% mana Robado por Impacto","100% Azote Mortal","Evita la Curacion del Monstruo"],"itemType":"war-weapon","itemClass":"normal","requiredStrength":80,"requiredDexterity":80,"requiredLevel":29}]

const EXCEPTIONAL_UNIQUE_WAR_WEAPONS = [{"image":"http://www.d2mantix.com/diablo2img/meatscraper.JPG","name":"La Espatula de Carne","originalName":"The Meat Scraper","codeName":"themeatscraper","tcNumber":33,"attributes":["Daño 2 manos: (17-21) a (147-177) (varia) Rango (3)","Durabilidad: 50","Velocidad: [10]","+150-200% DaÃ±o Mejorado (varia)","50% Posibilidad de Heridas Abiertas","30% Velocidad de Ataque Aumentada","10% Vida Robada Por Impacto","25% Mas Posibilidades de Conseguir un Objeto Magico"],"itemType":"war-weapon","itemClass":"exceptional","requiredStrength":80,"requiredLevel":41},{"image":"http://www.d2mantix.com/diablo2img/voulge.JPG","name":"Espada de Filo Negro","originalName":"Blackleach Blade","codeName":"blackleachblade","tcNumber":39,"attributes":["Daño 2 manos: (30-36) a (109-253) (varia) Rango (3)","Durabilidad: 50","Velocidad: [0]","5% Posibilidad de Lanzar el Nivel 5 Debilitante al Azotar","+100-140% Daño Mejorado (varia)","+1-123 Daño Máximo Muerto Viviente (+1.25 Por Nivel)","8% Vida Robada Por Impacto","-2 al Radio de Luz","Requisitos -25%"],"itemType":"war-weapon","itemClass":"exceptional","requiredStrength":72,"requiredLevel":42},{"image":"http://www.d2mantix.com/diablo2img/athenaswrath.JPG","name":"Ira de Atenea","originalName":"Athena's Wrath","codeName":"athena'swrath","tcNumber":42,"attributes":["Daño 2 manos: (47-53) a (126-227) (varia) Rango (2)","Durabilidad: 65","Velocidad: [-10]","+1-3 para Habilidades Druidas (varia)","30% Velocidad de Ataque Aumentada","+150-180% Daño Mejorado (varia)","+1-99 al Daño Máximo Muerto Viviente (+1 Por Nivel)","+15 de Destreza","+1-99 de Vida Muerto Viviente (+1 Por Nivel)"],"itemType":"war-weapon","itemClass":"exceptional","requiredStrength":82,"requiredDexterity":82,"requiredLevel":42},{"image":"http://www.d2mantix.com/diablo2img/poleaxe.JPG","name":"Pierre Tombale Couant","originalName":"Pierre Tombale Couant","codeName":"pierretombalecouant","tcNumber":45,"attributes":["Daño 2 manos: (103-124) a (217-263) (varia) Rango (4)","Durabilidad: 65","Velocidad: [10]","+160-220% DaÃ±o Mejorado (varia)","AÃ±ade 12-20 de DaÃ±o","55% Azote Mortal","+100-200 a Puntuacion de Ataque (varia)","30% Recuperacion de Impacto Mas Rapida","6% mana Robado Por Impacto","+3 a los Niveles de Habilidad del Barbaro"],"itemType":"war-weapon","itemClass":"exceptional","requiredStrength":113,"requiredDexterity":67,"requiredLevel":43},{"image":"http://www.d2mantix.com/diablo2img/halberd.JPG","name":"Husoldal Evo","originalName":"Husoldal Evo","codeName":"husoldalevo","tcNumber":51,"attributes":["Daño 2 manos: (56-62) a (255-290) (varia) Rango (5)","Durabilidad: 55","Velocidad: [0]","+160-200% Daño Mejorado (varia)","Añade 20-32 de Daño","20% Velocidad de Ataque Aumentado","+200-250 a Puntacion de Ataque (varia)","Evita la Curación del Monstruo","Repostar Vida +20"],"itemType":"war-weapon","itemClass":"exceptional","requiredStrength":133,"requiredDexterity":91,"requiredLevel":44},{"image":"http://www.d2mantix.com/diablo2img/warscythe.JPG","name":"Muerto Ardiente Lugubre","originalName":"Grim's Burning Dead","codeName":"grim'sburningdead","tcNumber":57,"attributes":["Daño 2 manos: (74-86) a (170-198) (varia) Rango (5)","Durabilidad: 55","Velocidad: [-10]","Requisitos -50%","+140-180% Daño Mejorado (varia)","+20% Defensa Perfeccionada","Añade 131-232 de Daño de Fuego","-50% Defensa del Objetivo","+200-250 a Puntuación de Ataque (varia)","Resistencia al Fuego +45%","El Atacante Recibe el Daño de 8","+3 a los Niveles de Habilidad del Nigromante"],"itemType":"war-weapon","itemClass":"exceptional","requiredStrength":70,"requiredDexterity":70,"requiredLevel":45}]

const ELITE_UNIQUE_WAR_WEAPONS = [{"image":"http://www.d2mantix.com/diablo2img/bonehew.JPG","name":"Corte del Hueso","originalName":"Bonehew","codeName":"bonehew","tcNumber":60,"attributes":["Daño 2 manos: (107-121) a (540-613) (varia) Rango (3)","Durabilidad: 50","Velocidad: [10]","+270-320% Daño Mejorado (varia)","Nivel 14 Explosión Venenosa (30 Cargas)","Evita la Curación del Monstruo","30% Velocidad de Ataque Aumentada","50% de Posibilidad de Lanzar el Nivel 16 Lanza Ósea al Azotar","Engarces (2)"],"itemType":"war-weapon","itemClass":"elite","requiredStrength":195,"requiredDexterity":75,"requiredLevel":64},{"image":"http://www.d2mantix.com/diablo2img/scythe.JPG","name":"El Peaje de la Parca","originalName":"The Reaper's Toll","codeName":"thereapertoll","tcNumber":72,"attributes":["Daño 2 manos: (34-40) a (411-482) (varia) Rango (2)","Durabilidad: 65","Velocidad: [-10]","+190-240% DaÃ±o Mejorado (varia)","Ignorar Defensa del Objeto","AÃ±ade 4-44 DaÃ±o de Frio, Duracion 5 Seg. en Normal","11-15% Vida Robada Por Impacto (varia)","33% Azote Mortal","33% de Posibilidad de Lanzar el Nivel 1 Decrepitacion al Azotar","Requisitos -25%"],"itemType":"war-weapon","itemClass":"elite","requiredStrength":114,"requiredDexterity":89,"requiredLevel":75},{"image":"http://www.d2mantix.com/diablo2img/poleaxe.JPG","name":"Destripador de Tumbas","originalName":"Tomb Reaver","codeName":"tombreaver","tcNumber":81,"attributes":["Daño 2 manos: (99-125) a (453-573) (varia) Rango (4)","Durabilidad: 65","Velocidad: [10]","+200-280% DaÃ±o Mejorado (varia)","+150-230% DaÃ±o a los Muertos Vivientes (varia)","+60% Velocidad de Ataque Aumentada","+250-350% a Puntuacion de Ataque Contra Muertos Vivientes (varia)","Todas las Resistencias +30-50 (varia)","10% Reanimarse como: Retornado (mas informacion)","+10-14 Vida Despues de Cada Muerte (varia)","+50-80% Mas Posibilidades de Conseguir un Objeto Magico (varia)","+4 al Radio de Luz","Engarces (1-3) (varia)"],"itemType":"war-weapon","itemClass":"elite","requiredStrength":165,"requiredDexterity":103,"requiredLevel":84},{"image":"http://www.d2mantix.com/diablo2img/warscythe.JPG","name":"Aguja de Tormentas","originalName":"Stormspire","codeName":"stormspire","tcNumber":87,"attributes":["Daño 2 manos: (102-143) a (287-402) (varia) Rango (5)","Velocidad: [-10]","150-250% Daño Mejorado (varia)","Añade 1-237 Daño de Relámpago","2% de Posibilidad de Lanzar el Nivel 20 Saeta Cargada al Recibir un Azote","5% de Posibilidad de Lanzar el Nivel 5 Cadena de relámpagos al Recibir un Azote","30% Velocidad de Ataque Aumentada","Resistencia al Relámpago +50%","+10 de Fuerza","El Atacante recibe el Daño de Relámpago de 27","Indestructible"],"itemType":"war-weapon","itemClass":"elite","requiredStrength":188,"requiredDexterity":140,"requiredLevel":70}]

module.exports = { NORMAL_UNIQUE_WAR_WEAPONS, EXCEPTIONAL_UNIQUE_WAR_WEAPONS, ELITE_UNIQUE_WAR_WEAPONS }
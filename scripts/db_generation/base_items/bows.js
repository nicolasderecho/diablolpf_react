const NORMAL_BOWS = [{"image":"http://www.d2mantix.com/diablo2img/shortbow.JPG","name":"Arco Corto","originalName":"Short Bow","codeName":"shortbow","tcNumber":3,"attributes":["Daño 2 manos: 1 a 4 (2.5 Media) Rango (1)","Velocidad: [5]"],"itemType":"bow","itemClass":"normal","requiredDexterity":15,"sockets":3},{"image":"http://www.d2mantix.com/diablo2img/longbow.JPG","name":"Arco Largo","originalName":"Long Bow","codeName":"longbow","tcNumber":9,"attributes":["Daño 2 manos: 3 a 10 (6.5 Media) Rango (1)","Velocidad: [0]"],"itemType":"bow","itemClass":"normal","requiredStrength":22,"requiredDexterity":19,"sockets":5},{"image":"http://www.d2mantix.com/diablo2img/compositebow.JPG","name":"Arco Compuesto","originalName":"Composite Bow","codeName":"compositebow","tcNumber":12,"attributes":["Daño 2 manos: 4 a 8 (6 Media) Rango (1)","Velocidad: [-10]"],"itemType":"bow","itemClass":"normal","requiredStrength":25,"requiredDexterity":35,"sockets":4},{"image":"http://www.d2mantix.com/diablo2img/huntersbow.JPG","name":"Arco de Cazador","originalName":"Hunter's Bow","codeName":"hunter'sbow","tcNumber":6,"attributes":["Daño 2 manos: 2 a 6 (4 Media) Rango (1)","Velocidad: [-10]"],"itemType":"bow","itemClass":"normal","requiredDexterity":28,"sockets":4},{"image":"http://www.d2mantix.com/diablo2img/shortbattlebow.JPG","name":"Arco Corto de Batalla","originalName":"Short Battle Bow","codeName":"shortbattlebow","tcNumber":18,"attributes":["Daño 2 manos: 5 a 11 (8 Media) Rango (1)","Velocidad: [0]"],"itemType":"bow","itemClass":"normal","requiredStrength":30,"requiredDexterity":40,"sockets":5},{"image":"http://www.d2mantix.com/diablo2img/longbattlebow.JPG","name":"Arco Largo de Batalla","originalName":"Long Battle Bow","codeName":"longbattlebow","tcNumber":24,"attributes":["Daño 2 manos: 3 a 18 (10.5 Media) Rango (1)","Velocidad: [10]"],"itemType":"bow","itemClass":"normal","requiredStrength":40,"requiredDexterity":50,"sockets":6},{"image":"http://www.d2mantix.com/diablo2img/shortwarbow.JPG","name":"Arco Corto de Guerra","originalName":"Short War Bow","codeName":"shortwarbow","tcNumber":27,"attributes":["Daño 2 manos: 6 a 14 (10 Media) Rango (1)","Velocidad: [0]"],"itemType":"bow","itemClass":"normal","requiredStrength":35,"requiredDexterity":55,"sockets":5},{"image":"http://www.d2mantix.com/diablo2img/longwarbow.JPG","name":"Arco Largo de Guerra","originalName":"Long War Bow","codeName":"longwarbow","tcNumber":33,"attributes":["Daño 2 manos: 3 a 23 (13 Media) Rango (1)","Velocidad: [10]"],"itemType":"bow","itemClass":"normal","requiredStrength":50,"requiredDexterity":65,"sockets":6}]

const EXCEPTIONAL_BOWS = [{"image":"http://www.d2mantix.com/diablo2img/shortbow.JPG","name":"Arco Afilado","originalName":"Edge Bow","codeName":"edgebow","tcNumber":30,"attributes":["Daño 2 manos: 6 a 19 (12.5 Media) Rango (1)","Velocidad: [5]"],"itemType":"bow","itemClass":"exceptional","requiredStrength":25,"requiredDexterity":43,"requiredLevel":18,"sockets":3},{"image":"http://www.d2mantix.com/diablo2img/huntersbow.JPG","name":"Arco de Cuchilla","originalName":"Razor Bow","codeName":"razorbow","tcNumber":33,"attributes":["Daño 2 manos: 8 a 22 (15 Media) Rango (1)","Velocidad: [-10]"],"itemType":"bow","itemClass":"exceptional","requiredDexterity":62,"requiredLevel":21,"sockets":4},{"image":"http://www.d2mantix.com/diablo2img/longbow.JPG","name":"Arco de Madera de Cedro","originalName":"Cedar Bow","codeName":"cedarbow","tcNumber":36,"attributes":["Daño 2 manos: 10 a 29 (19.5 Media) Rango (1)","Velocidad: [0]"],"itemType":"bow","itemClass":"exceptional","requiredStrength":53,"requiredDexterity":49,"requiredLevel":23,"sockets":5},{"image":"http://www.d2mantix.com/diablo2img/compositebow.JPG","name":"Arco Doble","originalName":"Double Bow","codeName":"doublebow","tcNumber":39,"attributes":["Daño 2 manos: 11 a 26 (18.5 Media) Rango (1)","Velocidad: [-10]"],"itemType":"bow","itemClass":"exceptional","requiredStrength":58,"requiredDexterity":73,"requiredLevel":25,"sockets":4},{"image":"http://www.d2mantix.com/diablo2img/shortbattlebow.JPG","name":"Arco Corto de Asedio","originalName":"Short Siege Bow","codeName":"shortsiegebow","tcNumber":45,"attributes":["Daño 2 manos: 13 a 30 (21.5 Media) Rango (1)","Velocidad: [0]"],"itemType":"bow","itemClass":"exceptional","requiredStrength":65,"requiredDexterity":80,"requiredLevel":25,"sockets":5},{"image":"http://www.d2mantix.com/diablo2img/longbattlebow.JPG","name":"Arco Largo de Asedio","originalName":"Large Siege Bow","codeName":"largesiegebow","tcNumber":48,"attributes":["Daño 2 manos: 10 a 42 (26 Media) Rango (1)","Velocidad: [10]"],"itemType":"bow","itemClass":"exceptional","requiredStrength":80,"requiredDexterity":95,"requiredLevel":25,"sockets":6},{"image":"http://www.d2mantix.com/diablo2img/shortwarbow.JPG","name":"Arco Runico","originalName":"Rune Bow","codeName":"runebow","tcNumber":51,"attributes":["Daño 2 manos: 14 a 35 (24.5 Media) Rango (1)","Velocidad: [0]"],"itemType":"bow","itemClass":"exceptional","requiredStrength":73,"requiredDexterity":103,"requiredLevel":25,"sockets":5},{"image":"http://www.d2mantix.com/diablo2img/longwarbow.JPG","name":"Arco Gotico","originalName":"Gothic Bow","codeName":"gothicbow","tcNumber":54,"attributes":["Daño 2 manos: 10 a 50 (30 Media) Rango (1)","Velocidad: [10]"],"itemType":"bow","itemClass":"exceptional","requiredStrength":95,"requiredDexterity":118,"requiredLevel":25,"sockets":6}]

const ELITE_BOWS = [{"image":"http://www.d2mantix.com/diablo2img/shortbow.JPG","name":"El Arco Aracnico","originalName":"Spider Bow","codeName":"spiderbow","tcNumber":57,"attributes":["Daño 2 manos: 23 a 50 (36.5 Media) Rango (1)","Velocidad: [5]"],"itemType":"bow","itemClass":"elite","requiredStrength":64,"requiredDexterity":143,"requiredLevel":41,"sockets":3},{"image":"http://www.d2mantix.com/diablo2img/huntersbow.JPG","name":"El Arco Afilado","originalName":"Blade Bow","codeName":"bladebow","tcNumber":60,"attributes":["Daño 2 manos: 21 a 41 (31 Media) Rango (1)","Velocidad: [-10]"],"itemType":"bow","itemClass":"elite","requiredStrength":76,"requiredDexterity":119,"requiredLevel":45,"sockets":4},{"image":"http://www.d2mantix.com/diablo2img/longbow.JPG","name":"El Arco Siniestro","originalName":"Shadow Bow","codeName":"shadowbow","tcNumber":63,"attributes":["Daño 2 manos: 15 a 59 (37 Media) Rango (1)","Velocidad: [0]"],"itemType":"bow","itemClass":"elite","requiredStrength":52,"requiredDexterity":108,"requiredLevel":47,"sockets":5},{"image":"http://www.d2mantix.com/diablo2img/compositebow.JPG","name":"El Gran Arco","originalName":"Great Bow","codeName":"greatbow","tcNumber":66,"attributes":["Daño 2 manos: 12 a 52 (32 Media) Rango (1)","Velocidad: [-10]"],"itemType":"bow","itemClass":"elite","requiredStrength":121,"requiredDexterity":107,"requiredLevel":51,"sockets":4},{"image":"http://www.d2mantix.com/diablo2img/shortbattlebow.JPG","name":"El Arco de Diamante","originalName":"Diamond Bow","codeName":"diamondbow","tcNumber":72,"attributes":["Daño 2 manos: 33 a 40 (36.5 Media) Rango (1)","Velocidad: [0]"],"itemType":"bow","itemClass":"elite","requiredStrength":89,"requiredDexterity":132,"requiredLevel":54,"sockets":5},{"image":"http://www.d2mantix.com/diablo2img/longbattlebow.JPG","name":"El Arco de Cruzada","originalName":"Crusader Bow","codeName":"crusaderbow","tcNumber":78,"attributes":["Daño 2 manos: 15 a 63 (39 Media) Rango (1)","Velocidad: [10]"],"itemType":"bow","itemClass":"elite","requiredStrength":97,"requiredDexterity":121,"requiredLevel":57,"sockets":6},{"image":"http://www.d2mantix.com/diablo2img/shortwarbow.JPG","name":"El Arco de Guardian","originalName":"Ward Bow","codeName":"wardbow","tcNumber":81,"attributes":["Daño 2 manos: 20 a 53 (36.5 Media) Rango (1)","Velocidad: [0]"],"itemType":"bow","itemClass":"elite","requiredStrength":72,"requiredDexterity":146,"requiredLevel":60,"sockets":5},{"image":"http://www.d2mantix.com/diablo2img/longwarbow.JPG","name":"El Arco de Hidra","originalName":"Hydra Bow","codeName":"hydrabow","tcNumber":87,"attributes":["Daño 2 manos: 10 a 68 (39 Media) Rango (1)","Velocidad: [10]"],"itemType":"bow","itemClass":"elite","requiredStrength":134,"requiredDexterity":167,"requiredLevel":63,"sockets":6}]

module.exports = {
    NORMAL_BOWS,
    EXCEPTIONAL_BOWS,
    ELITE_BOWS
}
const NORMAL_AXES = [{"image":"http://www.d2mantix.com/diablo2img/handaxe.JPG","name":"Hacha de Mano","originalName":"Hand Axe","codeName":"handaxe","tcNumber":3,"attributes":["Daño 1 mano: 3 a 6 (4.5 media) Rango (1)","Durabilidad: 28","Velocidad: [0]"],"itemType":"axe","itemClass":"normal","sockets":2},{"image":"http://www.d2mantix.com/diablo2img/axe.JPG","name":"Hacha","originalName":"Axe","codeName":"axe","tcNumber":9,"attributes":["Daño 1 mano: 4 a 11 (7.5 media) Rango (2)","Durabilidad: 24","Velocidad: [10]"],"itemType":"axe","itemClass":"normal","requiredStrength":32,"sockets":4},{"image":"http://www.d2mantix.com/diablo2img/doubleaxe.JPG","name":"Hacha Doble","originalName":"Double Axe","codeName":"doubleaxe","tcNumber":15,"attributes":["Daño 1 mano: 5 a 13 (9 media) Rango (2)","Durabilidad: 24","Velocidad: [10]"],"itemType":"axe","itemClass":"normal","requiredStrength":43,"sockets":5},{"image":"http://www.d2mantix.com/diablo2img/militarypick.JPG","name":"Pico Militar","originalName":"Military Pick","codeName":"militarypick","tcNumber":21,"attributes":["Daño 1 mano: 7 a 11 (9 media) Rango (2)","Durabilidad: 26","Velocidad: [-10]"],"itemType":"axe","itemClass":"normal","requiredStrength":49,"requiredDexterity":33,"sockets":6},{"image":"http://www.d2mantix.com/diablo2img/waraxe.JPG","name":"Hacha de Guerra","originalName":"War Axe","codeName":"waraxe","tcNumber":27,"attributes":["Daño 1 mano: 10 a 18 (14 media) Rango (3)","Durabilidad: 26","Velocidad: [0]"],"itemType":"axe","itemClass":"normal","requiredStrength":67,"sockets":6},{"image":"http://www.d2mantix.com/diablo2img/largeaxe.JPG","name":"Hacha Grande","originalName":"Large Axe","codeName":"largeaxe","tcNumber":6,"attributes":["Daño 2 manos: 6 a 13 (9.5 media) Rango (2)","Durabilidad: 30","Velocidad: [-10]"],"itemType":"axe","itemClass":"normal","requiredStrength":35,"sockets":4},{"image":"http://www.d2mantix.com/diablo2img/broadaxe.JPG","name":"Hacha Ancha","originalName":"Broad Axe","codeName":"broadaxe","tcNumber":12,"attributes":["Daño 2 manos: 10 a 18 (14 media) Rango (2)","Durabilidad: 35","Velocidad: [0]"],"itemType":"axe","itemClass":"normal","requiredStrength":48,"sockets":5},{"image":"http://www.d2mantix.com/diablo2img/battleaxe.JPG","name":"Hacha de Batalla","originalName":"Battle Axe","codeName":"battleaxe","tcNumber":18,"attributes":["Daño 2 manos: 12 a 32 (22 media) Rango (2)","Durabilidad: 40","Velocidad: [10]"],"itemType":"axe","itemClass":"normal","requiredStrength":54,"sockets":5},{"image":"http://www.d2mantix.com/diablo2img/greataxe.JPG","name":"Gran Hacha","originalName":"Great Axe","codeName":"greataxe","tcNumber":24,"attributes":["Daño 2 manos: 9 a 30 (19.5 media) Rango (3)","Durabilidad: 50","Velocidad: [-10]"],"itemType":"axe","itemClass":"normal","requiredStrength":63,"requiredDexterity":39,"sockets":6},{"image":"http://www.d2mantix.com/diablo2img/giantaxe.JPG","name":"Hacha Gigante","originalName":"Giant Axe","codeName":"giantaxe","tcNumber":27,"attributes":["Daño 2 manos: 22 a 45 (33.5 media) Rango (4)","Durabilidad: 50","Velocidad: [10]"],"itemType":"axe","itemClass":"normal","requiredStrength":70,"sockets":6}]

const EXCEPTIONAL_AXES = [{"image":"http://www.d2mantix.com/diablo2img/handaxe.JPG","name":"Hachuela","originalName":"Hatchet","codeName":"hatchet","tcNumber":33,"attributes":["Daño 1 mano: 10 a 21 (15.5 media) Rango (1)","Durabilidad: 28","Velocidad: [0]"],"itemType":"axe","itemClass":"exceptional","requiredStrength":25,"requiredDexterity":25,"requiredLevel":19,"sockets":2},{"image":"http://www.d2mantix.com/diablo2img/axe.JPG","name":"Cuchillo de Carnicero","originalName":"Cleaver","codeName":"cleaver","tcNumber":36,"attributes":["Daño 1 mano: 10 a 33 (21.5 media) Rango (2)","Durabilidad: 24","Velocidad: [10]"],"itemType":"axe","itemClass":"exceptional","requiredStrength":68,"requiredLevel":22,"sockets":4},{"image":"http://www.d2mantix.com/diablo2img/doubleaxe.JPG","name":"Hacha Gemela","originalName":"Twin Axe","codeName":"twinaxe","tcNumber":39,"attributes":["Daño 1 mano: 13 a 38 (25.5 media) Rango (2)","Durabilidad: 24","Velocidad: [10]"],"itemType":"axe","itemClass":"exceptional","requiredStrength":85,"requiredLevel":25,"sockets":5},{"image":"http://www.d2mantix.com/diablo2img/militarypick.JPG","name":"Pico de Cuervo","originalName":"Crowbill","codeName":"crowbill","tcNumber":45,"attributes":["Daño 1 mano: 14 a 34 (24 media) Rango (2)","Durabilidad: 26","Velocidad: [-10]"],"itemType":"axe","itemClass":"exceptional","requiredStrength":94,"requiredDexterity":70,"requiredLevel":25,"sockets":6},{"image":"http://www.d2mantix.com/diablo2img/waraxe.JPG","name":"Naga","originalName":"Naga","codeName":"naga","tcNumber":48,"attributes":["Daño 1 mano: 16 a 45 (30.5 media) Rango (3)","Durabilidad: 26","Velocidad: [0]"],"itemType":"axe","itemClass":"exceptional","requiredStrength":121,"requiredLevel":25,"sockets":6},{"image":"http://www.d2mantix.com/diablo2img/largeaxe.JPG","name":"Hacha Militar","originalName":"Military Axe","codeName":"militaryaxe","tcNumber":36,"attributes":["Daño 2 manos: 14 a 34 (24 media) Rango (2)","Durabilidad: 30","Velocidad: [-10]"],"itemType":"axe","itemClass":"exceptional","requiredStrength":73,"requiredLevel":25,"sockets":4},{"image":"http://www.d2mantix.com/diablo2img/broadaxe.JPG","name":"Hacha Barbada","originalName":"Bearded Axe","codeName":"beardedaxe","tcNumber":39,"attributes":["Daño 2 manos: 21 a 49 (35 media) Rango (2)","Durabilidad: 35","Velocidad: [0]"],"itemType":"axe","itemClass":"exceptional","requiredStrength":92,"requiredLevel":25,"sockets":5},{"image":"http://www.d2mantix.com/diablo2img/battleaxe.JPG","name":"Tabar","originalName":"Tabar","codeName":"tabar","tcNumber":42,"attributes":["Daño 2 manos: 24 a 77 (50.5 media) Rango (2)","Durabilidad: 40","Velocidad: [10]"],"itemType":"axe","itemClass":"exceptional","requiredStrength":101,"requiredLevel":25,"sockets":5},{"image":"http://www.d2mantix.com/diablo2img/greataxe.JPG","name":"Hacha Gotica","originalName":"Gothic Axe","codeName":"gothicaxe","tcNumber":48,"attributes":["Daño 2 manos: 18 a 70 (44 media) Rango (3)","Durabilidad: 50","Velocidad: [-10]"],"itemType":"axe","itemClass":"exceptional","requiredStrength":115,"requiredDexterity":79,"requiredLevel":25,"sockets":6},{"image":"http://www.d2mantix.com/diablo2img/giantaxe.JPG","name":"Hacha Antigua","originalName":"Ancient Axe","codeName":"ancientaxe","tcNumber":51,"attributes":["Daño 2 manos: 43 a 85 (64 media) Rango (4)","Durabilidad: 50","Velocidad: [10]"],"itemType":"axe","itemClass":"exceptional","requiredStrength":125,"requiredLevel":25,"sockets":6}]

const ELITE_AXES = [{"image":"http://www.d2mantix.com/diablo2img/handaxe.JPG","name":"Tomahawk","originalName":"Tomahawk","codeName":"tomahawk","tcNumber":66,"attributes":["Daño 1 mano: 33 a 58 (45.5 media) Rango (1)","Durabilidad: 28","Velocidad: [0]"],"itemType":"axe","itemClass":"elite","requiredStrength":125,"requiredDexterity":67,"requiredLevel":40,"sockets":2},{"image":"http://www.d2mantix.com/diablo2img/axe.JPG","name":"La Media Luna Pequeña","originalName":"Small Crescent","codeName":"smallcrescent","tcNumber":69,"attributes":["Daño 1 mano: 38 a 60 (49 media) Rango (2)","Durabilidad: 24","Velocidad: [10]"],"itemType":"axe","itemClass":"elite","requiredStrength":115,"requiredDexterity":83,"requiredLevel":45,"sockets":4},{"image":"http://www.d2mantix.com/diablo2img/doubleaxe.JPG","name":"El Hacha de Ettin","originalName":"Ettin Axe","codeName":"ettinaxe","tcNumber":72,"attributes":["Daño 1 mano: 33 a 66 (49.5 media) Rango (2)","Durabilidad: 24","Velocidad: [10]"],"itemType":"axe","itemClass":"elite","requiredStrength":145,"requiredDexterity":45,"requiredLevel":52,"sockets":5},{"image":"http://www.d2mantix.com/diablo2img/militarypick.JPG","name":"La Punta de Guerra","originalName":"War Spike","codeName":"warspike","tcNumber":81,"attributes":["Daño 1 mano: 30 a 48 (39 media) Rango (2)","Durabilidad: 26","Velocidad: [-10]"],"itemType":"axe","itemClass":"elite","requiredStrength":133,"requiredDexterity":54,"requiredLevel":59,"sockets":6},{"image":"http://www.d2mantix.com/diablo2img/waraxe.JPG","name":"El Hacha Berserker","originalName":"Berserker Axe","codeName":"berserkeraxe","tcNumber":87,"attributes":["Daño 1 mano: 24 a 71 (47.5 media) Rango (3)","Durabilidad: 26","Velocidad: [0]"],"itemType":"axe","itemClass":"elite","requiredStrength":138,"requiredDexterity":59,"requiredLevel":64,"sockets":6},{"image":"http://www.d2mantix.com/diablo2img/largeaxe.JPG","name":"El Hacha Salvaje","originalName":"Feral Axe","codeName":"feralaxe","tcNumber":63,"attributes":["Daño 2 manos: 25 a 123 (74 media) Rango (3)","Durabilidad: 30","Velocidad: [-15]"],"itemType":"axe","itemClass":"elite","requiredStrength":196,"requiredLevel":42,"sockets":4},{"image":"http://www.d2mantix.com/diablo2img/broadaxe.JPG","name":"El Hacha de Borde Plateado","originalName":"Silver Edged Axe","codeName":"silveredgedaxe","tcNumber":66,"attributes":["Daño 2 manos: 62 a 110 (86 media) Rango (3)","Durabilidad: 35","Velocidad: [0]"],"itemType":"axe","itemClass":"elite","requiredStrength":166,"requiredDexterity":65,"requiredLevel":48,"sockets":5},{"image":"http://www.d2mantix.com/diablo2img/battleaxe.JPG","name":"El Decapitador","originalName":"Decapitator","codeName":"decapitator","tcNumber":75,"attributes":["Daño 2 manos: 49 a 137 (93 media) Rango (3)","Durabilidad: 40","Velocidad: [10]"],"itemType":"axe","itemClass":"elite","requiredStrength":189,"requiredDexterity":33,"requiredLevel":54,"sockets":5},{"image":"http://www.d2mantix.com/diablo2img/greataxe.JPG","name":"El Hacha del Campeon","originalName":"Champion Axe","codeName":"championaxe","tcNumber":84,"attributes":["Daño 2 manos: 59 a 94 (76.5 media) Rango (3)","Durabilidad: 50","Velocidad: [-10]"],"itemType":"axe","itemClass":"elite","requiredStrength":167,"requiredDexterity":59,"requiredLevel":61,"sockets":6},{"image":"http://www.d2mantix.com/diablo2img/giantaxe.JPG","name":"El Hacha Gloriosa","originalName":"Glorious Axe","codeName":"gloriousaxe","tcNumber":87,"attributes":["Daño 2 manos: 60 a 124 (92 media) Rango (4)","Durabilidad: 50","Velocidad: [10]"],"itemType":"axe","itemClass":"elite","requiredStrength":164,"requiredDexterity":55,"requiredLevel":66,"sockets":6}]

module.exports = {
    NORMAL_AXES,
    EXCEPTIONAL_AXES,
    ELITE_AXES
}
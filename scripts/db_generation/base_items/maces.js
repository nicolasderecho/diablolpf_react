const NORMAL_MACES = [{"image":"http://www.d2mantix.com/diablo2img/warhammer.JPG","name":"Martillo de Guerra","originalName":"War Hammer","codeName":"warhammer","tcNumber":27,"attributes":["Daño 1 mano: 19 a 29 (24 de Media) Rango (1)","Durabilidad: 55","Velocidad: [20]"],"itemType":"mace","itemClass":"normal","requiredStrength":53,"sockets":4},{"image":"http://www.d2mantix.com/diablo2img/maul.JPG","name":"Almadena","originalName":"Maul","codeName":"maul","tcNumber":21,"attributes":["Daño 2 manos: 30 a 43 (36.5 de Media) Rango (2)","Durabilidad: 60"],"itemType":"mace","itemClass":"normal","requiredStrength":69,"sockets":6},{"image":"http://www.d2mantix.com/diablo2img/greatmaul.JPG","name":"Almadena Grande","originalName":"Great Maul","codeName":"greatmaul","tcNumber":33,"attributes":["Daño 2 manos: 38 a 58 (48 de Media) Rango (3)","Durabilidad: 60","Velocidad: [20]"],"itemType":"mace","itemClass":"normal","requiredStrength":99,"sockets":6}]

const NORMAL_MACES2 = [{"image":"http://www.d2mantix.com/diablo2img/mace.JPG","name":"Maza","originalName":"Mace","codeName":"mace","tcNumber":9,"attributes":["Daño 1 mano: 3 a 10 (6.5 Media) Rango (1)","Durabilidad: 60","Velocidad: [ 0]"],"itemType":"mace","itemClass":"normal","requiredStrength":27,"sockets":2},{"image":"http://www.d2mantix.com/diablo2img/morningstar.JPG","name":"Estrella del Alba","originalName":"Morning Star","codeName":"morningstar","tcNumber":15,"attributes":["Daño 1 mano: 7 a 16 (11.5 Media) Rango (2)","Durabilidad: 72","Velocidad: [10]"],"itemType":"mace","itemClass":"normal","requiredStrength":36,"sockets":3},{"image":"http://www.d2mantix.com/diablo2img/flail.JPG","name":"Rompecabezas","originalName":"Flail","codeName":"flail","tcNumber":21,"attributes":["Daño 1 mano: 1 a 24 (12.5 Media) Rango (3)","Durabilidad: 30","Velocidad: [-10]"],"itemType":"mace","itemClass":"normal","requiredStrength":41,"requiredDexterity":35,"sockets":5}]

const NORMAL_MACES3 = [{"image":"http://www.d2mantix.com/diablo2img/club.JPG","name":"Porra","originalName":"Club","codeName":"club","tcNumber":2,"attributes":["Daño 1 mano: 1 a 6 (3.5 de Media) Rango (1)","Durabilidad: 24","Velocidad: [-10]"],"itemType":"mace","itemClass":"normal","sockets":2},{"image":"http://www.d2mantix.com/diablo2img/spikedclub.JPG","name":"Porra con Puntas","originalName":"Spiked Club","codeName":"spikedclub","tcNumber":6,"attributes":["Daño 1 mano: 5 a 8 (6.5 de Media) Rango (2)","Durabilidad: 36","Velocidad: [0]"],"itemType":"mace","itemClass":"normal","sockets":2}]

const EXCEPTIONAL_MACES = [{"image":"http://www.d2mantix.com/diablo2img/warhammer.JPG","name":"Martillo de Batalla","originalName":"Battle Hammer","codeName":"battlehammer","tcNumber":48,"attributes":["Daño 1 mano: 35 a 58 (46.5 de Media) Rango (1)","Durabilidad: 55","Velocidad: [20]"],"itemType":"mace","itemClass":"exceptional","requiredStrength":100,"requiredLevel":25,"sockets":4},{"image":"http://www.d2mantix.com/diablo2img/maul.JPG","name":"Porra de Guerra","originalName":"War Club","codeName":"warclub","tcNumber":45,"attributes":["Daño 2 manos: 53 a 78 (65.5 de Media) Rango (2)","Durabilidad: 60","Velocidad: [10]"],"itemType":"mace","itemClass":"exceptional","requiredStrength":124,"requiredLevel":25,"sockets":6},{"image":"http://www.d2mantix.com/diablo2img/greatmaul.JPG","name":"Martel de Fer","originalName":"Martel de Fer","codeName":"marteldefer","tcNumber":54,"attributes":["Daño 2 manos: 61 a 99 (80 de Media) Rango (3)","Durabilidad: 60","Velocidad: [20]"],"itemType":"mace","itemClass":"exceptional","requiredStrength":169,"requiredLevel":25,"sockets":6}]

const EXCEPTIONAL_MACES2 = [{"image":"http://www.d2mantix.com/diablo2img/mace.JPG","name":"Maza Rebordeada","originalName":"Flanged Mace","codeName":"flangedmace","tcNumber":36,"attributes":["Daño 1 mano: 15 a 23 (19 Media) Rango (1)","Durabilidad: 60","Velocidad: [ 0]"],"itemType":"mace","itemClass":"exceptional","requiredStrength":61,"requiredLevel":23,"sockets":2},{"image":"http://www.d2mantix.com/diablo2img/morningstar.JPG","name":"Estrella dentada","originalName":"Jagged Star","codeName":"jaggedstar","tcNumber":39,"attributes":["Daño 1 mano: 20 a 31 (25.5 Media) Rango (2)","Durabilidad: 72","Velocidad: [10]"],"itemType":"mace","itemClass":"exceptional","requiredStrength":74,"requiredLevel":25,"sockets":3},{"image":"http://www.d2mantix.com/diablo2img/flail.JPG","name":"Knut","originalName":"Knout","codeName":"knout","tcNumber":45,"attributes":["Daño 1 mano: 13 a 35 (24 Media) Rango (3)","Durabilidad: 30","Velocidad: [-10]"],"itemType":"mace","itemClass":"exceptional","requiredStrength":82,"requiredDexterity":73,"requiredLevel":25,"sockets":5}]

const EXCEPTIONAL_MACES3 = [{"image":"http://www.d2mantix.com/diablo2img/club.JPG","name":"Garrote","originalName":"Cudgel","codeName":"cudgel","tcNumber":30,"attributes":["Daño 1 mano: 6 a 21 (13.5 de Media) Rango (1)","Durabilidad: 24","Velocidad: [-10]"],"itemType":"mace","itemClass":"exceptional","requiredStrength":25,"requiredLevel":18,"sockets":2},{"image":"http://www.d2mantix.com/diablo2img/spikedclub.JPG","name":"Porra con Puas","originalName":"Barbed Club","codeName":"barbedclub","tcNumber":33,"attributes":["Daño 1 mano: 13 a 25 (19 de Media) Rango (2)","Durabilidad: 36","Velocidad: [0]"],"itemType":"mace","itemClass":"exceptional","requiredStrength":20,"requiredLevel":20,"sockets":2}]

const ELITE_MACES = [{"image":"http://www.d2mantix.com/diablo2img/warhammer.JPG","name":"El Mazo Legendario","originalName":"Legendary Mallet","codeName":"legendarymallet","tcNumber":84,"attributes":["Daño 1 mano: 50 a 61 (55.5 de Media) Rango (1)","Durabilidad: 65","Velocidad: [20]"],"itemType":"mace","itemClass":"elite","requiredStrength":189,"requiredLevel":61,"sockets":4},{"image":"http://www.d2mantix.com/diablo2img/maul.JPG","name":"La Almadena de Ogro","originalName":"Ogre Maul","codeName":"ogremaul","tcNumber":69,"attributes":["Daño 2 manos: 77 a 106 (91.5 de Media) Rango (2)","Durabilidad: 60","Velocidad: [10]"],"itemType":"mace","itemClass":"elite","requiredStrength":225,"requiredLevel":51,"sockets":6},{"image":"http://www.d2mantix.com/diablo2img/greatmaul.JPG","name":"La Almadena Trueno","originalName":"Thunder Maul","codeName":"thundermaul","tcNumber":87,"attributes":["Daño 2 manos: 33 a 180 (106.5 de Media) Rango (3)","Durabilidad: 60","Velocidad: [20]"],"itemType":"mace","itemClass":"elite","requiredStrength":253,"requiredLevel":65,"sockets":6}]

const ELITE_MACES2 = [{"image":"http://www.d2mantix.com/diablo2img/mace.JPG","name":"La Maza Reforzada","originalName":"Reinforced Mace","codeName":"reinforcedmace","tcNumber":63,"attributes":["Daño 1 mano: 41 a 49 (45 Media) Rango (1)","Durabilidad: 60","Velocidad: [ 0]"],"itemType":"mace","itemClass":"elite","requiredStrength":145,"requiredDexterity":46,"requiredLevel":47,"sockets":2},{"image":"http://www.d2mantix.com/diablo2img/morningstar.JPG","name":"La Estrella Diabolica","originalName":"Devil Star","codeName":"devilstar","tcNumber":72,"attributes":["Daño 1 mano: 43 a 53 (48 Media) Rango (2)","Durabilidad: 72","Velocidad: [10]"],"itemType":"mace","itemClass":"elite","requiredStrength":153,"requiredDexterity":44,"requiredLevel":52,"sockets":3},{"image":"http://www.d2mantix.com/diablo2img/flail.JPG","name":"El Azote","originalName":"Scourge","codeName":"scourge","tcNumber":78,"attributes":["Daño 1 mano: 3 a 80 (41.5 Media) Rango (3)","Durabilidad: 65","Velocidad: [-10]"],"itemType":"mace","itemClass":"elite","requiredStrength":125,"requiredDexterity":77,"requiredLevel":57,"sockets":5}]

const ELITE_MACES3 = [{"image":"http://www.d2mantix.com/diablo2img/club.JPG","name":"La porra","originalName":"Truncheon","codeName":"truncheon","tcNumber":57,"attributes":["Daño 1 mano: 35 a 43 (39 de Media) Rango (1)","Durabilidad: 29","Velocidad: [-10]"],"itemType":"mace","itemClass":"elite","requiredStrength":88,"requiredDexterity":43,"requiredLevel":39,"sockets":2},{"image":"http://www.d2mantix.com/diablo2img/spikedclub.JPG","name":"La Porra de Tirano","originalName":"Tyrant Club","codeName":"tyrantclub","tcNumber":60,"attributes":["Daño 1 mano: 32 a 58 (45 de Media) Rango (3)","Durabilidad: 45","Velocidad: [0]"],"itemType":"mace","itemClass":"elite","requiredStrength":133,"requiredLevel":42,"sockets":3}]

module.exports = {
    NORMAL_MACES,
    EXCEPTIONAL_MACES,
    ELITE_MACES,
    NORMAL_MACES2,
    EXCEPTIONAL_MACES2,
    ELITE_MACES2,
    NORMAL_MACES3,
    EXCEPTIONAL_MACES3,
    ELITE_MACES3
}
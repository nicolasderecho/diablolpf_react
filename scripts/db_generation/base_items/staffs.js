const NORMAL_STAFFS = [{"image":"http://www.d2mantix.com/diablo2img/shortstaff.JPG","name":"Baston Corto","originalName":"Short Staff","codeName":"shortstaff","tcNumber":3,"attributes":["Daño 2 manos: 1 a 5 (3 Media) Rango (2)","Durabilidad: 20","Velocidad: [-10]"],"itemType":"staff","itemClass":"normal","requiredLevel":1,"sockets":2},{"image":"http://www.d2mantix.com/diablo2img/longstaff.JPG","name":"Baston Largo","originalName":"Long Staff","codeName":"longstaff","tcNumber":9,"attributes":["Daño 2 manos: 2 a 8 (5 Media) Rango (2)","Durabilidad: 30","Velocidad: [0]"],"itemType":"staff","itemClass":"normal","requiredLevel":1,"sockets":3},{"image":"http://www.d2mantix.com/diablo2img/gnarledstaff.JPG","name":"Baston Nudoso","originalName":"Gnarled Staff","codeName":"gnarledstaff","tcNumber":12,"attributes":["Daño 2 manos: 4 a 12 (8 Media) Rango (2)","Durabilidad: 35","Velocidad: [10]"],"itemType":"staff","itemClass":"normal","requiredLevel":1,"sockets":4},{"image":"http://www.d2mantix.com/diablo2img/battlestaff.JPG","name":"Baston de Batalla","originalName":"Battle Staff","codeName":"battlestaff","tcNumber":18,"attributes":["Daño 2 manos: 6 a 13 (9.5 Media) Rango (2)","Durabilidad: 40","Velocidad: [0]"],"itemType":"staff","itemClass":"normal","requiredLevel":1,"sockets":4},{"image":"http://www.d2mantix.com/diablo2img/warstaff.JPG","name":"Baston de Guerra","originalName":"War Staff","codeName":"warstaff","tcNumber":24,"attributes":["Daño 2 manos: 12 a 28 (20 Media) Rango (2)","Durabilidad: 50","Velocidad: [20]"],"itemType":"staff","itemClass":"normal","requiredLevel":1,"sockets":6}]

const EXCEPTIONAL_STAFFS = [{"image":"http://www.d2mantix.com/diablo2img/shortstaff.JPG","name":"Baston de Jo","originalName":"Jo Staff","codeName":"jostaff","tcNumber":30,"attributes":["Daño 2 manos: 6 a 21 (13.5 Media) Rango (2)","Durabilidad: 20","Velocidad: [-10]"],"itemType":"staff","itemClass":"exceptional","requiredStrength":25,"requiredLevel":18,"sockets":2},{"image":"http://www.d2mantix.com/diablo2img/longstaff.JPG","name":"Baston de Mando","originalName":"Quarterstaff","codeName":"quarterstaff","tcNumber":36,"attributes":["Daño 2 manos: 8 a 26 (17 Media) Rango (2)","Durabilidad: 30","Velocidad: [0]"],"itemType":"staff","itemClass":"exceptional","requiredStrength":25,"requiredLevel":23,"sockets":3},{"image":"http://www.d2mantix.com/diablo2img/gnarledstaff.JPG","name":"Baston de Cedro","originalName":"Cedar Staff","codeName":"cedarstaff","tcNumber":39,"attributes":["Daño 2 manos: 11 a 32 (21.5 Media) Rango (2)","Durabilidad: 35","Velocidad: [10]"],"itemType":"staff","itemClass":"exceptional","requiredStrength":25,"requiredLevel":25,"sockets":3},{"image":"http://www.d2mantix.com/diablo2img/battlestaff.JPG","name":"Baston Gotico","originalName":"Gothic Staff","codeName":"gothicstaff","tcNumber":42,"attributes":["Daño 2 manos: 14 a 34 (24 Media) Rango (2)","Durabilidad: 40","Velocidad: [0]"],"itemType":"staff","itemClass":"exceptional","requiredStrength":25,"requiredLevel":25,"sockets":4},{"image":"http://www.d2mantix.com/diablo2img/warstaff.JPG","name":"Baston Runico","originalName":"Rune Staff","codeName":"runestaff","tcNumber":48,"attributes":["Daño 2 manos: 24 a 58 (41 Media) Rango (2)","Durabilidad: 50","Velocidad: [20]"],"itemType":"staff","itemClass":"exceptional","requiredStrength":25,"requiredLevel":25,"sockets":6}]

const ELITE_STAFFS = [{"image":"http://www.d2mantix.com/diablo2img/shortstaff.JPG","name":"El Baton de Caminante","originalName":"Walking Stick","codeName":"walkingstick","tcNumber":69,"attributes":["Daño 2 manos: 69 a 85 (77 Media) Rango (2)","Durabilidad: 20","Velocidad: [-10]"],"itemType":"staff","itemClass":"elite","requiredStrength":25,"requiredLevel":43,"sockets":2},{"image":"http://www.d2mantix.com/diablo2img/longstaff.JPG","name":"La Estalagmita","originalName":"Stalagmite","codeName":"stalagmite","tcNumber":75,"attributes":["Daño 2 manos: 75 a 107 (91 Media) Rango (2)","Durabilidad: 30","Velocidad: [10]"],"itemType":"staff","itemClass":"elite","requiredStrength":63,"requiredDexterity":35,"requiredLevel":49,"sockets":3},{"image":"http://www.d2mantix.com/diablo2img/gnarledstaff.JPG","name":"El Baston de Anciano","originalName":"Elder Staff","codeName":"elderstaff","tcNumber":75,"attributes":["Daño 2 manos: 80 a 93 (86.5 Media) Rango (2)","Durabilidad: 35","Velocidad: [10]"],"itemType":"staff","itemClass":"elite","requiredStrength":44,"requiredDexterity":37,"requiredLevel":55,"sockets":4},{"image":"http://www.d2mantix.com/diablo2img/battlestaff.JPG","name":"La Cachiporra","originalName":"Shillelagh","codeName":"shillelagh","tcNumber":84,"attributes":["Daño 2 manos: 65 a 108 (86.5 Media) Rango (2)","Durabilidad: 40","Velocidad: [0]"],"itemType":"staff","itemClass":"elite","requiredStrength":52,"requiredDexterity":27,"requiredLevel":62,"sockets":4},{"image":"http://www.d2mantix.com/diablo2img/warstaff.JPG","name":"El Baston Arconte","originalName":"Archon Staff","codeName":"archonstaff","tcNumber":87,"attributes":["Daño 2 manos: 83 a 99 (91 Media) Rango (2)","Durabilidad: 50","Velocidad: [10]"],"itemType":"staff","itemClass":"elite","requiredStrength":34,"requiredLevel":66,"sockets":6}]

module.exports = {
    NORMAL_STAFFS,
    EXCEPTIONAL_STAFFS,
    ELITE_STAFFS
}
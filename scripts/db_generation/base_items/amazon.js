const NORMAL_AMAZON = [{"image":"http://www.d2mantix.com/diablo2img/stagbow.JPG","name":"El Arco Ciervo","originalName":"Stag Bow","codeName":"stagbow","tcNumber":0,"attributes":["Tipo de Objeto: Arcos","Daño 2 manos: 7 a 12 (9.5 Media)","Velocidad: [0]"],"itemType":"bow","itemClass":"normal","requiredStrength":30,"requiredDexterity":45,"requiredLevel":14,"character":"amazon","sockets":5},{"image":"http://www.d2mantix.com/diablo2img/reflexbow.JPG","name":"El Arco Reflejo","originalName":"Reflex Bow","codeName":"reflexbow","tcNumber":0,"attributes":["Tipo de Objeto: Arcos","Daño 2 manos: 9 a 19 (14 Media)","Velocidad: [10]"],"itemType":"bow","itemClass":"normal","requiredStrength":35,"requiredDexterity":60,"requiredLevel":20,"character":"amazon","sockets":5},{"image":"http://www.d2mantix.com/diablo2img/maidenspear.JPG","name":"La Lanza Doncella","originalName":"Maiden Spear","codeName":"maidenspear","tcNumber":0,"attributes":["Tipo de Objeto: Lanzas","Daño 2 manos: 18 a 24 (21 Media) Rango (5)","Durabilidad: 28","Velocidad: [0]"],"itemType":"spear","itemClass":"normal","requiredStrength":54,"requiredDexterity":40,"requiredLevel":14,"character":"amazon","sockets":6},{"image":"http://www.d2mantix.com/diablo2img/maidenpike.JPG","name":"La Pica Doncella","originalName":"Maiden Pike","codeName":"maidenpike","tcNumber":0,"attributes":["Tipo de Objeto: Lanzas","Daño 2 manos: 23 a 55 (39 Media) Rango (5)","Durabilidad: 25","Velocidad: [10]"],"itemType":"spear","itemClass":"normal","requiredStrength":63,"requiredDexterity":52,"requiredLevel":20,"character":"amazon","sockets":6},{"image":"http://www.d2mantix.com/diablo2img/maidenjavelin.JPG","name":"La Jabalina Doncella","originalName":"Maiden Javelin","codeName":"maidenjavelin","tcNumber":0,"attributes":["Tipo de Objeto: Jabalinas","Daño 1 mano: 8 a 14 (11 Media) Rango (3)","Daño Lanzamiento: 6 a 22 (14 Media)","Velocidad: [-10]","Cantidad (80)"],"itemType":"spear","itemClass":"normal","requiredStrength":33,"requiredDexterity":47,"requiredLevel":17,"character":"amazon"}]

const EXCEPTIONAL_AMAZON = [{"image":"http://www.d2mantix.com/diablo2img/stagbow.JPG","name":"El Arco Ashwood","originalName":"Ashwood bow","codeName":"ashwoodbow","tcNumber":42,"attributes":["Tipo de Objeto: Arcos","Daño 2 manos: 16 a 29 (22.5 Media)","Velocidad: [0]"],"itemType":"bow","itemClass":"exceptional","requiredStrength":56,"requiredDexterity":77,"requiredLevel":29,"character":"amazon","sockets":5},{"image":"http://www.d2mantix.com/diablo2img/reflexbow.JPG","name":"El Arco Ceremonial","originalName":"Ceremonial bow","codeName":"ceremonialbow","tcNumber":48,"attributes":["Tipo de Objeto: Arcos","Daño 2 manos: 19 a 41 (30 Media)","Velocidad: [10]"],"itemType":"bow","itemClass":"exceptional","requiredStrength":73,"requiredDexterity":110,"requiredLevel":35,"character":"amazon","sockets":5}, {"image":"http://www.d2mantix.com/diablo2img/maidenspear.JPG","name":"La Lanza Ceremonial","originalName":"Ceremonial Spear","codeName":"ceremonialspear","tcNumber":42,"attributes":["Tipo de Objeto: Lanzas","Daño 2 manos: 34 a 51 (42.5 Media) Rango (5)","Durabilidad: 28","Velocidad: [0]"],"itemType":"spear","itemClass":"exceptional","requiredStrength":101,"requiredDexterity":80,"requiredLevel":32,"character":"amazon","sockets":6},{"image":"http://www.d2mantix.com/diablo2img/maidenpike.JPG","name":"La Pica Ceremonial","originalName":"Ceremonial Pike","codeName":"ceremonialpike","tcNumber":51,"attributes":["Tipo de Objeto: Lanzas","Daño 2 manos: 42 a 101 (71.5 Media) Rango (5)","Durabilidad: 25","Velocidad: [20]"],"itemType":"spear","itemClass":"exceptional","requiredStrength":115,"requiredDexterity":98,"requiredLevel":38,"character":"amazon","sockets":6},{"image":"http://www.d2mantix.com/diablo2img/maidenjavelin.JPG","name":"La Jabalina Ceremonial","originalName":"Ceremonial Javelin","codeName":"ceremonialjavelin","tcNumber":36,"attributes":["Tipo de Objeto: Jabalinas","Daño 1 mano: 18 a 35 (26.5 Media) Rango (3)","Daño Lanzamiento: 18 a 54 (36 Media)","Velocidad: [-10]","Cantidad (80)"],"itemType":"spear","itemClass":"exceptional","requiredStrength":25,"requiredDexterity":109,"requiredLevel":26,"character":"amazon"}]

const ELITE_AMAZON = [{"image":"http://www.d2mantix.com/diablo2img/stagbow.JPG","name":"El Arco Matriarcal","originalName":"Matriarchal Bow","codeName":"matriarchalbow","tcNumber":54,"attributes":["Tipo de Objeto: Arcos","Daño 2 manos: 20 a 47 (33.5 Media)","Velocidad: [-10]"],"itemType":"bow","itemClass":"elite","requiredStrength":87,"requiredDexterity":187,"requiredLevel":39,"character":"amazon","sockets":5},{"image":"http://www.d2mantix.com/diablo2img/reflexbow.JPG","name":"El Arco Gran Matrona","originalName":"Grand Matron Bow","codeName":"grandmatronbow","tcNumber":78,"attributes":["Tipo de Objeto: Arcos","Daño 2 manos: 14 a 72 (43 Media)","Velocidad: [10]"],"itemType":"bow","itemClass":"elite","requiredStrength":108,"requiredDexterity":15,"requiredLevel":58,"character":"amazon","sockets":5},{"image":"http://www.d2mantix.com/diablo2img/maidenspear.JPG","name":"La Lanza Matrialcal","originalName":"Matriarchal Spear","codeName":"matriarchalspear","tcNumber":63,"attributes":["Tipo de Objeto: Lanzas","Daño 2 manos: 65 a 95 (80 Media) Rango (5)","Durabilidad: 28","Velocidad: [0]"],"itemType":"spear","itemClass":"elite","requiredStrength":114,"requiredDexterity":142,"requiredLevel":45,"character":"amazon","sockets":6},{"image":"http://www.d2mantix.com/diablo2img/maidenpike.JPG","name":"La Pica Matriarcal","originalName":"Matriarchal Pike","codeName":"matriarchalpike","tcNumber":63,"attributes":["Tipo de Objeto: Lanzas","Daño 2 manos: 37 a 153 (95 Media) Rango (5)","Durabilidad: 25","Velocidad: [20]"],"itemType":"spear","itemClass":"elite","requiredStrength":132,"requiredDexterity":149,"requiredLevel":60,"character":"amazon","sockets":6},{"image":"http://www.d2mantix.com/diablo2img/maidenjavelin.JPG","name":"La Jabalina Matriarcal","originalName":"Matriarchal Javelin","codeName":"matriarchaljavelin","tcNumber":66,"attributes":["Tipo de Objeto: Jabalinas","Daño 1 mano: 30 a 54 (42 Media) Rango (3)","Daño Lanzamiento: 35 a 66 (50.5 Media)","Velocidad: [-10]","Cantidad (80)"],"itemType":"spear","itemClass":"elite","requiredStrength":107,"requiredDexterity":151,"requiredLevel":48,"character":"amazon"}]

module.exports = {
    NORMAL_AMAZON,
    EXCEPTIONAL_AMAZON,
    ELITE_AMAZON
}
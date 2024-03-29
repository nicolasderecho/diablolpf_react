import React from 'react';
import {Title, Columns, Column, Container, Subtitle} from 'tenpines-bulma-react';
import ActAreas from '../shared/ActAreas';
import ActOne from '../data/json/act1.json'
import ActTwo from '../data/json/act2.json'
import ActThree from '../data/json/act3.json'
import ActFour from '../data/json/act4.json'
import ActFive from '../data/json/act5.json'

const externalLink = (url, title, options = {}) => {
	const target = options.target || '_blank';
  return <a href={url} className='external-link' target={target} rel='noopener noreferrer' >{title}</a>
};

const TipsPage = (props) => {
    return <div className={'page-container tips'}>
        <Container>
            <Columns multiline>
                <Column columnSize='full'>
                    <Title className='white-text' spaced>Atributos de los Items</Title>
                </Column>
                <Column columnSize='full'>               
                    <Subtitle as={'h3'} className='red-text'>+X a las habilidades de fuego</Subtitle>
                    <p>
                        Incluye todo el árbol Fuego de hechicera, así como habilidades de amazona (flecha de fuego, flecha explosiva, flecha inmoladora), de paladín (fuego sagrado), de druida (garras de fuego, tormenta de fuego, roca líquida, fisura, volcán, armagedón), de asesina (puños de fuego, cola de dragón, ráfaga de fuego, estela de fuego, estela infernal), y de nigromante (golem de fuego, explosión de cadáveres).
                    </p>
                </Column>
                <Column columnSize='full'>               
                    <Subtitle as={'h3'} className='blue-text'> X% daño infligido repercute en el maná</Subtitle>
                    <p>Es un modificador que sirve para recuperar cantidades de la preciada materia azul cada vez que eres dañado. Contrariamente a la creencia popular, NO reduce de ninguna manera los daños recibidos, sino que el porcentaje poseído se aplica sobre la cifra obtenida para calcular cuánto maná se recupera. De esta manera, si tenemos 50% de daño infligido repercute en el maná y nos llevamos 100 puntos de daño, perderíamos 100 puntos de vida (supongamos que no tenemos resistencias ni daños reducidos de ninguna clase) y, en caso de no tener nuestra orbe de maná completa, recuperaríamos de golpe 50 puntos de materia azul. Si la cantidad bruta de maná recuperado excede el total que podemos llegar a tener los puntos restantes se perderán.</p>
                    <br/>
                    <p>Daño infligido repercute en el maná sólamente se aplica cuando se reciben daños de tipo físico, sean hechos en combate cuerpo a cuerpo o a distancia. El modificador no será tenido en cuenta si nos atacan con magia, elementales, o veneno.</p>
                </Column>
                <Column columnSize='full'>               
                    <Subtitle as={'h3'} className='orange-text'> Azote Mortal</Subtitle>
                    <p>Es la posibilidad de conseguir doble daño. Este bono se aplica después de aplicar el resto de habilidades y otros modificadores que influyen en el calculo del daño. Se suma Azote Mortal y Azote Crítico y nunca afectará más de un 100%</p>
                </Column>
                <Column columnSize='full'>               
                    <Subtitle as={'h3'} className='orange-text'> Heridas Abiertas</Subtitle>
                    <p>Posibilidad de provocar que un monstruo empiece a sangrar de manera incontrolada. Si un monstruo o un jugador está bajo este efecto, irá perdiendo vida con el tiempo. Se suma todos los bonos de este modificador que tengamos en el equipo.</p>
                    <br/>
                    <p>Tiene una duracion de 200 frames, o lo que es lo mismo, 8 segundos.</p>
                </Column>
                <Column columnSize='full'>               
                    <Subtitle as={'h3'} className='orange-text'> Golpe Triturador</Subtitle>
                    <p>Posibilidad de reducir una fraccion de la vida de un objetivo en un solo golpe. (ej: 1/4 de la vida del enemigo de un golpe)</p>
                </Column>
                <Column columnSize='full'>               
                    <Subtitle as={'h3'} className='orange-text'> El Impacto Hace que el Monstruo Huya</Subtitle>
                    <p>Tiene los mismos efectos que la habilidad Aullido del Bárbaro o Terror del Nigromante y como su nombre indica, es la posibilidad de hacer que un monstruo huya aterrorizado al golpearlo.</p>
                </Column>
                <Column columnSize='full'>               
                    <Subtitle as={'h3'} className='orange-text'> Defensa contra Misil</Subtitle>
                    <p>Reduce el % de posibilidades de ser alcanzado por los misiles enemigos, actúa sobre el factor de defensa aumentando la defensa del personaje.</p>
                </Column>
                <Column columnSize='full'>               
                    <Subtitle as={'h3'} className='orange-text'> El Impacto Ciega al Objetivo</Subtitle>
                    <p>Reduce el radio de vision tal como lo hace la maldicion Vision Borrosa del Nigromante.</p>
                </Column>
                <Column columnSize='full'>               
                    <Subtitle as={'h3'} className='orange-text'> Ralentiza al Objetivo</Subtitle>
                    <p>Reduce la velocidad de movimiento y ataque de los monstruos en el % especificado. Aunque parezca que esto congele a los objetivos al aparecer de color azul cuando están bajo los efectos de este modificador, no se trata de un ataque de frío.</p>
                </Column>
                <Column columnSize='full'>               
                    <Subtitle as={'h3'} className='orange-text'> Matar Monstruos</Subtitle>
                    <p>No se podrá realizar ninguna accion sobre los cuerpos de los monstruos caidos. Habilidades que no se podrán hacer son: Invocar del nigromante, Buscar objetos del Barbaro, Redencion del paladín.</p>
                </Column>
                <Column columnSize='full'>               
                    <Subtitle as={'h3'} className='orange-text'> Ignorar Defensa del Objetivo</Subtitle>
                    <p>Esta habilidad no funciona en únicos, mercenarios, super-únicos, otros jugadores y jefes de final de acto.</p>
                    <br/>
                    <p>Este modificador lo que hace es dejar la defensa en 0.</p>
                </Column>
                <Column columnSize='full'>               
                    <Subtitle as={'h3'} className='orange-text'> Absorción</Subtitle>
                    <p>No confundir con absorcion de daño, ni con absorcion de daño de magia. Son modificadores distintos y se comportan de manera distinta.</p>
                    <br/>
                    <p>Absorcion (o absorber), como su nombre indica, absorbe el daño de ataque elemental del tipo que el objeto indique, y convierte el daño recibido de modo que cura al personaje. Esto es muy útil contra determinados ataques elementales muy peligrosos. Su funcionamiento es el siguiente: Si por ejemplo, se utiliza un objeto con un 5% de absorcion de fuego, el 5% del daño de fuego recibido que normalmente dañaría al personaje, en este caso le curaría. Esto no significa que no reciba daño, sino que parte del que recibe se convierte en vida automáticamente. Un 5% de absorcion equivale a un 10% aproximadamente de resistencia elemental. Además este modificador no está limitado, o sea que se puede superar el máximo de resistencia elemental con este tipo de objetos, yendo más allá del 75% de resistencias elementales (el máximo alcanzable sin objetos de este tipo).</p>
                </Column>
                <Column columnSize='full'>
                    <Title className='white-text' spaced>Clases de los objetos</Title>
                </Column>
                <Column columnSize='full'>               
                    <Subtitle as={'h3'} className='gold-text'>Clase Normal</Subtitle>
                    <p>
                    Son los objetos únicos que tienen como base un objeto normal (que se puede encontrar en los niveles de dificultad normal, pesadilla e infierno).
                    </p>
                </Column>
                <Column columnSize='full'>               
                    <Subtitle as={'h3'} className='gold-text'>Clase Excepcional</Subtitle>
                    <p>
                    Son los objetos únicos que tienen como base un objeto excepcional (que se puede encontrar finalizando el nivel de dificultad normal, y empieza a ser más común en los niveles pesadilla e infierno).
                    </p>
                </Column>          
                <Column columnSize='full'>               
                    <Subtitle as={'h3'} className='gold-text'>Clase Elite</Subtitle>
                    <p>
                    Son los objetos que tienen como base un objeto élite (que se puede encontrar finalizando el nivel de dificultad pesadilla, y empieza a ser más común en el nivel infierno).
                    </p>
                </Column>
                <Column columnSize='full'>
                    <Title className='white-text' spaced>Area 85</Title>
                </Column>               
                <Column columnSize='full'>
                    <Subtitle as={'h3'} className='orange-text'>¿Qué son las áreas 85?</Subtitle>
                    <p>
                    Las áreas 85 son lugares en el juego donde es normal que los monstruos dejen caer al matarlos ciertos objetos que por su alto TC (treasure class) no serían posibles encontrarlos en dicha ubicación.
                    </p>
                </Column>    
                <Column columnSize='full'>
                    <Subtitle as={'h3'} className='orange-text'>¿Por qué fueron incrementados los TC de estas áreas?</Subtitle>
                    <p>
                    La explicación de este fenómeno es que en anteriores versiones se dejaron en desuso o eran muy poco concurridas las áreas que actualmente son consideradas como áreas 85, por lo que los desarrolladores del parche 1.10 decidieron subirle el TC del área en dichos lugares para que sean más concurridos.
                    </p>
                </Column>  
                <Column columnSize='full'>
                    <Subtitle as={'h3'} className='orange-text'>¿De donde viene el nombre “áreas 85”?</Subtitle>
                    <p>
                    En las áreas todos los monstruos poseen el nivel 87 con lo que podrán dejar caer todos los objetos de TC inferior o igual al 87, o sea, todos los objetos del juego. Los monstruos poseen nivel 87 ya que se le suma 2 al nivel por ser esbirros (85+2=87), los monstruos superúnicos, únicos o campeones suman 3 al nivel 85, consiguiendo así el nivel 88.
                    </p>
                </Column>        
                <Column columnSize='full'>
                    <Subtitle as={'h3'} className='orange-text'>¿Qué puedo conseguir en estas áreas?</Subtitle>
                    <p>
                    Todos los objetos del juego pueden ser obtenidos en dichas áreas y en especial de los monstruos únicos, superúnicos y campeones.
                    </p>
                </Column>
                <Column columnSize='full'>
                    <Title className='white-text' spaced>¿Cuales son las Areas 85 del juego?</Title>
                </Column>
                <Column columnSize="full">
                    <ActAreas actData={ActOne} title="Acto I" />
                </Column>
                <Column columnSize="full">
                    <ActAreas actData={ActTwo} title="Acto II" />
                </Column>
                <Column columnSize="full">
                    <ActAreas actData={ActThree} title="Acto III" />
                </Column>
                <Column columnSize="full">
                    <ActAreas actData={ActFour} title="Acto IV" />
                </Column>
                <Column columnSize="full">
                    <ActAreas actData={ActFive} title="Acto V" />
                </Column>
                <Column columnSize='full'>
                    <Title className='white-text' spaced>Llaves del pandemonium</Title>
                    <p>
                        Una nueva aventura aguarda para el mundo de Diablo: el Pandemonium, el más peligroso de los infiernos y desde el cual los tres hermanos se están reorganizando para hacer sucumbir el mundo de los mortales bajo su demoníaca influencia.<br/>
                        ¿Serán capaces nuestros cansados y hastiados héroes, de hacer regresar al Mal a las entrañas del Averno Oscuro del cual procedieron?
                    </p>
                    <p>
                        Este evento consiste en enfrentarte a los Über-clones de todos los jefes finales, además de Izual, Lilith y Duriel para conseguir un jugoso premio.                        
                    </p>
                </Column>
                <Column columnSize='full'>
                    <Subtitle as={'h3'} className='orange-text'>Ubicación de las llaves</Subtitle>
                    <p>
                        Debemos encontrar las llaves necesarias para abrir los portales al pandemonium. Se pueden encontrar en:<br/><br/>
                        <span style={{color: '#AA8A28'}}>Condesa</span>:&nbsp;Torre Olvidada, nivel 5 (Acto 1) => Llave del Terror<br/>
                        <span style={{color: '#AA8A28'}}>Invocador</span>:&nbsp;Santuario Arcano (Acto 2) => Llave del Odio<br/>
                        <span style={{color: '#AA8A28'}}>Nihlathak</span>:&nbsp;Salas de Vaugh (Acto 5) => Llave de la Destrucción
                    </p>
                    <br/>
                    <p>
                        Las 3 llaves (una de cada tipo) se podrán transmutar en dificultad Infierno, Acto 5, y así abrir un portal que nos llevará a alguno de los siguientes monstruos aleatoriamente:<br/><br/>
                        <span style={{color: '#AA8A28'}}>Guarida de Matron</span>:&nbsp;Lilith (similar a Andariel) => Al matarlo tirará el Ojo de Baal<br/>
                        <span style={{color: '#AA8A28'}}>Arenas Olvidadas</span>:&nbsp;Duriel Clone => Al matarlo tirará el Cuerno de Diablo<br/>
                        <span style={{color: '#AA8A28'}}>Caldera del Dolor</span>:&nbsp;Izual Clone => Al matarlo tirará el Cerebro de Mefisto<br/>
                    </p>
                    <br/>
                    <p>Como el portal que se obtiene al transmutar las 3 llaves es aleatorio, se recomienda abrir los tres en la misma partida, de lo contrario podría salir alguno repetido(por lo tanto se necesitarían 9 llaves en total).</p>
                </Column>    
                <Column columnSize='full'>
                    <Subtitle as={'h3'} className='orange-text'>Entrar al Pandemonium</Subtitle>
                    <p>
                        Una vez tengamos el Ojo de Baal, el Cuerno de Diablo y el Cerebro de Mefisto deberemos ir de nuevo a Harrogath y transmutarlos, para abrir el último y más complicado portal: Tristam o Ultimate Pandemonium.<br/>
                        <br/>Adviértase, dicho sea de paso, que no se podrá abrir ningún portal en el interior de Tristam.
                        Dentro, nos encontraremos a tres difíciles oponentes (rodeados de sus esbirros):&nbsp;<span style={{color: '#AA8A28'}}>Diablo Clone</span>, <span style={{color: '#AA8A28'}}>Baal Clone</span>, y <span style={{color: '#AA8A28'}}>Mefisto Clone</span>.<br/>
                        <br/>
                        Luego de vencerlos en una batalla dura y despiadada, obtendremos una gran recompensa: el <span style={{color: '#AA8A28'}}>Torch</span>.
                    </p>
                </Column>
                <Column columnSize='full'>
                    <Title className='white-text' spaced>Otras páginas de interés</Title>
                    <div className='flex-column'>
												<div className='vertical-bottom-padding'>{externalLink('https://diablo.fandom.com/wiki/Diablo_(Game)', 'Diablo I Wiki')}</div>
												<div className='vertical-bottom-padding'>{externalLink('https://diablo2.diablowiki.net/Main_Page', 'Diablo II Wiki')}</div>
												<div className='vertical-bottom-padding'>{externalLink('https://diablo.fandom.com/wiki/Diablo_II', 'Diablo II Fandom')}</div>
												<div className='vertical-bottom-padding'>{externalLink('https://diablo.gamepedia.com/Diablo_II_Wiki', 'Diablo II Gamepedia')}</div>
												<div className='vertical-bottom-padding'>{externalLink('https://www.diablo2latino.com/', 'Diablo II Latino')}</div>
												<div className='vertical-bottom-padding'>{externalLink('http://www.d2mantix.com/', 'Diablo II Mantix')}</div>
                                                <div className='vertical-bottom-padding'>{externalLink('https://diablo2.io/', 'Diablo 2 IO')}</div>
												
												
										</div>
                </Column>                                                          
            </Columns>
            <br/>
            <br/>
        </Container>
    </div>;
}

export default TipsPage;
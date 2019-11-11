import React from 'react';
import {Title, Content, Columns, Column, Container, Subtitle} from 'tenpines-bulma-react';

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
                <Column columnSize='full'>
                    <Subtitle as={'h3'} className='orange-text'>Acto 1</Subtitle>
                    <p>
                        - Foso niveles 1 y 2 ( Se accede desde Tierras Altas de Tamoe)<br/>
                        - Mausoleo (Se accede desde el cementerio)
                    </p>
                </Column>   
                <Column columnSize='full'>
                    <Subtitle as={'h3'} className='orange-text'>Acto 2</Subtitle>
                    <p>
                        - Cubil de los gusanos nivel 3 (Se accede desde el Oasis Lejano)<br/>
                        - Túneles antiguos (Se accede desde Ciudad Perdida)
                    </p>
                </Column>      
                <Column columnSize='full'>
                    <Subtitle as={'h3'} className='orange-text'>Acto 3</Subtitle>
                    <p>
                        - Cloacas nivel 2<br/>
                        - Templo olvidado (Se accede desde Parte alta de Kurast)<br/>
                        - El santuario en ruinas (Se accede desde Calzada de Kurast)<br/>
                        - Relicario abandonado (Se accede desde Calzada de Kurast)
                    </p>
                </Column>   
                <Column columnSize='full'>
                    <Subtitle as={'h3'} className='orange-text'>Acto 4</Subtitle>
                    <p>
                        - Río de llamas<br/>
                        - Santuario del caos
                    </p>
                </Column>    
                <Column columnSize='full'>
                    <Subtitle as={'h3'} className='orange-text'>Acto 5</Subtitle>
                    <p>
                        - Cima del Monte arreat<br/>
                        - Torres del Homenaje, todos lo niveles<br/>
                        - Trono de la Destrucción<br/>
                        - Camara del Mundo de Piedra
                    </p>
                </Column>                                                    
            </Columns>
            <br/>
            <br/>
        </Container>
    </div>;
}

export default TipsPage;
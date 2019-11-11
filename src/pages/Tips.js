import React from 'react';
import {Title, Content, Columns, Column, Container, Subtitle} from 'tenpines-bulma-react';

const Tips = {
    fireSkills: 'Icluye todo el árbol Fuego de hechicera, así como habilidades de amazona (flecha de fuego, flecha explosiva, flecha inmoladora), de paladín (fuego sagrado), de druida (garras de fuego, tormenta de fuego, roca líquida, fisura, volcán, armagedón), de asesina (puños de fuego, cola de dragón, ráfaga de fuego, estela de fuego, estela infernal), y de nigromante (golem de fuego, explosión de cadáveres).',
    damageOnMana: "Es un modificador que sirve para recuperar cantidades de la preciada materia azul cada vez que eres dañado. Contrariamente a la creencia popular, NO reduce de ninguna manera los daños recibidos, sino que el porcentaje poseído se aplica sobre la cifra obtenida para calcular cuánto maná se recupera. De esta manera, si tenemos 50% de daño infligido repercute en el maná y nos llevamos 100 puntos de daño, perderíamos 100 puntos de vida (supongamos que no tenemos resistencias ni daños reducidos de ninguna clase) y, en caso de no tener nuestra orbe de maná completa, recuperaríamos de golpe 50 puntos de materia azul. Si la cantidad bruta de maná recuperado excede el total que podemos llegar a tener los puntos restantes se perderán.<br/>Daño infligido repercute en el maná sólamente se aplica cuando se reciben daños de tipo físico, sean hechos en combate cuerpo a cuerpo o a distancia. El modificador no será tenido en cuenta si nos atacan con magia, elementales, o veneno.",
    normalUnique: 'Son los objetos únicos que tienen como base un objeto normal (que se puede encontrar en los niveles de dificultad normal, pesadilla e infierno).',
    exceptionalUnique: 'Son los objetos únicos que tienen como base un objeto excepcional (que se puede encontrar finalizando el nivel de dificultad normal, y empieza a ser más común en los niveles pesadilla e infierno).',
    eliteUnique: 'Son los objetos que tienen como base un objeto élite (que se puede encontrar finalizando el nivel de dificultad pesadilla, y empieza a ser más común en el nivel infierno).'
}

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
            </Columns>
        </Container>
    </div>;
}

export default TipsPage;
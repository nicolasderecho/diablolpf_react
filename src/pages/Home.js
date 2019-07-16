import React from 'react';
import './Home.css';
import {Container, Image} from 'tenpines-bulma-react';
import necromancer from '../assets/necro.gif';
import sorceress from '../assets/sorceress.gif';
import barbarian from '../assets/baba.gif';
import amazon from '../assets/amazon.gif';
import logo from '../assets/diablo2_logo2.png';


const Home = (props) => {
    return <Container className={'home-container'}>
        <div className={'images'}>
            <Image src={necromancer} is={'128x128'}></Image>
            <Image src={sorceress} is={'128x128'}></Image>
        </div>
        <div className={'images logo'}>
            <Image src={logo}></Image>
        </div>
        <div className={'images'}>
            <Image src={barbarian} is={'128x128'}></Image>
            <Image src={amazon} is={'128x128'}></Image>
        </div>
    </Container>;
};

export default Home;
import React from 'react';
import necromancer from '../assets/necro.gif';
import sorceress from '../assets/sorceress.gif';
import barbarian from '../assets/baba.gif';
import amazon from '../assets/amazon.gif';
import logo from '../assets/diablo2_logo2.png';

const Home = () => (
  <div className="container mx-auto px-4 flex flex-row flex-wrap h-[90vh] pt-6">
    <div className="flex w-full flex-row justify-between">
      <img src={necromancer} alt="Necromancer" className="h-32 md:h-52 w-auto object-contain" />
      <img src={sorceress} alt="Sorceress" className="h-32 md:h-52 w-auto object-contain" />
    </div>
    <div className="flex w-full flex-row justify-center">
      <img src={logo} alt="Diablo II" className="w-auto" />
    </div>
    <div className="flex w-full flex-row justify-between">
      <img src={barbarian} alt="Barbarian" className="h-32 md:h-52 w-auto object-contain" />
      <img src={amazon} alt="Amazon" className="h-32 md:h-52 w-auto object-contain" />
    </div>
  </div>
);

export default Home;

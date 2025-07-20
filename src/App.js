import React from 'react';
import Home from './pages/Home';
import Runes from './pages/Runes';
import Header from './layout/Header'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gems from './pages/Gems';
import Runewords from './pages/Runewords';
import CubeFormulas from './pages/CubeFormulas';
import NotFoundPage from './pages/NotFoundPage';
import UniqueItemsPage from './pages/UniqueItemsPage/UniqueItems';
import BaseItemsPage from './pages/BaseItemsPage/BaseItems';
import TipsPage from './pages/Tips';
import SetObjects from './pages/Sets/SetObjects';
import Test from './pages/Test';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/runas' element={<Runes />} />
          <Route path='/gemas' element={<Gems />} />
          <Route path='/palabras_runicas' element={<Runewords />} />
          <Route path='/cubo' element={<CubeFormulas />} />
          <Route path='/items_unicos' element={<UniqueItemsPage />} />
          <Route path='/items_base' element={<BaseItemsPage />} />
          <Route path='/tips' element={<TipsPage />} />
          <Route path='/sets' element={<SetObjects />} />
          <Route path='/test' element={<Test />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

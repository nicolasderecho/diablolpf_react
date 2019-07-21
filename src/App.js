import React from 'react';
import Home from './pages/Home';
import Runes from './pages/Runes';
import Header from './layout/Header'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Gems from './pages/Gems';
import Runewords from './pages/Runewords';
import CubeFormulas from './pages/CubeFormulas';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Route exact path={'/'} render={() => <Home/> } />
        <Route exact path={'/runas'} render={() => <Runes /> } />
        <Route exact path={'/gemas'} render={() => <Gems /> } />
        <Route exact path={'/palabras_runicas'} render={() => <Runewords /> } />
        <Route exact path={'/cubo'} render={() => <CubeFormulas /> } />
        <Route render={() => <NotFoundPage />} />
      </Router>
    </div>
  );
}

export default App;

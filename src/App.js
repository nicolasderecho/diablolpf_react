import React from 'react';
import Home from './pages/Home';
import Runes from './pages/Runes';
import Header from './layout/Header'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Route exact path={'/'} render={() => <Home/> } />
        <Route exact path={'/runas'} render={() => <Runes /> } />
      </Router>
    </div>
  );
}

export default App;

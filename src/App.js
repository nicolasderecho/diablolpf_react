import React from 'react';
import Home from './pages/Home';
import Runes from './pages/Runes';
import Header from './layout/Header'
import { Router, Route, Switch } from "react-router-dom";
import Gems from './pages/Gems';
import Runewords from './pages/Runewords';
import CubeFormulas from './pages/CubeFormulas';
import NotFoundPage from './pages/NotFoundPage';
import UniqueItemsPage from './pages/UniqueItemsPage/UniqueItems';
import BaseItemsPage from './pages/BaseItemsPage/BaseItems';
import TipsPage from './pages/Tips';
import SetObjects from './pages/Sets/SetObjects';
import Test from './pages/Test';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <div>
      <Router history={history} >
        <Header/>
        <Switch>
          <Route exact path={'/'} render={() => <Home/> } />
          <Route exact path={'/runas'} render={() => <Runes /> } />
          <Route exact path={'/gemas'} render={() => <Gems /> } />
          <Route exact path={'/palabras_runicas'} render={() => <Runewords /> } />
          <Route exact path={'/cubo'} render={() => <CubeFormulas /> } />
          <Route exact path={'/items_unicos'} render={() => <UniqueItemsPage /> } />
          <Route exact path={'/items_base'} render={() => <BaseItemsPage /> } />
          <Route exact path={'/tips'} render={() => <TipsPage /> } />
          <Route exact path={'/sets'} render={() => <SetObjects /> } />
          <Route exact path={'/test'} render={() => <Test /> } />
          <Route render={() => <NotFoundPage />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

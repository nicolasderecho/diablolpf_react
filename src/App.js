import React, { useEffect } from 'react';
import Home from './pages/Home';
import Runes from './pages/Runes';
import Header from './layout/Header'
import { Router, Route, Switch } from "react-router-dom";
import Gems from './pages/Gems';
import Runewords from './pages/Runewords';
import CubeFormulas from './pages/CubeFormulas';
import NotFoundPage from './pages/NotFoundPage';
import UniqueItemsPage from './pages/UniqueItemsPage/UniqueItems';
import TipsPage from './pages/Tips';
import SetObjects from './pages/Sets/SetObjects';
import Test from './pages/Test';
import ReactGA from 'react-ga';
import { createBrowserHistory } from "history";
import {buildId} from "./shared/helpers/util";

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID, {
  gaOptions: {
    id: buildId()
  }
});

const history = createBrowserHistory();

history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

function App() {

  useEffect( () => {
    ReactGA.pageview(window.location.pathname);
  }, []);

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

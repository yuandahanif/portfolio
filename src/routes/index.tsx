import * as React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Navigation } from '../components';

import { Home, Page404, Project } from '../pages';

interface IRoutesProps {
}

const Routes: React.FunctionComponent<IRoutesProps> = (props) => {
  return (
    <Router>
      <Navigation />

      <Switch>
        <Route path="/project">
          <Project />
      </Route>
        
        <Route exact path="/" >
          <Home />
        </Route>

        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;

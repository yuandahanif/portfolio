import * as React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Navigation } from '../components';

import { Bio, Contact, Page404, Project, Skill } from '../pages';

interface IRoutesProps {
}

const Routes: React.FunctionComponent<IRoutesProps> = (props) => {
  return (
    <Router>
      <Navigation />

      <main>
        <Switch>
          <Route path="/skill">
            <Skill />
          </Route>

          <Route path="/project">
            <Project />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route exact path="/" >
            <Bio />
          </Route>

          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default Routes;

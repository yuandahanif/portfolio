import * as React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { Page404 } from '../pages';

interface IRoutesProps {
}

const Routes: React.FunctionComponent<IRoutesProps> = (props) => {
  return (
    <Router>

      <Switch>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;

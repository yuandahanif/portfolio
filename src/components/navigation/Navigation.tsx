import * as React from 'react';

import { Link } from "react-router-dom";

interface INavigationProps {
}

const Navigation: React.FunctionComponent<INavigationProps> = (props) => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
          <Link to="/project">
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;

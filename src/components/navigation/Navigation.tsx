import * as React from 'react';

import { Link } from "react-router-dom";

interface INavigationProps {
}

const Navigation: React.FunctionComponent<INavigationProps> = (props) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              bio
          </Link>
          </li>
          <li>
            <Link to="/skill">
              skills
          </Link>
          </li>
          <li>

            <Link to="/project">
              projects
          </Link>
          </li>
          <li>

            <Link to="/contact">
              contacts
          </Link>
          </li>
        </ul>
      </nav>
    </header>

  );
};

export default Navigation;

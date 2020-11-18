/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FunctionComponent, useCallback, useState } from 'react';
import Icon from '@mdi/react'
import { mdiDotsVertical, mdiClose } from '@mdi/js';

import { Link } from "react-router-dom";

interface INavigationProps {
}

const Navigation: FunctionComponent<INavigationProps> = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = useCallback(
    () => {
      setIsDrawerOpen(!isDrawerOpen);
    },
    [isDrawerOpen],
  )
  return (
    <header>
      <a href="#" className="drawer-open-button"
        onClick={toggleDrawer}>
        <Icon
          path={mdiDotsVertical}
          size={1}
          color="black"
        />
      </a>
      <nav className={isDrawerOpen ? 'active' : ''}>
        <ul>
          <li>
            <a href="#" className="drawer-close-button"
            onClick={toggleDrawer}>
              <Icon
                path={mdiClose}
                size={1}
                color="black"
              />
            </a>
          </li>
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

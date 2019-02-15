// @flow
import React from 'react';

import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import styles from './Header.css';
import grid from '../Grid/Grid.css';

type Props = {
  home: void,
  current: string,
  total: string,
};

const Header = ({ home, current, total }: Props) => (
  <header>
    <div className={grid.container}>
      <nav className={`${bootstrap.navbar} ${styles['navbar_no-padding']}`}>
        <a href="#" className={bootstrap['navbar-brand']} onClick={home}>JavaScript Quiz</a>
        <span className={bootstrap['navbar-text']}>
          {current}
          {' of '}
          {total}
        </span>
      </nav>
    </div>
  </header>
);

export default Header;

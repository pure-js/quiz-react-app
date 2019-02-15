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

const Header = (props: Props) => {
  const { home, current, total } = props;

  return (
    <header>
      <div className={grid.container}>
        <nav className={`${bootstrap.navbar} ${styles['navbar_no-padding']}`}>
          <button type="button" className={bootstrap['navbar-brand']} onClick={home}>JavaScript Quiz</button>
          <span className={bootstrap['navbar-text']}>
            {current}
            {' of '}
            {total}
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;

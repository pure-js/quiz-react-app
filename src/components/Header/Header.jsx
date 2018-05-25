// @flow
import React from 'react';
import classNames from 'classnames';

import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import styles from './Header.css';
import grid from '../../components/Grid/Grid.css';

type Props = {
  home: string,
  current: string,
  total: string,
};

const Header = (props: Props) => {
  const { home, current, total } = props;

  return (
    <header>
      <div className={grid.container}>
        <nav className={classNames(bootstrap.navbar, styles['navbar_no-padding'])}>
          <a href="#" className={bootstrap['navbar-brand']} onClick={home}>JavaScript Quiz</a>
          <span className={bootstrap['navbar-text']}>
            {current} of {total}
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;

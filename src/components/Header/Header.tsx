import React, { memo } from 'react';
import { Link } from 'wouter';

import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import styles from './Header.css';
import grid from '../Grid/Grid.css';

type IProps = {
  current: string;
  total: string;
};

function Header({ current, total }: IProps) {
  return (
    <header>
      <div className={grid.container}>
        <nav className={`${bootstrap.navbar} ${styles['navbar_no-padding']}`}>
          <Link href="/" className={bootstrap['navbar-brand']}>
            JavaScript Quiz
          </Link>
          <span className={bootstrap['navbar-text']}>
            {current}
            {' of '}
            {total}
          </span>
        </nav>
      </div>
    </header>
  );
}

export default memo(Header);

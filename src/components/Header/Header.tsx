import React, { memo } from 'react';
import { Link } from 'wouter';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import styles from './Header.css';
import grid from '../Grid/Grid.css';

type IProps = {
  current: string;
  total: string;
};

const Header = ({ current, total }: IProps) => (
  <header>
    <AppBar position="static" color="transparent">
      <div className={grid.container}>
        <nav className={`${styles['navbar_no-padding']}`}>
          <h1 className={styles['no-margin']}>
            <Link href="/" className={`${styles['navbar-override']}`}>
              JavaScript Quiz
            </Link>
          </h1>
          <Typography variant="caption">
            {current}
            {' of '}
            {total}
          </Typography>
        </nav>
      </div>
    </AppBar>
  </header>
);

export default memo(Header);

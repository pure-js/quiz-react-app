import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import bootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import styles from './Header.css';

const Header = (props) => {
  const { home, current, total } = props;

  return (
    <header>
      <div className={bootstrap.container}>
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

Header.propTypes = {
  home: PropTypes.func.isRequired,
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Header;

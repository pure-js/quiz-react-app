import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import bootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import buttons from '../../components/button.css';
import styles from './Home.css';
import grid from '../../components/Grid/Grid.css';

const Home = (props) => {
  const { exam, train } = props;

  return (
    <div>
      <div className={styles['arrow-right']} />
      <main className={grid.container}>
        <div>
          <div className={classNames(bootstrap['d-flex'], bootstrap['justify-content-center'])}>
            {/*<div className={bootstrap['btn-group']}></div>*/}
            <button
              id="exam"
              type="button"
              className={classNames(bootstrap.btn, bootstrap['btn-lg'], bootstrap['btn-dark'], bootstrap['mr-2'], buttons.btn_start)}
              onClick={exam}
            >Exam
            </button>
            <button
              id="train"
              type="button"
              className={classNames(bootstrap.btn, bootstrap['btn-lg'], bootstrap['btn-dark'], bootstrap['mr-2'], buttons.btn_start)}
              onClick={train}
            >Train
            </button>
            <button
              id="train-by-category"
              type="button"
              className={classNames(bootstrap.btn, bootstrap['btn-lg'], bootstrap['btn-dark'], buttons.btn_start)}
              onClick={train}
              disabled
            >Train by category
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

Home.propTypes = {
  exam: PropTypes.func.isRequired,
  train: PropTypes.func.isRequired,
};

export default Home;

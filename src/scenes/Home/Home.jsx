import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import bootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import buttons from '../../components/button.css';
import styles from './Home.css';

const Home = (props) => {
  const { exam, train } = props;

  return (
    <div>
      <div className={styles['arrow-right']} />
      <main className={styles['home-grid']}>
        <button
          id="exam"
          type="button"
          className={classNames(styles['exam-btn'], bootstrap.btn, bootstrap['btn-lg'], bootstrap['btn-dark'], bootstrap['mr-2'], buttons.btn_start)}
          onClick={exam}
        >Exam
        </button>
        <button
          id="train"
          type="button"
          className={classNames(styles['train-btn'], bootstrap.btn, bootstrap['btn-lg'], bootstrap['btn-dark'], bootstrap['mr-2'], buttons.btn_start)}
          onClick={train}
        >Train
        </button>
      </main>
    </div>
  );
};

Home.propTypes = {
  exam: PropTypes.func.isRequired,
  train: PropTypes.func.isRequired,
};

export default Home;

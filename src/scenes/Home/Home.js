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
      <main className={bootstrap.container}>
        <div id="first-screen" className={bootstrap.row}>
          <div className={bootstrap['col-12']}>
            <div className={classNames(bootstrap['d-flex'], bootstrap['justify-content-center'])}>
              <div className={bootstrap['btn-group']}>
                <button
                  id="exam"
                  type="button"
                  className={classNames(bootstrap.btn, bootstrap['btn-lg'], bootstrap['btn-info'], buttons.btn_start)}
                  onClick={exam}
                >Exam
                </button>
                <button
                  id="train"
                  type="button"
                  className={classNames(bootstrap.btn, bootstrap['btn-lg'], bootstrap['btn-info'], buttons.btn_start)}
                  onClick={train}
                >Train
                </button>
              </div>
            </div>
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

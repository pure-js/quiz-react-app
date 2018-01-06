import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.css';
import buttons from '../components/button.css';

const FinalResults = (props) => {
  const { userAnswers, tryAgain, returnHome } = props;

  return (
    <div>
      <main className={bootstrap.container}>
        <div className={bootstrap.row}>
          <div className={bootstrap['col-12']}>
            <h1 className={bootstrap['text-center']}>Best ever results!</h1>
            <p className={bootstrap['text-center']}>Your score is {userAnswers}</p>
          </div>
        </div>
        <div id="first-screen" className={bootstrap.row}>
          <div className={bootstrap['col-12']}>
            <div className={classNames(bootstrap['d-flex'], bootstrap['justify-content-center'])}>
              <div className={bootstrap['btn-group']}>
                <button
                  id="exam"
                  type="button"
                  className={classNames(bootstrap.btn, bootstrap['btn-lg'], bootstrap['btn-info'], buttons.btn_start)}
                  onClick={tryAgain}
                >Try again
                </button>
                <button
                  id="train"
                  type="button"
                  className={classNames(bootstrap.btn, bootstrap['btn-lg'], bootstrap['btn-info'], buttons.btn_start)}
                  onClick={returnHome}
                >Return to main page
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
FinalResults.propTypes = {
  userAnswers: PropTypes.arrayOf(PropTypes.any).isRequired,
  tryAgain: PropTypes.func.isRequired,
  returnHome: PropTypes.func.isRequired,
};

export default FinalResults;

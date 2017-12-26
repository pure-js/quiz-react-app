import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.css';
import buttons from './button.css';

const FinalResults = (props) => {
  const { results, returnHome } = props;

  return (
    <div>
      {/*<div className={bootstrap['arrow-right']} />*/}
      <main className={bootstrap.container}>
        <div className={bootstrap.row}>
          <div className={bootstrap['col-12']}>
            <h1 className={bootstrap['text-center']}>Best ever results!</h1>
            <p className={bootstrap['text-center']}>Your score is {results}</p>
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
                  disabled
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
  results: PropTypes.number.isRequired,
  returnHome: PropTypes.func.isRequired,
};

export default FinalResults;

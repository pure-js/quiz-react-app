// @flow
import React from 'react';
import classNames from 'classnames';

import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import buttons from '../components/button.css';
import grid from '../components/Grid/Grid.css';

type Props = {
  userAnswers: Array<string>,
  tryAgain: boolean,
  returnHome: boolean,
};

const FinalResults = (props: Props) => {
  const { userAnswers, tryAgain, returnHome } = props;

  return (
    <>
      <main className={grid.container}>
        <div>
          <h1 className={bootstrap['text-center']}>
            Your results
          </h1>
          <p className={bootstrap['text-center']}>
            Correct answers:
            {userAnswers}
             from 20
          </p>
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
                >
                  Try again
                </button>
                <button
                  id="train"
                  type="button"
                  className={classNames(bootstrap.btn, bootstrap['btn-lg'], bootstrap['btn-info'], buttons.btn_start)}
                  onClick={returnHome}
                >
                  Return to main page
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default FinalResults;

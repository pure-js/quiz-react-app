import React from 'react';
import { Link } from 'react-router-dom';

import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import buttons from '../components/button.css';
import grid from '../components/Grid/Grid.css';

// type Props = {
//   userAnswers: Array<string>,
// };

const FinalResults = ({ userAnswers }) => (
  <>
    <main className={grid.container}>
      <div>
        <h1 className={bootstrap['text-center']}>
          Your results
        </h1>
        <p className={bootstrap['text-center']}>
          Correct answers:
          {`${userAnswers.correct} from ${userAnswers.total}`}
        </p>
      </div>
      <div id="first-screen" className={bootstrap.row}>
        <div className={bootstrap['col-12']}>
          <div className={`${bootstrap['d-flex']} ${bootstrap['justify-content-center']}`}>
            <div className={bootstrap['btn-group']}>
              <Link
                id="exam"
                className={`${bootstrap.btn} ${bootstrap['btn-lg']} ${bootstrap['btn-info']} ${buttons.btn_start}`}
                to="/exam"
              >
                Try again
              </Link>
              <Link
                id="train"
                className={`${bootstrap.btn} ${bootstrap['btn-lg']} ${bootstrap['btn-info']} ${buttons.btn_start}`}
                to="/"
              >
                Return to main page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default FinalResults;

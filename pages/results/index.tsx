import React, { memo } from 'react';
import { Link } from 'wouter';

import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import buttons from '../../src/components/button.css';
import grid from '../../src/components/Grid/Grid.css';

type IPropsFinalResults = {
  userAnswers: {
    correct: number;
    total: number;
  };
};

const FinalResults: React.FC<IPropsFinalResults> = ({
  userAnswers,
}: IPropsFinalResults) => (
  <>
    <main className={grid.container}>
      <div>
        <h1 className={bootstrap['text-center']}>Your results</h1>
        <p className={bootstrap['text-center']}>
          Correct answers:
          {`${userAnswers.correct} from ${userAnswers.total}`}
        </p>
      </div>
      <div id="first-screen" className={bootstrap.row}>
        <div className={bootstrap['col-12']}>
          <div
            className={`${bootstrap['d-flex']} ${bootstrap['justify-content-center']}`}
          >
            <div className={bootstrap['btn-group']}>
              <Link
                id="exam"
                className={`${bootstrap.btn} ${bootstrap['btn-lg']} ${bootstrap['btn-info']} ${buttons.btn_start}`}
                href="/exam"
              >
                Try again
              </Link>
              <Link
                id="train"
                className={`${bootstrap.btn} ${bootstrap['btn-lg']} ${bootstrap['btn-info']} ${buttons.btn_start}`}
                href="/"
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

export default memo(FinalResults);

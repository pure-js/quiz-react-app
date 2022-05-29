import React, { memo } from 'react';
import { Link } from 'wouter';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import buttons from '../components/button.css';
import grid from '../components/Grid/Grid.css';

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
        <Typography variant="h1" align="center">
          Your results
        </Typography>
        <Typography variant="caption" align="center">
          Correct answers:
          {`${userAnswers.correct} from ${userAnswers.total}`}
        </Typography>
      </div>
      <Grid container id="first-screen">
        <Grid item xs={12}>
          <div className={`${buttons.btn_centre}`}>
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              <Button
                id="exam"
                className={`${buttons.btn_start}`}
                component={Link}
                href="/exam"
              >
                Try again
              </Button>
              <Button
                id="train"
                className={`${buttons.btn_start}`}
                component={Link}
                href="/"
              >
                Return to main page
              </Button>
            </ButtonGroup>
          </div>
        </Grid>
      </Grid>
    </main>
  </>
);

export default memo(FinalResults);

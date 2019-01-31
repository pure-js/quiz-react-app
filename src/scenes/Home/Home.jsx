// @flow
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import FlashOnIcon from '@material-ui/icons/FlashOn';

import styles from './Home.css';

type Props = {
  exam: boolean,
};

const Home = (props: Props) => {
  const { exam } = props;

  return (
    <>
      <div className={styles['arrow-right']} />
      <main className={styles['home-grid']}>
        <Typography component="h1" variant="h3" gutterBottom>
          Test your JavaScript skills
        </Typography>
        <Fab
          variant="extended"
          color="primary"
          size="large"
          id="exam"
          onClick={exam}
        >
          <FlashOnIcon />
          Exam
        </Fab>
      </main>
    </>
  );
};

export default Home;

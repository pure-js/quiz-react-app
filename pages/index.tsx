/* eslint-disable react/function-component-definition */

import React, { memo } from 'react';
import { Link } from 'wouter';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import FlashOnIcon from '@mui/icons-material/FlashOn';

import styles from './Home.css';

const Home: React.FC = () => (
  <>
    <div className={styles['arrow-right']} />
    <main className={styles['home-grid']}>
      <Typography component="h1" variant="h3" gutterBottom>
        Test your JavaScript skills
      </Typography>
      <Fab
        component={Link}
        to="/exam"
        variant="extended"
        color="primary"
        size="large"
      >
        <FlashOnIcon />
        Exam
      </Fab>
    </main>
  </>
);

export default memo(Home);

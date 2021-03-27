/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Route } from 'wouter';
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from '../scenes/Home/Home.tsx';
import Exam from '../scenes/Exam/Exam';
import FinalResults from '../scenes/FinalResults.tsx';

const defaultAnsers = {
  correct: 146,
  total: 100,
};

const App: React.FC = () => (
  <>
    <CssBaseline />
    <Route path="/" component={Home} />
    <Route path="/exam">
      <Exam results={() => {}} />
    </Route>
    <Route path="/results">
      <FinalResults userAnswers={defaultAnsers} />
    </Route>
  </>
);

export default App;

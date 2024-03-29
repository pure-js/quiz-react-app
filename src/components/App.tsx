/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Switch, Route } from 'wouter';
import CssBaseline from '@mui/material/CssBaseline';
import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
} from '@mui/material/styles';

import Home from '../../pages/index';
import Exam from '../../pages/exam/index';
import FinalResults from '../../pages/results/index';

const defaultAnsers = {
  correct: 146,
  total: 100,
};

const theme = createTheme();

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/exam">
            <Exam results={() => {}} />
          </Route>
          <Route path="/results">
            <FinalResults userAnswers={defaultAnsers} />
          </Route>
          <Route path="/:rest*">
            {(params) => `404, Sorry the page ${params.rest} does not exist!`}
          </Route>
        </Switch>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;

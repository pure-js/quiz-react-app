/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Switch, Route } from 'wouter';
import CssBaseline from '@mui/material/CssBaseline';
import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
} from '@mui/material/styles';

import Home from '../scenes/Home/Home';
import Exam from '../scenes/Exam/Exam';
import FinalResults from '../scenes/FinalResults';

const defaultAnsers = {
  correct: 146,
  total: 100,
};

const theme = createTheme();

const App: React.FC = () => (
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

export default App;

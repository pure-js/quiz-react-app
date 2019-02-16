// @flow
import React from 'react';
import { Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from '../scenes/Home/Home';
import Exam from '../scenes/Exam/Exam';
import FinalResults from '../scenes/FinalResults';

const App = () => (
  <>
    <CssBaseline />
    <Route path="/" exact component={Home} />
    <Route path="/exam" exact component={Exam} />
    <Route path="/results" exact component={FinalResults} />
  </>
);

export default App;

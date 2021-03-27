import React from 'react';
import { Route } from 'wouter';
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from '../scenes/Home/Home.tsx';
import Exam from '../scenes/Exam/Exam';
import FinalResults from '../scenes/FinalResults.tsx';

const App: React.FC = () => (
  <>
    <CssBaseline />
    <Route path="/" component={Home} />
    <Route path="/exam" component={Exam} />
    <Route path="/results" component={FinalResults} />
  </>
);

export default App;

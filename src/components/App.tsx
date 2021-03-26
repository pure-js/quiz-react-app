import React from 'react';
import { Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from '../scenes/Home/Home.tsx';
import Exam from '../scenes/Exam/Exam';
import FinalResults from '../scenes/FinalResults.tsx';

const App: React.FC = () => (
  <>
    <CssBaseline />
    <Route path="/" exact component={Home} />
    <Route path="/exam" exact component={Exam} />
    <Route path="/results" exact component={FinalResults} />
  </>
);

export default App;

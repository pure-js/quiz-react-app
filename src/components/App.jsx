// @flow
import React, { useState } from 'react';
import Loadable from 'react-loadable';
import CssBaseline from '@material-ui/core/CssBaseline';
import Loading from './Loading/Loading';

const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: "Home" */ '../scenes/Home/Home'),
  loading: Loading,
});

const LoadableExam = Loadable({
  loader: () => import(/* webpackChunkName: "Exam" */ '../scenes/Exam/Exam'),
  loading: Loading,
});

const LoadableFinalResults = Loadable({
  loader: () => import(/* webpackChunkName: "FinalResults" */ '../scenes/FinalResults'),
  loading: Loading,
});

let userAnswers = {
  correct: 0,
  total: 0,
};

const App = () => {
  const [home, setHome] = useState(true);
  const [exam, setExam] = useState(false);
  const [results, setResults] = useState(false);

  let screen;
  if (home) {
    screen = (
      <LoadableHome
        exam={() => {
          setHome(false);
          setExam(true);
          setResults(false);
        }}
      />
    );
  } else if (exam) {
    screen = (
      <LoadableExam
        home={() => {
          setHome(true);
          setExam(false);
          setResults(false);
        }}
        results={(correctAnswers) => {
          userAnswers = correctAnswers;
          setHome(false);
          setExam(false);
          setResults(true);
        }}
      />
    );
  } else if (results) {
    screen = (
      <LoadableFinalResults
        userAnswers={userAnswers}
        tryAgain={() => {
          setHome(false);
          setExam(true);
          setResults(false);
        }}
        returnHome={() => {
          setHome(true);
          setExam(false);
          setResults(false);
        }}
      />
    );
  }

  return (
    <>
      <CssBaseline />
      {screen}
    </>
  );
};

export default App;

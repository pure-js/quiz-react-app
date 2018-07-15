// @flow
import React, { Component } from 'react';
import Loadable from 'react-loadable';

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

type Props = {};

type State = {
  home: boolean,
  exam: boolean,
  results: boolean,
};

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      home: true,
      exam: false,
      results: false,
    };

    this.userAnswers = [];
  }

  handleExamClick = () => {
    this.setState({
      home: false,
      exam: true,
      results: false,
    });
  };

  handleCloseExamClick = () => {
    this.setState({
      home: true,
      exam: false,
    });
  };

  handleShowResults = () => {
    this.setState({
      home: false,
      exam: false,
      results: true,
    });
  };

  returnHome = () => {
    this.setState({
      home: true,
      exam: false,
      results: false,
    });
  };

  render() {
    let screen;
    const { home, exam, results } = this.state;
    if (home) {
      screen = (
        <LoadableHome
          exam={this.handleExamClick}
        />
      );
    }
    if (exam) {
      screen = (
        <LoadableExam
          home={this.handleCloseExamClick}
          results={this.handleShowResults}
          uss={this.userAnswers}
        />
      );
    }
    if (results) {
      screen = (
        <LoadableFinalResults
          userAnswers={this.userAnswers}
          tryAgain={this.handleExamClick}
          returnHome={this.returnHome}
        />
      );
    }

    return (
      <div>
        {screen}
      </div>
    );
  }
}

export default App;

// @flow
import React, { Component } from 'react';
import Loadable from 'react-loadable';

import Loading from '../components/Loading/Loading';

const LoadableHome = Loadable({
  loader: () => import('../scenes/Home/Home'),
  loading: Loading,
});

const LoadableExam = Loadable({
  loader: () => import('../scenes/Exam/Exam'),
  loading: Loading,
});

const LoadableFinalResults = Loadable({
  loader: () => import('../scenes/FinalResults'),
  loading: Loading,
});

type Props = {};

type State = {
  home: boolean,
  exam: boolean,
  train: boolean,
  results: boolean,
};

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      home: true,
      exam: false,
      train: false,
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

  handleTrainClick = () => {
    this.setState({
      home: false,
      train: true,
    });
  };

  handleCloseExamClick = () => {
    this.setState({
      home: true,
      exam: false,
      train: false,
    });
  };

  handleShowResults = () => {
    this.setState({
      home: false,
      exam: false,
      train: false,
      results: true,
    });
  };

  returnHome = () => {
    this.setState({
      home: true,
      exam: false,
      train: false,
      results: false,
    });
  };

  render() {
    let screen;
    if (this.state.home) {
      screen = (
        <LoadableHome
          exam={this.handleExamClick}
          train={this.handleTrainClick}
        />
      );
    }
    if (this.state.exam) {
      screen = (
        <LoadableExam
          home={this.handleCloseExamClick}
          results={this.handleShowResults}
          uss={this.userAnswers}
        />
      );
    }
    if (this.state.train) {
      screen = (
        <LoadableExam
          home={this.handleCloseExamClick}
          results={this.handleShowResults}
          uss={this.userAnswers}
        />
      );
    }
    if (this.state.results) {
      screen = (
        <LoadableFinalResults
          userAnswers={this.userAnswers}
          tryAgain={this.handleExamClick}
          returnHome={this.returnHome}
        />
      );
    }

    return (
      <div>{screen}</div>
    );
  }
}

export default App;

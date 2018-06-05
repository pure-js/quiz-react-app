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
    if (this.state.home) {
      screen = (
        <LoadableHome
          exam={this.handleExamClick}
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

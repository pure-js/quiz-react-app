import React, { Component } from 'react';

import Home from '../scenes/Home/Home';
import Exam from '../scenes/Exam/Exam';
import FinalResults from '../scenes/FinalResults';

import fireStore from '../services/getQuestions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      home: true,
      exam: false,
      train: false,
      results: false,
    };

    this.userAnswers = [];
    this.handleExamClick = this.handleExamClick.bind(this);
    this.handleTrainClick = this.handleTrainClick.bind(this);
    this.handleCloseExamClick = this.handleCloseExamClick.bind(this);
    this.handleShowResults = this.handleShowResults.bind(this);
    this.returnHome = this.returnHome.bind(this);
    fireStore().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc.data().value);
      });
    });
  }

  handleExamClick() {
    this.setState({
      home: false,
      exam: true,
      results: false,
    });
  }

  handleTrainClick() {
    this.setState({
      home: false,
      train: true,
    });
  }

  handleCloseExamClick() {
    this.setState({
      home: true,
      exam: false,
      train: false,
    });
  }

  handleShowResults() {
    this.setState({
      home: false,
      exam: false,
      train: false,
      results: true,
    });
  }

  returnHome() {
    this.setState({
      home: true,
      exam: false,
      train: false,
      results: false,
    });
  }

  render() {
    let screen;
    if (this.state.home) {
      screen = (
        <Home
          exam={this.handleExamClick}
          train={this.handleTrainClick}
        />
      );
    }
    if (this.state.exam) {
      screen = (
        <Exam
          home={this.handleCloseExamClick}
          results={this.handleShowResults}
          uss={this.userAnswers}
        />
      );
    }
    if (this.state.train) {
      screen = (
        <Exam
          home={this.handleCloseExamClick}
          results={this.handleShowResults}
          uss={this.userAnswers}
        />
      );
    }
    if (this.state.results) {
      screen = (
        <FinalResults
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

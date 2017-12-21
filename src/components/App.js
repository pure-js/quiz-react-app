import React, { Component } from 'react';

import Exam from './Exam';
import hasScrollbar from "./textarea/hasScrollbar";
import FirstScreen from "./FirstScreen";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exam: false,
      train: false,
    };
  }

  handleExamClick = () => {
    this.setState({exam: true});
  };

  handleCloseExamClick = () => {
    this.setState({exam: false});
  };

  static addRow(elementId) {
    if (hasScrollbar(elementId)) {
      const el = document.getElementById(elementId);
      el.rows = Number(el.rows) + 1;
    }
  }

  static updateProgressBar(answers) {
    document.getElementById('progress-success').style.width = `${answers.correct}%`;
    document.getElementById('progress-failure').style.width = `${answers.wrong}%`;
  }

  render() {
    let screen;
    if (this.state.exam) {
      screen = <Exam action={this.handleCloseExamClick}/>;
    } else {
      screen = <FirstScreen action={this.handleExamClick}/>;
    }

    return (
      <div>{screen}</div>
    );
  }
}

export default App;

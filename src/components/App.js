import React, { Component } from 'react';

import Exam from './Exam';
import Home from "./Home";

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

  render() {
    let screen;
    if (this.state.exam) {
      screen = <Exam action={this.handleCloseExamClick}/>;
    } else {
      screen = <Home action={this.handleExamClick}/>;
    }

    return (
      <div>{screen}</div>
    );
  }
}

export default App;

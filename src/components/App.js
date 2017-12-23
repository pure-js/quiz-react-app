import React, { Component } from 'react';

import Exam from './Exam';
import Home from "./Home";
import FinalResults from './FinalResults';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      home: true,
      exam: false,
      train: false,
      results: false,
    };
  }

  handleExamClick = () => {
    this.setState({exam: true});
  };

  handleCloseExamClick = () => {
    this.setState({exam: false});
  };

  handleShowResults = () => {
    this.setState({
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
    if (this.state.home) screen = <Home action={this.handleExamClick}/>;
    if (this.state.exam) screen = <Exam action={this.handleCloseExamClick} results={this.handleShowResults}/>;
    if (this.state.results) screen = <FinalResults results={345435} returnHome={this.returnHome}/>;

    return (
      <div>{screen}</div>
    );
  }
}

export default App;

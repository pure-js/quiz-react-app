import React, { Component } from 'react';

import shuffleArray from './shuffleArray';
import questions from '../../static/questions';
import answers from '../../static/answers';
import ProgressBar from './ProgressBar';
import Code from './Code';

class Exam extends Component {
  constructor(props) {
    super(props);

    this.iteration = 0;
    this.questions = shuffleArray(questions);
    this.questionsLength = questions.length;
    this.maxIteration = this.questionsLength - 1;
    this.failure = 0;
    this.success = 0;

    this.state = {
      userAnswer: '',
      question: this.questions[0],
      disabled: false,
      success: {
        width: 0 + '%'
      },
      failure: {
        width: 0 + '%'
      },
      overall: this.questions.length,
    };

    this.state.answer = answers.find(answer => answer.name === this.state.question.name);
  }

  handleAnyAnswer = () => {
    if (this.iteration < this.maxIteration) {
      this.iteration = this.iteration + 1;
      this.setState({
        question: this.questions[this.iteration]
      });
      this.setState({
        answer: answers.find(answer => answer.name === this.state.question.name),
      });
      this.success = this.success + 1;
    } else {
      this.setState({
        disabled: true
      });
    }
  };

  handleNotAnswer = () => {
    this.failure = this.failure + 1;
    this.setState({
      failure: {
        width: (this.failure * 100) / this.questionsLength + '%',
      },
    });
    this.handleAnyAnswer();
  };

  answerIsCorrect = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

  handleAnswer = () => {
    console.log(this.state.userAnswer, this.state.answer.value);
    if(this.answerIsCorrect(this.state.userAnswer, this.state.answer.value)) {
      this.handleAnyAnswer();
      this.success = this.success + 1;
      this.setState({
        success: {
          width: (this.success * 100) / this.questionsLength + '%',
        },
      });
    } else {
      this.handleNotAnswer();
    }
  };

  handleAnswerChange = (event) => {
    this.setState({userAnswer: event.target.value});
  };

  render() {
    return (
      <div>
        <header>
          <div className="container">
            <nav className="navbar navbar_no-padding">
              <a href="#" className="navbar-brand" onClick={this.props.action}>JavaScript Quiz</a>
            </nav>
          </div>
          <ProgressBar success={this.state.success} failure={this.state.failure} overall={this.state.overall}/>
        </header>
        <main className="container">
          <div id="quiz-screen" className="row">
            <button type="button" onClick={this.props.action} className="close btn_cursor" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <Code question={this.state.question.value}/>
            <div className="col-12">
              <form>
                <div className="form-group">
                  <label htmlFor="console-output">Web Console Output:</label>
                  <textarea id="console-output" onKeyPress={this.addRow} value={this.state.userAnswer} onChange={this.handleAnswerChange} rows="2" autoFocus={true} className="form-control console-output"></textarea>
                </div>
                <div className="btn-group">
                  <button id="answer" onClick={this.handleAnswer} disabled={this.state.disabled} type="button" className="btn btn-info btn_cursor">Answer</button>
                  <button id="next-quiz" onClick={this.handleNotAnswer} disabled={this.state.disabled} type="button" className="btn btn-light btn_cursor">I don't know</button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Exam;

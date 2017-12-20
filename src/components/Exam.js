import React, { Component } from 'react';
import Prism from 'prismjs';

import shuffleArray from './shuffleArray';
import questions from '../../static/questions';
import answers from '../../static/answers';
import ProgressBar from './ProgressBar';

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

  handleNotAnswer = () => {
    this.failure = this.failure + 1;
    this.setState({
      failure: {
        width: (this.failure * 100) / this.questionsLength + '%' || 0 + '%'
      },
    });
    if (this.iteration < this.maxIteration) {
      this.iteration = this.iteration + 1;
      this.setState({
        question: this.questions[this.iteration],
      });
    } else {
      this.setState({
        disabled: true
      });
    }
  };

  answerIsCorrect = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

  handleAnswer = () => {
    if(this.answerIsCorrect(this.state.userAnswer, this.state.answer)) {
      if (this.iteration < this.maxIteration) {
        this.iteration = this.iteration + 1;
        this.setState({
          question: this.questions[this.iteration]
        });
      } else {
        this.setState({
          disabled: true
        });
      }
    } else {
      this.handleNotAnswer();
    }
  };

  handleAnswerChange = () => {
    this.setState({userAnswer: event.target.value});
  };


  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

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
            <div className="col-12 bg-solarized">
              <pre className="language_custom">
                <code id="code" className="language-javascript">
                  {this.state.question.value}
                </code>
              </pre>
            </div>
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

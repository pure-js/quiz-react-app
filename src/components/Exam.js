import React, { Component } from 'react';
import classNames from 'classnames';

import shuffleArray from './shuffleArray';
import questions from '../../static/questions';
import answers from '../../static/answers';
import ProgressBar from './ProgressBar';
import Code from './Code';
import UserAnswer from './UserAnswer';

import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.css';
import buttons from './button.css';
import styles from './Exam.css';

class Exam extends Component {
  constructor(props) {
    super(props);

    this.iteration = 0;
    this.questions = shuffleArray(questions);
    this.questionsLength = questions.length;
    this.maxIteration = this.questionsLength - 1;
    this.successCounter = 0;
    this.failureCounter = 0;

    this.state = {
      userAnswer: '',
      question: this.questions[0],
      overall: this.questions.length,
    };

    this.success = {
      width: 0 + '%'
    };

    this.failure = {
      width: 0 + '%'
    };

    this.answer = answers.find(answer => answer.name === this.state.question.name);
  }

  addAnswer = (answer, callback) => {
    this.setState({
      userAnswer: answer,
    }, callback);
    this.answer = answers.find(answer => answer.name === this.state.question.name);
  };

  handleAnyAnswer = () => {
    if (this.iteration < this.maxIteration) {
      this.iteration = this.iteration + 1;
      this.setState({
        question: this.questions[this.iteration]
      });
      this.answer = answers.find(answer => answer.name === this.state.question.name);
    } else {
      if (this.state.question === this.questions[this.questionsLength - 1]) {
        this.props.results();
      }
    }
  };

  handleNotAnswer = () => {
    this.failureCounter += 1;
    this.failure = {
      width: (this.failureCounter * 100) / this.questionsLength + '%',
    };
    this.handleAnyAnswer();
  };

  answerIsCorrect = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

  handleAnswer = () => {
    if(this.answerIsCorrect(this.state.userAnswer, this.answer.value)) {
      this.successCounter += 1;
      this.success = {
        width: (this.successCounter * 100) / this.questionsLength + '%',
      };
      this.handleAnyAnswer();
    } else {
      this.handleNotAnswer();
    }
  };

  render() {
    return (
      <div>
        <header>
          <div className={bootstrap.container}>
            <nav className={classNames(bootstrap.navbar, styles['navbar_no-padding'])}>
              <a href="#" className={bootstrap['navbar-brand']} onClick={this.props.action}>JavaScript Quiz</a>
            </nav>
          </div>
          <ProgressBar success={this.success} failure={this.failure} overall={this.state.overall}/>
        </header>
        <main className={bootstrap.container}>
          <div id="quiz-screen" className={bootstrap.row}>
            <button type="button" onClick={this.props.action} className={classNames(bootstrap.close, buttons.btn_cursor)} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <Code question={this.state.question.value}/>
            <div className={bootstrap['col-12']}>
              <UserAnswer userAnswer={this.addAnswer} handleAnswer={this.handleAnswer}/>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Exam;

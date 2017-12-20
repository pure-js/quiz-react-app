import React, { Component } from 'react';

import Exam from './Exam';
import showNextQuiz from './showNextQuiz';
import questions from '../../static/questions';
import current from './current';
import domElements from './domElements';
import shuffleArray from './shuffleArray';
import hasScrollbar from "./textarea/hasScrollbar";
import checkAnswer from "./checkAnswer";
import progress from "./progress";
import showResult from "./showResult";
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

  // componentDidMount() {
  //   if ('serviceWorker' in navigator) {
  //     navigator.serviceWorker.register('sw.min.js')
  //       .then((registration) => {
  //         console.log('Registered:', registration);
  //       })
  //       .catch((error) => {
  //         console.log('Registration failed: ', error);
  //       });
  //   }
  // }

  static exam() {
    current.quiz = shuffleArray(questions);
    showNextQuiz(questions);
    document.getElementById('first-screen').classList.add('d-none');
    domElements.$exam.removeEventListener('click', () => {});
  }

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

  static toAnswer() {
    const userAnswer = domElements.$textArea.value;
    const answer = checkAnswer(userAnswer, current.answer.value);

    if (checkAnswer) {
      progress.correctAnswer = answer;
    } else {
      progress.wrongAnswer = answer;
    }

    showResult(answer);
    this.updateProgressBar(progress.percentageOverall);
  }

  render() {
    const isExam = this.state.exam;

    let screen;
    if (isExam) {
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

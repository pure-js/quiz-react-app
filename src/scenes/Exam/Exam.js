import React, { Component } from 'react';

import shuffleArray from '../../services/shuffleArray';
import getAnsweredQuestions from '../../services/getAnsweredQuestions';
import questions from '../../../static/questions';
import answers from '../../../static/answers';
import Code from '../../components/Code/Code';
import Textarea from '../../components/Textarea/Textarea';
import Header from '../../components/Header/Header';
import ProgressBar from '../../components/ProgressBar';

import grid from '../../components/Grid/Grid.css';

class Exam extends Component {
  constructor(props) {
    super(props);

    this.iteration = 0;
    this.questions = shuffleArray(getAnsweredQuestions(questions, answers));
    this.questionsLength = this.questions.length;
    this.maxIteration = this.questionsLength - 1;
    this.successCounter = 0;
    this.failureCounter = 0;
    this.userAnswer = '';
    this.success = {
      width: 0 + '%'
    };
    this.failure = {
      width: 0 + '%'
    };

    this.state = {
      question: this.questions[0],
      sek: this.props.uss,
    };
    this.answer = answers.find(answer => answer.name === this.state.question.name);
    this.userAnswers = [];
  }

  addAnswer = (answer) => {
    this.userAnswer = answer;
    this.answer = answers.find(answer => answer.name === this.state.question.name);
    this.handleAnswer();
  };

  handleAnyAnswer = () => {
    if (this.iteration < this.maxIteration) {
      this.userAnswers.push({
        name: this.state.question.name,
        answer: this.userAnswer,
      });
      this.iteration = this.iteration + 1;
      this.setState({
        question: this.questions[this.iteration]
      });
      this.answer = answers.find(answer => answer.name === this.state.question.name);
    } else {
      if (this.state.question === this.questions[this.questionsLength - 1]) {
        this.setState({
          sek: this.userAnswers,
        });
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
    if(this.answerIsCorrect(this.userAnswer, this.answer.value)) {
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
        <Header home={this.props.home} current={this.iteration + 1} total={this.questionsLength}/>
        <ProgressBar success={this.success} failure={this.failure} overall={this.questionsLength}/>
        <main className={grid.container}>
          <Code question={this.state.question.value}/>
          <div>
            <Textarea userAnswer={this.addAnswer} handleAnswer={this.handleAnswer}/>
          </div>
        </main>
      </div>
    )
  }
}

export default Exam;

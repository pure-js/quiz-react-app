// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import Loadable from 'react-loadable';

import { functions } from '../../services/fireStoreService';
import getRandomDocument from '../../services/getQuestions';

import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';
import ProgressBar from '../../components/ProgressBar';

import grid from '../../components/Grid/Grid.css';
import Loading from '../../components/Loading/Loading';

const LoadableCode = Loadable({
  loader: () => import(/* webpackChunkName: "Code" */ '../../components/Code/Code'),
  loading: Loading,
});

type Props = {
  home: void,
  results: void,
};

type Question = {
  name: string,
  category: string,
  value: string,
};

type State = {
  question: Question,
};

class Exam extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.iteration = 0;
    this.questionsLength = 0;
    this.maxIteration = this.questionsLength - 1;
    this.successCounter = 0;
    this.failureCounter = 0;
    this.userAnswer = '';
    this.success = {
      width: '0%',
    };
    this.failure = {
      width: '0%',
    };

    this.state = {
      question: {
        name: '',
        category: '',
        value: '',
      },
    };
    this.userAnswers = [];
  }

  componentDidMount() {
    this.displayQuestion();
  }

  displayQuestion = () => {
    getRandomDocument('questions')
      .then(({ data }) => {
        if (data) {
          this.setState({
            question: data,
          });
        } else {
          console.error('No such document!');
        }
      }).catch((error) => {
        console.log('Error getting document:', error);
      });
  };

  handleNotAnswer = () => {
    this.failureCounter += 1;
    const percent = (this.failureCounter * 100) / this.questionsLength;
    this.failure = {
      width: `${percent}%`,
    };

    this.handleAnyAnswer();
  };

  addAnswer = (answer: string): void => {
    const isCorrectAnswer = functions.httpsCallable('isCorrectAnswer');
    console.log(answer, 'answer');
    isCorrectAnswer(answer)
      .then((result) => {
        this.displayQuestion();
        // Read result of the Cloud Function.
        console.log(result.data.correct);
      });
  };

  render() {
    const { home } = this.props;
    const { question } = this.state;
    return (
      <div>
        <Header home={home} current={this.iteration + 1} total={this.questionsLength} />
        <ProgressBar success={this.success} failure={this.failure} overall={this.questionsLength} />
        <section className={classNames(grid.container, grid['container_mobile-no-padding'])}>
          <LoadableCode question={question.value} />
        </section>
        <section className={grid.container}>
          <Form userAnswer={this.addAnswer} />
        </section>
      </div>
    );
  }
}

export default Exam;

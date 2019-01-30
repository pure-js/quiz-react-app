// @flow
import React, { PureComponent } from 'react';
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

class Exam extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.iteration = 1;
    this.questionsLength = 5;
    this.successCounter = 0;
    this.failureCounter = 0;
    this.success = {
      width: '0%',
    };
    this.failure = {
      width: '0%',
    };

    this.state = {
      question: {
        id: '',
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
        console.error('Error getting document:', error);
      });
  };

  upProgressBar = (isCorrect) => {
    if (isCorrect) {
      this.successCounter += 1;
      const percent = (this.successCounter * 100) / this.questionsLength;
      this.success = {
        width: `${percent}%`,
      };
    } else {
      this.failureCounter += 1;
      const percent = (this.failureCounter * 100) / this.questionsLength;
      this.failure = {
        width: `${percent}%`,
      };
    }
  };

  addAnswer = (answer: string): void => {
    const isCorrectAnswer = functions.httpsCallable('isCorrectAnswer');
    isCorrectAnswer(answer)
      .then((result) => {
        this.upProgressBar(result.data.correct);

        if (this.iteration === this.questionsLength) {
          const { results } = this.props;
          results({
            correct: this.successCounter,
            total: this.questionsLength,
          });
        } else {
          this.displayQuestion();
          this.iteration += 1;
        }
      });
  };

  render() {
    const { home } = this.props;
    const { question } = this.state;
    return (
      <>
        <Header home={home} current={this.iteration} total={this.questionsLength} />
        <ProgressBar success={this.success} failure={this.failure} overall={this.questionsLength} />
        <section className={classNames(grid.container, grid['container_mobile-no-padding'])}>
          <LoadableCode question={question.value} />
        </section>
        <section className={grid.container}>
          <Form userAnswer={this.addAnswer} />
        </section>
      </>
    );
  }
}

export default Exam;

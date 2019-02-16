// @flow
import React, { useState, useEffect } from 'react';
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

let iteration = 1;
let questionsLength = 5;
let successCounter = 0;
let failureCounter = 0;
let success = {
  width: '0%',
};
let failure = {
  width: '0%',
};

let userAnswers = [];

const displayQuestion = (callback) => {
  getRandomDocument('questions')
    .then(({ data }) => {
      if (data) {
        callback(data);
      } else {
        console.error('No such document!');
      }
    }).catch((error) => {
      console.error('Error getting document:', error);
    });
};

const upProgressBar = (isCorrect) => {
  if (isCorrect) {
    successCounter += 1;
    const percent = (successCounter * 100) / questionsLength;
    success = {
      width: `${percent}%`,
    };
  } else {
    failureCounter += 1;
    const percent = (failureCounter * 100) / questionsLength;
    failure = {
      width: `${percent}%`,
    };
  }
};

const addAnswer = (answer: string, questionCallback: void, resultsCallback: void): void => {
  const isCorrectAnswer = functions.httpsCallable('isCorrectAnswer');
  isCorrectAnswer(answer)
    .then((result) => {
      upProgressBar(result.data.correct);

      if (iteration === questionsLength) {
        resultsCallback({
          correct: successCounter,
          total: questionsLength,
        });
      } else {
        displayQuestion(questionCallback);
        iteration += 1;
      }
    });
};

const Exam = ({ home, results }: Props) => {
  const [question, setQuestion] = useState({
    id: '',
    name: '',
    category: '',
    value: '',
  });

  useEffect(() => {
    displayQuestion(setQuestion);
  }, []);

  return (
    <>
      <Header home={home} current={iteration} total={questionsLength} />
      <ProgressBar success={success} failure={failure} overall={questionsLength} />
      <section className={`${grid.container} ${grid['container_mobile-no-padding']}`}>
        <LoadableCode question={question.value} />
      </section>
      <section className={grid.container}>
        <Form userAnswer={(answer) => addAnswer(answer, setQuestion, results)} />
      </section>
    </>
  );
};

export default Exam;

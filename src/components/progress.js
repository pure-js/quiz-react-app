import current from './current';

const progress = {
  answers: {
    wrong: [],
    correct: [],
  },

  set wrongAnswer(answer) {
    this.answers.wrong.push(answer);
  },

  set correctAnswer(answer) {
    this.answers.correct.push(answer);
  },

  get percentageOverall() {
    return {
      wrong: (this.answers.wrong.length * 100) / current.quiz.length,
      correct: (this.answers.correct.length * 100) / current.quiz.length,
    };
  },
};

export default progress;

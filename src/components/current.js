import answers from '../../static/answers';

const current = {
  arrIndex: 0,

  get next() {
    return this.questions[this.arrIndex++];
  },

  get quiz() {
    return this.questions;
  },

  set quiz(questions) {
    this.questions = questions;
  },

  get question() {
    return this.currentQuestion;
  },

  set question(question) {
    this.currentQuestion = question;
  },

  get answer() {
    return answers.find((answer) => answer.name === this.currentQuestion.name);
  }
};

export default current;

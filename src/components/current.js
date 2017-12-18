import answers from '../../static/answers';

const current = {
  get question() {
    return this.quiz;
  },

  set question(question) {
    this.quiz = question;
  },

  get answer() {
    return answers.find((answer) => answer.name === this.quiz.name);
  }
};

export default current;

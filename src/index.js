import addRow from './components/textarea/textAreaAddRow';
import showRandomQuiz from './components/showRandomQuiz';
import checkAnswer from './components/checkAnswer';
import questions from '../static/questions';
import current from './components/current';
import showResult from './components/showResult';
import domElements from './components/domElements';

window.addEventListener('load', () => {
  showRandomQuiz(questions);

  domElements.$nextQuiz.addEventListener('click', () => {
    showRandomQuiz(questions);
  });

  domElements.$textArea.addEventListener('keypress', () => {
    addRow('console-output');
  });

  domElements.$answer.addEventListener('click', () => {
    const userAnswer = domElements.$textArea.value;
    const answer = checkAnswer(userAnswer, current.answer.value);
    showResult(answer);
  });
});

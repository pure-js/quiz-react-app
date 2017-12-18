import Prism from 'prismjs';
import addRow from './components/textarea/textAreaAddRow';
import showRandomQuiz from './showRandomQuiz';
import checkAnswer from './check-answer';
import questions from '../static/questions';
import answers from '../static/answers';

window.addEventListener('load', () => {
  showRandomQuiz(questions);
  Prism.highlightAll();

  const $answer = document.getElementById('next-quiz');
  const $nextQuiz = document.getElementById('next-quiz');
  const $textArea = document.getElementById('console-output');

  $nextQuiz.addEventListener('click', () => {
    showRandomQuiz(questions);
    Prism.highlightAll();
  });

  $textArea.addEventListener('keypress', () => {
    addRow('console-output');
  });

  $answer.addEventListener('click', () => {
    const userAnswer = $textArea.value;
    checkAnswer(userAnswer, answers);
  });
});

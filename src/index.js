import addRow from './components/textarea/textAreaAddRow';
import showNextQuiz from './components/showNextQuiz';
import questions from '../static/questions';
import current from './components/current';
import domElements from './components/domElements';
import shuffleArray from './components/shuffleArray';
import toAnswer from './components/toAnswer';

window.addEventListener('load', () => {
  domElements.$exam.addEventListener('click', () => {
    current.quiz = shuffleArray(questions);
    showNextQuiz(questions);
    document.getElementById('first-screen').classList.add('d-none');
    document.getElementById('quiz-screen').classList.remove('d-none');
    domElements.$exam.removeEventListener('click', () => {});
  });

  domElements.$nextQuiz.addEventListener('click', () => {
    showNextQuiz(questions);
  });

  domElements.$textArea.addEventListener('keypress', () => {
    addRow('console-output');
  });

  domElements.$answer.addEventListener('click', () => {
    toAnswer();
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then((registration) => {
        console.log('Registered:', registration);
      })
      .catch((error) => {
        console.log('Registration failed: ', error);
      });
  }
});

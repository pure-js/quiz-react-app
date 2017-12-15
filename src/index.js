import Prism from 'prismjs';
import addRow from './components/textarea/textAreaAddRow';
import showRandomQuiz from './showRandomQuiz';

window.addEventListener('load', function() {
  showRandomQuiz();
  Prism.highlightAll();

  const nextQuiz = document.getElementById('next-quiz');
  const textArea = document.getElementById('console-output');

  nextQuiz.addEventListener('click', function() {
    showRandomQuiz();
    Prism.highlightAll();
  });

  textArea.addEventListener('keypress', function() {
    addRow('console-output');
  });
});

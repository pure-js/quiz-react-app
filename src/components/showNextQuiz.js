import Prism from 'prismjs';

import current from './current';
import { clearTextAreaClasses } from './cssClassManipulation';
import domElements from './domElements';
import showResults from './showResults';

function showNextQuiz() {
  const currentQuestion = current.next;
  if (currentQuestion) {
    document.getElementById('code').innerHTML = currentQuestion.value;

    current.question = currentQuestion;
    Prism.highlightAll();
    clearTextAreaClasses(domElements.$textArea, ['is-valid', 'is-invalid']);
    domElements.$textArea.value = '';
  } else {
    showResults();
  }
}

export default showNextQuiz;

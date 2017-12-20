import current from './current';
import { clearTextAreaClasses } from './cssClassManipulation';
import domElements from './domElements';

function showNextQuiz() {
  const currentQuestion = current.next;
  if (currentQuestion) {
    document.getElementById('code').innerHTML = currentQuestion.value;

    clearTextAreaClasses(domElements.$textArea, ['is-valid', 'is-invalid']);
    domElements.$textArea.value = '';
  }
}

export default showNextQuiz;

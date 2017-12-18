import current from './current';
import Prism from "prismjs";
import { clearTextAreaClasses } from "./cssClassManipulation";
import domElements from "./domElements";

function showNextQuiz() {
  const currentQuestion = current.next;
  document.getElementById('code').innerHTML = currentQuestion.value;

  current.question = currentQuestion;
  Prism.highlightAll();
  clearTextAreaClasses(domElements.$textArea, ['is-valid', 'is-invalid']);
  domElements.$textArea.value = '';
}

export default showNextQuiz;

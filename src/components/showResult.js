import showRandomQuiz from "./showRandomQuiz";
import questions from "../../static/questions";
import { clearTextAreaClasses } from "./cssClassManipulation";

function addFeedbackIfNotExist(parentNode, referenceNode) {
  const $feed = document.getElementsByClassName('invalid-feedback');

  if ($feed.length < 1) {
    const $feedback = document.createElement('div');
    const content = document.createTextNode("Wrong answer!");
    $feedback.classList.add('invalid-feedback');
    $feedback.style.display = 'block';
    $feedback.appendChild(content);
    parentNode.insertBefore($feedback, referenceNode);
  }
}

function showResult(correctAnswer) {
  const $textArea = document.getElementById('console-output');

  if (correctAnswer) {
    clearTextAreaClasses($textArea, ['is-invalid']);
    $textArea.classList.add('is-valid');
    showRandomQuiz(questions);
  } else {
    clearTextAreaClasses($textArea, ['is-valid']);
    $textArea.classList.add('is-invalid');
    const $formGroup = document.getElementsByClassName('form-group')[0];
    addFeedbackIfNotExist($formGroup, $formGroup.childNodes[0]);
  }
}

export default showResult;

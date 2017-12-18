import current from './current';
import showRandomQuiz from "./showRandomQuiz";
import questions from "../../static/questions";

function showResult(correctAnswer) {
  const $textArea = document.getElementById('console-output');

  if (correctAnswer) {
    $textArea.classList.remove('is-invalid');
    $textArea.classList.add('is-valid');
    showRandomQuiz(questions);
  } else {
    $textArea.classList.remove('is-valid');
    $textArea.classList.add('is-invalid');
    console.log('false', current.question.value, current.answer.value);
  }
}

export default showResult;

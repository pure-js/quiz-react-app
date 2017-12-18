import domElements from './domElements';
import checkAnswer from './checkAnswer';
import showResult from './showResult';
import current from './current';
import progress from './progress';


function updateProgressBar(answers) {
  document.getElementById('progress-success').style.width = `${answers.correct}%`;
  document.getElementById('progress-failure').style.width = `${answers.wrong}%`;
}

function toAnswer() {
  const userAnswer = domElements.$textArea.value;
  const answer = checkAnswer(userAnswer, current.answer.value);

  if (checkAnswer) {
    progress.correctAnswer = answer;
  } else {
    progress.wrongAnswer = answer;
  }

  showResult(answer);
  updateProgressBar(progress.percentageOverall);
}

export default toAnswer;

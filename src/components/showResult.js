import current from './current';

function showResult(correctAnswer) {
  if (correctAnswer) {
    console.log('correct');
  } else {
    console.log('false', current.questionName);
  }
}

export default showResult;

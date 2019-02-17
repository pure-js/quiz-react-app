// type Question = {
//   name: string
// };

function getAnsweredQuestions(questions, answers) {
  function findAnswer(key) {
    const answer = answers.find(x => x.name === key.name);
    if (answer) return key.name === answer.name;
    return false;
  }
  return questions.filter(findAnswer);
}

export default getAnsweredQuestions;

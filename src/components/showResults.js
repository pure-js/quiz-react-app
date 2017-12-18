import domElements from "./domElements";

function showResults() {
  domElements.$startQuiz.addEventListener('click', () => {
    document.getElementById('first-screen').classList.remove('d-none');
    document.getElementById('quiz-screen').classList.add('d-none');
  });
}

export default showResults;

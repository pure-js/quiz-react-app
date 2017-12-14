function showRandomQuiz() {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let rand = getRandomIntInclusive(0, arr.length - 1);

  document.getElementById('code').innerHTML = arr[rand];
}

window.addEventListener('load', function(event) {
  showRandomQuiz();
});


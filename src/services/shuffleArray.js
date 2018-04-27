const getRand = max => Math.floor(Math.random() * (max + 1));

function shuffleArray(arr) {
  const shuffled = [...arr];
  const { length } = shuffled;
  for (let i = length - 1; i > 0; i -= 1) {
    const j = getRand(i);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default shuffleArray;

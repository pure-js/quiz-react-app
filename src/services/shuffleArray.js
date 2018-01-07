const getRand = i => Math.floor(Math.random() * (i + 1));

function shuffleArray(arr) {
  const newArr = arr;
  for (let i = newArr.length - 1; i > 0; i -= 1) {
    const j = getRand(i);
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

export default shuffleArray;

// @flow
import getRand from './floatToInteger';

function shuffleArray(arr: Array<any>) {
  const shuffled = arr.slice();
  const { length } = shuffled;
  for (let i = length - 1; i > 0; i -= 1) {
    const j = getRand(i);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default shuffleArray;

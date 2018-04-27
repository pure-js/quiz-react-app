import shuffleArray from './shuffleArray';
import getRand from './getRandomNumber';

jest.mock('./getRandomNumber');

test('[1, 2] to equal [2, 1]', () => {
  const array = [1, 2];
  getRand.mockReturnValueOnce(0);
  expect(shuffleArray(array)).toEqual([2, 1]);
});

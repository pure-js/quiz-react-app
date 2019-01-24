// @flow
import shuffleArray from './shuffleArray';
import floatToInteger from './floatToInteger';

jest.mock('./floatToInteger');

test('[1, 2] to equal [2, 1]', () => {
  const array = [1, 2];
  floatToInteger.mockReturnValueOnce(0);
  expect(shuffleArray(array)).toEqual([2, 1]);
});

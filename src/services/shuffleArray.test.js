/* eslint-disable import/no-extraneous-dependencies */
import { jest } from '@jest/globals';

import shuffleArray from './shuffleArray';

const myMock = jest.fn();
myMock.mockReturnValueOnce(0);

test('[1, 2] to equal [2, 1]', () => {
  const array = [1, 2];
  expect(shuffleArray(array, myMock)).toEqual([2, 1]);
});

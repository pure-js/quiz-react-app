import shuffleArray from './shuffleArray';

test('adds 1 + 2 to equal 3', () => {
  const getRand = 1;
  const array = [1, 2];
  expect(shuffleArray(array)).toEqual([2, 1]);
});

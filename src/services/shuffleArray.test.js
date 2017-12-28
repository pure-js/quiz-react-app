const shuffleArray = require('./shuffleArray');

test('adds 1 + 2 to equal 3', () => {
  const array = [1, 2];
  expect(shuffleArray(array)).toBe([2, 1]);
});

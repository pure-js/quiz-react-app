import getRandInteger from './getRandomNumber';

test('10, 0.11409475913551148 to 1', () => {
  expect(getRandInteger(10, 0.11409475913551148)).toBe(1);
});

test('100, 0.26958001101366247 to 27', () => {
  expect(getRandInteger(100, 0.26958001101366247)).toBe(27);
});

test('10000, 0.025569770009628012 to 255', () => {
  expect(getRandInteger(10000, 0.025569770009628012)).toBe(255);
});

test('777, 0.3786611733690103 to 294', () => {
  expect(getRandInteger(777, 0.3786611733690103)).toBe(294);
});

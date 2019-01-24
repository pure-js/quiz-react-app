import floatToInteger from './floatToInteger';

test('10, 0.11409475913551148 to 1', () => {
  expect(floatToInteger(10, 0.11409475913551148)).toBe(1);
});

test('100, 0.26958001101366247 to 27', () => {
  expect(floatToInteger(100, 0.26958001101366247)).toBe(27);
});

test('10000, 0.025569770009628012 to 255', () => {
  expect(floatToInteger(10000, 0.025569770009628012)).toBe(255);
});

test('777, 0.3786611733690103 to 294', () => {
  expect(floatToInteger(777, 0.3786611733690103)).toBe(294);
});

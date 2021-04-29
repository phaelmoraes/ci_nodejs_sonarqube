const sub = require('./sub');

test('diff 5 - 2 to equal 3', () => {
  expect(sub(5, 2)).toBe(3);
});
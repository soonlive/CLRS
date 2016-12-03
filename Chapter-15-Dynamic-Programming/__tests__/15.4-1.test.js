/**
 * Created by Xin on 03/12/2016.
 */
test('15.4-1', () => {
  const LCS = require('../15.4-1');
  const x = [1, 0, 0, 1, 0, 1, 0];
  const y = [0, 1, 0, 1, 1, 0, 1, 1, 0];

  LCS(x, y);
  expect(LCS(x, y)).toEqual([1, 0, 0, 1, 1, 0]);
});


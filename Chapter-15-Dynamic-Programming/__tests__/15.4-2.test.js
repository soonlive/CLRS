/**
 * Created by Xin on 05/12/2016.
 */
test('15.4-2', () => {
  const LCS = require('../15.4-2');
  let x = [1, 0, 0, 1, 0, 1, 0];
  let y = [0, 1, 0, 1, 1, 0, 1, 1, 0];

  expect(LCS(x, y)).toEqual([1, 0, 0, 1, 1, 0]);

  x = ['A', 'B', 'C', 'B', 'D', 'A', 'B'];
  y = ['B', 'D', 'C', 'A', 'B', 'A'];

  expect(LCS(x, y)).toEqual(['B', 'C', 'B', 'A']);
});


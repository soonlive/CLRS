/**
 * Created by Xin on 06/12/2016.
 */
test('2.1-2', () => {
  const insertionSort = require('../2.1-2');
  let arr = [5, 2, 4, 6, 1, 3];
  expect(insertionSort(arr)).toEqual([6, 5, 4, 3, 2, 1]);
});


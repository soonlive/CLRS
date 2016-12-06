/**
 * Created by Xin on 06/12/2016.
 */
test('Insertion-Sort', () => {
  const insertionSort = require('../Insertion-Sort');
  let arr = [5, 2, 4, 6, 1, 3];
  expect(insertionSort(arr)).toEqual([1, 2, 3, 4, 5, 6]);
});


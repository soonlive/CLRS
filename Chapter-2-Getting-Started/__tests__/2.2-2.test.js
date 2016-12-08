/**
 * Created by Xin on 08/12/2016.
 */
test('Selection-Sort', () => {
  const insertionSort = require('../Selection-Sort');
  let arr1 = [5, 2, 4, 6, 1, 3];
  expect(insertionSort(arr1)).toEqual([1, 2, 3, 4, 5, 6]);

  let arr2 = [5, 2, 4, 6, 5, 3];
  expect(insertionSort(arr2)).toEqual([2, 3, 4, 5, 5, 6]);
});
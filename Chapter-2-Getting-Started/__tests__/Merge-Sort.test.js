/**
 * Created by Xin on 09/12/2016.
 */
test('Merge-Sort', () => {
  const mergeSort = require('../Merge-Sort');

  let arr1 = [3, 41, 52, 38, 26, 38, 57, 9, 49];
  expect(mergeSort(arr1)).toEqual([3, 9, 26, 38, 38, 41, 49, 52, 57]);

  let arr2 = [];
  expect(mergeSort(arr2)).toEqual([]);

  let arr3 = [3];
  expect(mergeSort(arr3)).toEqual([3]);

  let arr4 = [4, 3];
  expect(mergeSort(arr4)).toEqual([3, 4]);
});

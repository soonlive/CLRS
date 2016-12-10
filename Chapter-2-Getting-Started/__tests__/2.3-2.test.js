/**
 * Created by Xin on 10/12/2016.
 */
test('2.3-2', () => {
  const mergeSort = require('../2.3-2');

  let arr1 = [3, 41, 52, 38, 26, 38, 57, 9, 49];
  expect(mergeSort(arr1)).toEqual([3, 9, 26, 38, 38, 41, 49, 52, 57]);

});

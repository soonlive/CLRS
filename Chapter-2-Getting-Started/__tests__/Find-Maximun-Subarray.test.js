/**
 * Created by Xin on 24/12/2016.
 */
test('Find-Maximum-Subarray', () => {
  const findMaximunSubarray = require('../Find-Maximun-Subarray');
  let arr1 = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, 4, 7];
  expect(findMaximunSubarray(arr1, 0, arr1.length - 1)).toEqual([18, 20, -7, 12]);

  let arr2 = [-12, 30, -8, 25, 10, -3, -9, 13];
  expect(findMaximunSubarray(arr2, 0, arr2.length - 1)).toEqual([30, -8, 25, 10, -3, -9, 13]);
});

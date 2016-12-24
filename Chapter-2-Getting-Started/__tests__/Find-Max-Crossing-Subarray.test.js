/**
 * Created by Xin on 23/12/2016.
 */
test('Find-Max-Crossing-Subarray', () => {
  const findMaxCrossingSubarray = require('../Find-Max-Crossing-Subarray');
  let arr1 = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, 4, 7];
  expect(findMaxCrossingSubarray(arr1, 0, arr1.length - 1)).toEqual([18, 20, -7, 12]);
});

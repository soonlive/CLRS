/**
 * Created by Xin on 24/12/2016.
 */
let findMaxCrossingSubarray = require('./Find-Max-Crossing-Subarray');

function findMaximumSubarray(arr, low, high) {
  if (low >= high) {
    return arr.slice(low, high);
  }

  let mid = Math.floor((high + low) / 2);
  let lefMaxSubarray = findMaximumSubarray(arr, low, mid);
  let rightMaxSubarray = findMaximumSubarray(arr, mid + 1, high);
  let maxCrossingSubarray = findMaxCrossingSubarray(arr, low, high);

  let leftSum = lefMaxSubarray.reduce((pre, cur) => {
    return pre + cur;
  }, 0);
  let rightSum = rightMaxSubarray.reduce((pre, cur) => {
    return pre + cur;
  }, 0);
  let maxCrossingSum = maxCrossingSubarray.reduce((pre, cur) => {
    return pre + cur;
  }, 0);
  let maxSum = Math.max(leftSum, rightSum, maxCrossingSum);

  if (maxSum === leftSum) {
    return lefMaxSubarray;
  } else if (maxSum === rightSum) {
    return rightMaxSubarray;
  } else if (maxSum === maxCrossingSum) {
    return maxCrossingSubarray;
  }
}

module.exports = findMaximumSubarray;

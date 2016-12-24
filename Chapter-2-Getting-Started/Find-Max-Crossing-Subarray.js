/**
 * Created by Xin on 23/12/2016.
 */
function findMaxCrossingSubarray(arr, low, high) {
  let mid = Math.floor((high + low) / 2);
  let leftMax = mid;
  let leftSum = -Number.MAX_VALUE;
  let rightMax = mid;
  let rightSum = -Number.MAX_VALUE;
  let sum = 0;
  for (let i = mid; i >= low; --i) {
    sum += arr[i];
    if (sum > leftSum) {
      leftSum = sum;
      leftMax = i;
    }
  }

  sum = 0;
  for (let j = mid + 1; j <= high; ++j) {
    sum += arr[j];
    if (sum > rightSum) {
      rightSum = sum;
      rightMax = j;
    }
  }

  let subarrayLow = leftMax;
  let subarrayHigh = rightMax;

  let max = Math.max(leftSum, rightSum, leftSum + rightSum);

  if (max === leftSum) {
    subarrayHigh = mid;
  } else if (max === rightSum) {
    subarrayLow = mid;
  }

  return arr.slice(subarrayLow, subarrayHigh + 1);
}

module.exports = findMaxCrossingSubarray;

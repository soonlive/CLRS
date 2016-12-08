/**
 * Created by Xin on 08/12/2016.
 */

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      arr[i] = arr[i] ^ arr[min];
      arr[min] = arr[i] ^ arr[min];
      arr[i] = arr[i] ^ arr[min];
    }
  }
  return arr;
}

module.exports = selectionSort;

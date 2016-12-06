/**
 * Created by Xin on 06/12/2016.
 */

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let a = arr[i];
    let j = i - 1;
    while (j > -1 && arr[j] < a) {
      arr[j + 1] = arr[j];
      --j;
    }
    arr[j+1] = a;
  }
  return arr;
}

module.exports = insertionSort;

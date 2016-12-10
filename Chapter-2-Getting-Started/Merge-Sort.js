/**
 * Created by Xin on 09/12/2016.
 */

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);
  let l = arr.slice(0, middle);
  let r = arr.slice(middle);
  return merge(mergeSort(l), mergeSort(r));
}

function merge(l, r) {
  let arr = [];

  while (l.length !== 0 || r.length !== 0) {
    if (l[0] <= r[0] || r.length === 0) {
      arr.push(l.shift());
    } else {
      arr.push(r.shift());
    }
  }
  return arr;
}

module.exports = mergeSort;

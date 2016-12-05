/**
 * Created by Xin on 05/12/2016.
 */
function LCS(x, y) {
  const memo = new Map();
  return lookUp(x, y, x.length, y.length, memo);
}

function lookUp(x, y, i, j, memo) {
  const key = `${i}-${j}`;
  if (memo.has(key)) {
    return memo.get(key);
  }

  if (i === 0 || j === 0) {
    return [];
  }

  let r = [];

  if (x[i - 1] === y[j - 1]) {
    r.unshift(x[i - 1]);
    r = lookUp(x, y, i - 1, j - 1, memo).concat(r);
  } else {
    let sub1 = lookUp(x, y, i - 1, j, memo);
    let sub2 = lookUp(x, y, i, j - 1, memo);

    r = sub1.length >= sub2.length ? sub1.concat(r) : sub2.concat(r);
  }

  memo.set(key, r);

  return r;
}

module.exports = LCS;

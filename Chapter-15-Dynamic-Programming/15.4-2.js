/**
 * Created by Xin on 05/12/2016.
 */
function LCS(x, y) {
  let c = [];

  for (let i = 0; i <= x.length; i++) {
    if (i === 0) {
      c[i] = new Array(y.length + 1).fill(0);
    } else {
      c[i] = [0];
    }
  }

  for (let i = 1; i <= x.length; i++) {
    for (let j = 1; j <= y.length; j++) {
      if (x[i - 1] === y[j - 1]) {
        c[i][j] = c[i - 1][j - 1] + 1;
      } else if (c[i - 1][j] >= c[i][j - 1]) {
        c[i][j] = c[i - 1][j];
      } else {
        c[i][j] = c[i][j - 1];
      }
    }
  }

  const r = [];

  return lookUp(c, x, y, x.length, y.length, r);
}

function lookUp(c, x, y, i, j, r) {
  if (i === 0 || j === 0) {
    return r;
  }

  if (x[i - 1] === y[j - 1]) {
    r.unshift(x[i - 1]);
    return lookUp(c, x, y, i - 1, j - 1, r)
  } else if (c[i - 1][j] >= c[i][j - 1]) {
    return lookUp(c, x, y, i - 1, j, r);
  } else {
    return lookUp(c, x, y, i, j - 1, r);
  }
}

module.exports = LCS;

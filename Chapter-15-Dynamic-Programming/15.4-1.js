/**
 * Created by Xin on 03/12/2016.
 */
function LCS(x, y) {
  let c = [];
  let b = [];

  for (let i = 0; i <= x.length; i++) {
    if (i === 0) {
      c[i] = new Array(y.length + 1).fill(0);
      b[i] = new Array(y.length + 1).fill(0);
    } else {
      c[i] = [0];
      b[i] = [0];
    }
  }

  for (let i = 1; i <= x.length; i++) {
    for (let j = 1; j <= y.length; j++) {
      if (x[i - 1] === y[j - 1]) {
        c[i][j] = c[i - 1][j - 1] + 1;
        b[i][j] = '↖';
      } else if (c[i - 1][j] >= c[i][j - 1]) {
        c[i][j] = c[i - 1][j];
        b[i][j] = '↑';
      } else {
        c[i][j] = c[i][j - 1];
        b[i][j] = '←';
      }
    }
  }

  return lookUp(b, x, x.length, y.length);
}

function lookUp(b, x, i, j, r) {
  if (!r) {
    r = [];
  }
  if (i === 0 || j === 0) {
    return r;
  }

  if (b[i][j] === '↖') {
    r.unshift(x[i - 1]);
    return lookUp(b, x, i - 1, j - 1, r)
  } else if (b[i][j] === '↑') {
    return lookUp(b, x, i - 1, j, r);
  } else {
    return lookUp(b, x, i, j - 1, r);
  }
}

module.exports = LCS;

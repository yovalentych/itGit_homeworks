module.exports = function (a, b) {
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i] || typeof a[i] !== typeof b[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

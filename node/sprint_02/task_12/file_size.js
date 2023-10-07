module.exports = function (b) {
  switch (true) {
    case b === 0:
      return 0;
    case b > 0 && b < 1000:
      return 'B';
    case b >= 1000 && b < 1000000:
      return 'kB';
    case b >= 1000000:
      return 'MB';
  }
};

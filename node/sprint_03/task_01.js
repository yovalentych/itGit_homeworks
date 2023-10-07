// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который возращает абсолютный адрес директории в которой будет вызван.
const path = require('path');

module.exports = function () {
  const dirPath = path.join(__dirname);
  return dirPath;
};

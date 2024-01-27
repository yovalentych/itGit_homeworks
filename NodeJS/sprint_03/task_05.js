// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который принимает имя файла и возвращает его размер.

const path = require('path');
const fs = require('fs');

module.exports = function (fileName) {
  return fs.statSync(fileName).size;
};

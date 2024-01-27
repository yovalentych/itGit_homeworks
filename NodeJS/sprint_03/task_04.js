// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который принимает имя файла и возвращает 1 или 0, в зависимости от того существует или нет указанный файл. Пример вызова указан в index.js.

const path = require('path');
const fs = require('fs');

module.exports = function (fileName) {
  return fs.existsSync(fileName) ? 1 : 0;
};

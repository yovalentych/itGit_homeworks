// itgid.info - курс Node.js

// Task 01
// Создайте анонимный модуль в данном файле, который принимает аргумент - имя файла. Возвращает содержимое файла. Пример вызова в index.js

const fs = require('fs');
const path = require('path');

module.exports = function (fileName) {
  return fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
};

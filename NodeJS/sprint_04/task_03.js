// itgid.info - курс Node.js

// Task 03
// Создайте анонимный модуль в данном файле, который принимает аргумент - имя файла. Возвращает массив слов из первой строки файла. Разбиение производить по символу пробел. Пример вызова в index.js

const fs = require('fs');
const path = require('path');

module.exports = function (fileName) {
  return fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' }).split(' ');
};

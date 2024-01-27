// itgid.info - курс Node.js

// Task 06
// Создайте анонимный модуль в данном файле, который принимает аргумент - текст. Модуль должен создать файл с именем t_06.txt в папке d_04. В файл должен быть записан текст, который передается как аргумент. Кодировка utf8. Флаг файловой системы - w.

const fs = require('fs');
const path = require('path');

module.exports = function (text) {
  return fs.writeFileSync('./d_04/t_06.txt', text, {
    encoding: 'utf8',
    flag: 'w',
  });
};

// itgid.info - курс NODE.JS 2024

// Task 09
// Создайте анонимный модуль в данном файле, который получает объект как аргумент и записывает его в файл f_05/09.json. Проверьте валидатором файл после создания.

const fs = require('fs');
const path = require('path');

module.exports = function (obj) {
  const filePath = './f_05/09.json';

  return fs.writeFileSync(filePath, JSON.stringify(obj), {
    encoding: 'utf8',
    flag: 'w',
  });
};

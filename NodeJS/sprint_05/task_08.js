// itgid.info - курс NODE.JS 2024

// Task 08
// Создайте анонимный модуль в данном файле, который при запуске делает читает файл ./f_05/01.json и записывает из него данные в файл ./f_05/08.json без ключа "os".

const fs = require('fs');
const path = require('path');

module.exports = function () {
  const fileFrom = './f_05/01.json';
  const fileTo = './f_05/08.json';
  const content = JSON.parse(fs.readFileSync(fileFrom, { encoding: 'utf8' }));
  delete content.os;
  const newJson = JSON.stringify(content, null, 2);
  return fs.writeFileSync(fileTo, newJson, {
    encoding: 'utf8',
    flag: 'w',
  });
};

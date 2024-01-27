// itgid.info - курс NODE.JS 2024

// Task 10
// Создайте анонимный модуль в данном файле, который получает массив, выбирает из него числа и записывает эти числа в виде массива в JSON файл:
// ./f_05/10.json.

const fs = require('fs');
const path = require('path');

module.exports = function (arr) {
  const filePath = './f_05/10.json';

  const numContent = arr.filter((item) => typeof item === 'number');

  return fs.writeFileSync(filePath, JSON.stringify(numContent), {
    encoding: 'utf8',
    flag: 'w',
  });
};

// const jsonCount = files.filter((file) => path.extname(file) === '.json');
//   return jsonCount.length;

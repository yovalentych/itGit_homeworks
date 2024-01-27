// itgid.info - курс NODE.JS 2024

// Task 05
// Создайте анонимный модуль в данном файле, который принимает аргумент - путь к файлу JSON, и возвращает сумму его элементов.

const fs = require('fs');
const path = require('path');

module.exports = function (fileName) {
  const data = JSON.parse(fs.readFileSync(fileName, { encoding: 'utf8' }));
  let sumAmmount = 0;

  data.forEach((item) => {
    sumAmmount += item;
  });

  return sumAmmount;
};

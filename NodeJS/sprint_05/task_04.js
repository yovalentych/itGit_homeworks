// itgid.info - курс NODE.JS 2024

// Task 04
// Создайте анонимный модуль в данном файле, который принимает аргумент - имя файла JSON, читает указанный файл и возвращает сумму значений ключа AMOUNT.

const fs = require('fs');
const path = require('path');

module.exports = function (fileName) {
  const data = JSON.parse(fs.readFileSync(fileName, { encoding: 'utf8' }));
  let sumAmmount = 0;

  data.EXPENSE.forEach((item) => {
    sumAmmount += item.AMOUNT;
  });

  return sumAmmount;
};

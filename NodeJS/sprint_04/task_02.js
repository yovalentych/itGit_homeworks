// itgid.info - курс Node.js

// Task 02
// Создайте анонимный модуль в данном файле, который принимает аргумент - имя файла. Возвращает сумму чисел из файла. Пример вызова в index.js. Для простоты считаем что в файле будут только числа.

const fs = require('fs');
const path = require('path');
const task_01 = require('./task_01');

module.exports = function (fileName) {
  const data = fs.readFileSync(fileName, { encoding: 'utf8' }).split('\r\n');
  let sum = 0;
  data.map((el) => {
    if (el != '') {
      sum += parseInt(el);
    }
  });
  return sum;
};

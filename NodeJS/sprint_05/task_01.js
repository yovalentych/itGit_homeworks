// itgid.info - курс NODE.JS 2024

// Task 01
// Создайте анонимный модуль в данном файле, который принимает аргумент - имя файла JSON, читает указанный файл и возвращает объект из данного файла. Не забывайте выполнять валидацию JSON файлов!

const fs = require('fs');
const path = require('path');

module.exports = function (fileName) {
  const data = fs.readFileSync(fileName, { encoding: 'utf8' });
  return JSON.parse(data);
};

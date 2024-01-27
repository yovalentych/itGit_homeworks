// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который принимает имя папки и возвращает массив имен файлов в данной папке. Для простоты считаем что в папке могут лежать только файлы (других папок нет).

const path = require('path');
const fs = require('fs');

module.exports = function (folderName) {
  const filesArray = fs.readdirSync(folderName);
  return filesArray.map((item) => item.split('.')[0]);
};

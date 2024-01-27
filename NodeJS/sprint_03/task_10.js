// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который принимает имя папки и возвращает объект вида название файла - размер.

const path = require('path');
const fs = require('fs');

module.exports = function (folderName) {
  const filesArray = fs.readdirSync(folderName);
  const fileSize = {};

  filesArray.forEach((item) => {
    const filePath = path.join(folderName, item);
    const stat = fs.statSync(filePath);
    fileSize[item] = stat.size;
  });

  return fileSize;
};

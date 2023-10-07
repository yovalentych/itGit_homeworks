// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который принимает имя папки и возвращает абсолютный путь к ней.

const path = require('path');

module.exports = function (folderName) {
  const dirPath = path.join(__dirname, folderName);
};

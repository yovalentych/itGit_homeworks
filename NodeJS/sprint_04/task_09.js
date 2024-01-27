// itgid.info - курс Node.js

// Task 09
// Создайте анонимный модуль в данном файле, который принимает аргумент - arr. Модуль должен записать строку в файл t_09.txt массив arr. Файл размещен в d_04. Причем каждый вложенный массив должен идти с новой строки. Разделитель элементов вложенных массивов - пробел. Перенос строки осуществлять через \r\n. Кодировка utf8, ключ w.

const fs = require('fs');
const path = require('path');

module.exports = function (arr) {
  const newPath = './d_04/t_09.txt';
  let newText = arr.map((el) => el.join(' ')).join('\r\n');

  return fs.writeFileSync(newPath, newText, { encoding: 'utf8', flag: 'w' });
};

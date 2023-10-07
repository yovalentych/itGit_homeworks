// itgid.info - курс Node.js

// Создайте модуль с именем preparedArray, который принимает массив и возвращает его, где все элементы приведены к нижнему регистру и очищены от пробелов (по краям).

module.exports.preparedArray = function (arr) {
  return arr.map((val) => val.trim().toLowerCase());
};

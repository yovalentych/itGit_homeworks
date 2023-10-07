// itgid.info - курс Node.js

// Создайте модуль password который принимает строку и проверяет, что ее длина больше 8 символов и символы, которые применяются в строке - уникальные в рамках строки. Возвращает true, false. Модуль должен предварительно удалить пробелы по краям строки.

module.exports.password = function (s) {
  let preS = new Set(s.trim());
  let compS = s.trim(' ').split('');
  if (preS.size === compS.length && preS.size > 8) {
    return true;
  } else {
    return false;
  }
};

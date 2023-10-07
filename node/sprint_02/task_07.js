// itgid.info - курс Node.js

// Создайте модуль с именем isWhitespace который получает строку и проверяет наличие пробела внутри строки. Возвращает true, false. Внимание! Проверка пробелов не по краям текста, а внутри. Т.е. на строку вида '   ab   ' модуль должен возвращать true. На строку вида 'a  b' возвращать false.

module.exports.isWhitespace = function (str) {
  if (str.trim().split('').includes(' ')) {
    return false;
  } else {
    return true;
  }
};

// itgid.info - курс Node.js

// Создайте модуль с именем isWhitespace который получает строку и проверяет наличие пробела внутри строки. Возвращает true, false. Внимание! Проверка пробелов не по краям текста, а внутри. Т.е. на строку вида '   ab   ' модуль должен возвращать false. На строку вида 'a  b' возвращать true.

module.exports.isWhitespace = (str) => {
  if (str.trim().includes(' ')) {
    return true;
  } else {
    return false;
  }
};
// module.exports.isWhitespace = (str) => {
//   if (str.trim().includes(' ')) {
//     return true;
//   } else {
//     return false;
//   }
// };

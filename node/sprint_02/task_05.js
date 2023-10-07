// itgid.info - курс Node.js

// Создайте анонимный модуль который принимает строку и возвращает случайный символ из данной строки. Весь код реализуйте внутри функции модуля.

module.exports = (s) => {
  let strSplited = s.replace(/ /g, '').split('');
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return strSplited[getRandomInt(strSplited.length)];
};

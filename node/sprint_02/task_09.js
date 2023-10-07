// itgid.info - курс Node.js

// Создайте анонимный модуль, который принимает строку и возвращает строку 'image', если исходная строка равна или 'gif', или 'png', или 'jpeg', или 'jpeg'. И false в противном случае.

module.exports = (s) => {
  let ext = ['gif', 'png', 'jpeg'];

  if (ext.includes(s)) {
    return 'image';
  } else {
    return false;
  }
};

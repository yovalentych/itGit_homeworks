// itgid.info - курс Node.js

// Создайте модуль с именем preparedArray, который принимает массив и измеяет его так, что  все элементы массива приведены к нижнему регистру и очищены от пробелов (по краям). Модуль должен возвращать массив. Для проверки будет использоваться массив содержащий только строки.

module.exports.preparedArray = (arr) => {
  const arr_res = [];
  for (let i = 0; i < arr.length; i++) {
    arr_res.push(arr[i].trim().toLowerCase());
  }
  return arr_res;
};

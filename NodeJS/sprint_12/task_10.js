// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - POST
// URL - /api/12/sr/read/human
// где human - значение из строки race переданной модулю как аргумент
// и получает ответ - описание расы из игры космические рейнджеры
// Модуль должен возвращать title расы
// Все модули спринта реализуют запросы с помощью async-request модуля.


const awaitRequest = require('async-request');
const APIKEY = require('./apikey');


const URL = 'https://api.itgid.info';

module.exports = async function (race) {
  
}

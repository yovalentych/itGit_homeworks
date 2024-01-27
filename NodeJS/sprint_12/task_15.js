// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - POST
// URL - /api/12/random/generate-password
// модуль получает три аргумента. 
// первый аргумент - длина пароля. Передается в data POST запроса как length
// второй аргумент - единица или нуль. Если равен единице то в data POST запроса добавляется
// "uppercase" : 1
// третий аргумент - единица или нуль. Если равен единице то в data POST запроса добавляется
// "symbols" : 1
// и получает ответ - пароль указанной длины с регистрами и спецсимволами.
// Модуль должен возвратить пароль
// Все модули спринта реализуют запросы с помощью async-request модуля.


const awaitRequest = require('async-request');
const APIKEY = require('./apikey');


const URL = 'https://api.itgid.info';

module.exports = async function (n, u) {
   
}

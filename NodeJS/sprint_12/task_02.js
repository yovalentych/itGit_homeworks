// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - GET
// URL - /api/12/employee/read/n
// где n - число (номер сотрудника) передается в модуль как аргумент
// и получает ответ - массив с описанием сотрудника с номером n.
// Модуль должен возвращать возраст сотрудника.

// Все модули спринта реализуют запросы с помощью async-request модуля.


const awaitRequest = require('async-request');
const APIKEY = require('./apikey');


const URL = 'https://api.itgid.info';

module.exports = async function (n) {
   
}

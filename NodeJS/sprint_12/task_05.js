// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - POST
// URL - /api/12/random/random-number
// В body POST запроса передайте аргументы min равное числу из аргумента a, и max равное числу из аргумента b. 
// и получает ответ - случайное число от a до b
// Модуль должен возвращать случайное число.

// Все модули спринта реализуют запросы с помощью async-request модуля.


const awaitRequest = require('async-request');
const APIKEY = require('./apikey');


const URL = 'https://api.itgid.info';

module.exports = async function (a,b) {
   
}

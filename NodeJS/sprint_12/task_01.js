// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - GET
// URL - /api/12/employee/read/5 
// и получает ответ - массив с описанием сотрудника с номером 5.
// Модуль должен возвращать емейл сотрудника.
// Задание решено. Изучите структуру кода, способ запуска, вывод

// Все модули спринта реализуют запросы с помощью async-request модуля.


const awaitRequest = require('async-request');
const APIKEY = require('./apikey');


const URL = 'https://api.itgid.info';

module.exports = async function () {
    let data = await awaitRequest(URL + '/api/12/employee/read/5', {
        'method' : 'GET',
        'headers' : {
            'apikey' : APIKEY
        }
    });
    data = JSON.parse(data.body);
    // console.log(data); // контролируем что приходит
    return (data.result.email);
}

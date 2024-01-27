// itgid.info - курс Node.js 2024

// Task 01.
// Изучите работу модуля getCSV - он написан как универсальный для чтения csv файлов. Изучите как он написан в данном файле и запускается в index.js.

const getCSV = require('./get_csv');

module.exports = async function () {
    const records = await getCSV('./f_06/info.csv', {columns: true});
    return records;
} 
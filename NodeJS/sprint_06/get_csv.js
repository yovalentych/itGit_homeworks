// itgid.info - курс NODE.JS 2024


// Task 01
// Изучите работу модуля. Код уже написан. 

const fs = require('fs');
const path = require('path')
const {parse} = require('csv-parse');

module.exports = async function (fileName, params) {
    const p = path.join(__dirname, fileName);
    const result = [];
    const parsingData = fs
                        .createReadStream(p)
                        .pipe(parse(params));
    for await (const row of parsingData) {
        result.push(row);
    }
    return result;
}
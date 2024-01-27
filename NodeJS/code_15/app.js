const mysql         = require('mysql');
const syncMysql     = require('sync-mysql');

const CONFIG        = require('./config');


function t01() {
    const connection = mysql.createConnection(CONFIG);
    connection.connect();

    let query = 'SELECT * FROM cars';

    connection.query(query, (error, result) => {
        if (error) throw error;
        // console.log(result);
        // result.forEach(item => console.log(item.model));
        console.log(result[2]);
    });
    connection.end();
}

// t01();

function t02() {
    const connection = new syncMysql(CONFIG);
    let query = "SELECT * FROM cars WHERE color = 'white'";
    const result = connection.query(query);
    console.log(result);
}
t02();
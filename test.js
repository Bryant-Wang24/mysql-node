var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '192.168.99.100',
    user: 'root',
    password: '123456',
    // database: 'test'
});

connection.connect();

// 如果不存在user表那就创建一个wqs表，如果存在，那就不创建
// 在mysql中不要使用‘utf8’,要使用‘utf8mb4’
connection.query('CREATE DATABASE IF NOT EXISTS wqs DEFAULT CHARSET utf8mb4 COLLATE utf8mb4_unicode_520_ci;', function (error, results, fields) {
    if (error) throw error;
    console.log('创建数据库');
    console.log(results);
});
connection.query('use wqs')

connection.query(`CREATE TABLE IF NOT EXISTS user(
    name text,
    age int
)`, function (error, results, fields) {
    if (error) throw error;
    console.log('创建表');
    console.log(results);
});

connection.end()
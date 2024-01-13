var mysql = require('mysql2');
var drop = 'TRUNCATE TABLE apples;'
var seedQuery = 'INSERT INTO apples (title, nick, avatar, about) VALUES ("Красное яблоко", "Rapple", "/images/red_apple.jpg", "Я не знаю что можно сказать про красное яблоко. Оно как бы есть, оно как бы вкусное, ну и в общем то все."), ("Желтое яблоко", "Yapple", "/images/yellow_apple.jpg", "Пожалуй самое сладкое яблоко из всех что я пробовал. Но моим любимым яблоком остается красное."), ("Зеленое яблоко", "Gapple", "/images/green_apple.jpg","Зеленое яблоко самое кислое из всех. Я бы съел его наверное только при условии, что мне бы мне заплатили за это.");'
var connection = mysql.createConnection({
host : '127.0.0.1',
port: '3306',
user : 'root',
password : 'qwertzxc228',
database: 'threeapples'
});
connection.connect()
console.log("Running SQL seed...")
// Drop content
connection.query(drop, err => {
if (err) {
throw err
}
// Seed content
connection.query( seedQuery, err => {
if (err) {
throw err
}
console.log("SQL seed completed!")
connection.end()
})
})
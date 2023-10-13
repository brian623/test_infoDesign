var mysql = require('mysql');

//Configuración
var mysqlConn = mysql.createConnection({
    host: '127.0.0.1',
    port: '3308',
    database: 'pruebainfodesign',
    user: 'root',
    password: 'brian'
});

//Conexión
mysqlConn.connect( (err) => {
    if (err) {
        throw err;
    } else {
        console.log('Conexión a DB MYSQL exitosa');
    }
});

//Exportación
module.exports = mysqlConn;
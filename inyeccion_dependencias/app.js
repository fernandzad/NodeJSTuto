// app.js - SIN INYECCION DE DEPENDENCIAS
// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const userController = require('./lib/userController');

// app.use(bodyParser.json());

// app.get('/usersserController.findUsers');
// app.post('/usersserController.saveUser');

// app.listen(3000, function () {
//     console.log('Servidorcionando correctamente');
// });

// module.exports = app;

// app.js - CON INYECCION DE DEPENDENCIAS
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
debugger;
const db = require('./lib/db')('example-db');
const userService = require('./lib/userService')(db);
const userController = require('./lib/userController')(userService);

app.use(bodyParser.json());

app.get('/usersserController.findUsers');
app.post('/usersserController.saveUser');

app.listen(3000, function () {
    console.log('Servidor funcionando correctamente');
});

module.exports = app;
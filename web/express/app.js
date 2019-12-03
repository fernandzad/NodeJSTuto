const express = require('express');
const app = express();

// Uso de middlewares
// los middlewares se invocan con el método use()
let isLogged = () => false;

//Definimos una función anónima para después usarla como middleware
let logger = (request, response, next) => {
    console.log('Este es un middleware, usando use() de express');
    next();
};

//Este método de express nos permite ejecutar cierta lógica antes de procesar cualquier método de REST
//pasamos 'logger' como parámetro para que también se ejecute en la cadena de middlewares
app.use((request, response, next) => {
    if(isLogged())
        next();
    else
        response.send('No estás loggeado');
}, logger);

app.get('/:user', (request,response) => {
    response.send(`Bienvenido ${request.params.user} `);
});

app.post('/', (request,response) => {
    response.send(`Hello world! ${request.method}`);
});

app.put('/', (request,response) => {
    response.send(`Hello world! ${request.method}`);
});

app.delete('/', (request,response) => {
    response.send(`Hello world! ${request.method}`);
});

app.listen(3000, () => {
    console.log("Ejemplo de app escuchando en el puerto 3000!");
});
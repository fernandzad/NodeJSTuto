const express = require('express');
const app = express();

// Uso de middlewares
// los middlewares se invocan con el método use()
let isLogged = () => true;
let logger = (request, response, next) => {
    console.log('Este es un middleware, usando use() de express');
    next();
};
app.use((request, response, next) => {
    if(isLogged())
        next();
    else
        response.send('No estás loggeado');
}, logger);

app.get('/:user', (req,res) => {
    res.send(`Bienvenido ${req.params.user} `);
});

app.post('/', (req,res) => {
    res.send(`Hello world! ${req.method}`);
});

app.put('/', (req,res) => {
    res.send(`Hello world! ${req.method}`);
});

app.delete('/', (req,res) => {
    res.send(`Hello world! ${req.method}`);
});

app.listen(3000, () => {
    console.log("Ejemplo de app escuchando en el puerto 3000!");
});
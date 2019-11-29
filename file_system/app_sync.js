const fs = require('fs');

console.log('Iniciando prueba síncrona');

//Finción síncrona
let data = fs.readFileSync('data_sincrono.txt','utf-8');
console.log(data);

console.log('Finalizando prueba síncrona');
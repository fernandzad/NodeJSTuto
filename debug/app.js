const extra = require('./extra');
//Nodemon nos permite cambiar el valor de las variables a medida que debuggeamos
let curso = 'node';

curso = 'node.js';
curso = 'node.js otro';

console.log(curso);

x = () => {
    return 1+1;
};

console.log(x());
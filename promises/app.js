let promise = require('./promise');
let argv = require('yargs').argv;
let snumeros = argv.numeros;

let numeros = snumeros.split(' ');
debugger;
let response = promise.calcular(parseInt(numeros[0]),parseInt(numeros[1]))
                .then((response) => {
                    console.log(response);
                })
                .catch((e) => {
                    console.log(e);
                });

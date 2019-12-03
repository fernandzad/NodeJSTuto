let promise = require('./promise');
let argv = require('yargs').argv;
let snumeros = argv.numeros;
debugger;
let numeros = snumeros.split(' ');

let response = promise.calcular(numeros[0],numeros[1])
                .then((response) => {
                    console.log(response);
                })
                .catch((e) => {
                    console.log(e);
                });

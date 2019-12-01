const _ = require('lodash');

let identificador = {'nombre' : 'Jaime'};
let apodo = {'apodo' : 'Mitocode'};

let z = [
    { nombre: 'Adrián', apellido : 'Fernández', edad : 25},
    { nombre: 'Daniel', apellido : 'Cervantes', edad : 37}
];

//Concatenación de JSON
let id_apodo = _.assign(identificador,apodo);
//console.log(id_apodo);

// 
// Sustitución de ciclo for
// params = (contenedor, criterios de búsqueda)
//
_.times(3, () => console.log('Ciclo for con lodash'));

//Búsqueda de elementos
let encontrado = _.find(z, {nombre : 'Sarahí'}, (error) => {
    if(error)
        console.log('Hubo algún error');
});
//Retorna undefined
console.log(encontrado);
// lib/db.js - SIN INYECCION DE DEPENDENCIAS
// const level = require('level');
// const sublevel = require('level-sublevel');

// module.exports = sublevel(
//     level('example-db', { valueEncoding: 'json' })
// );

// lib/db.js - CON INYECCION DE DEPENDENCIAS
const level = require('level');
const sublevel = require('sublevel');

module.exports = function(dbName){
    return sublevel(
        level(dbName, { valueEncoding: 'json' })
    );
};
// lib/userService.js - SIN INYECCION DE DEPENDENCIAS
// const db = require('./db');
// const users = db.sublevel('users');

// module.exports = {
//     findUsers: function () {
//         return users.get();
//     },
//     saveUser: function (user) {
//         return users.save(user);
//     }
// };

// lib/userService.js - CON INYECCION DE DEPENDENCIAS
module.exports = function (db) {
    const users = db.sublevel('users');

    return {
        findUsers: function () {
            return users.get();
        },
        saveUser: function (user) {
            return users.save(user);
        }
    };
}
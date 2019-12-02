// lib/userController.js - SIN INYECCION DE DEPENDENCIAS
// const userService = require('./userService');

// module.exports = {
//     findUsers: function (req, res, next) {
//         userService.findUsers()
//             .then(findUsersOk)
//             .catch(handleError);
//     },
//     saveUser: function (req, res, next) {
//         userService.saveUser(req.body)
//             .then(saveUserOk)
//             .catch(handleError);
//     }
// }

// lib/userController.js - CON INYECCION DE DEPENDENCIAS
module.exports = function (userService) {
    return {
        findUsers: function (req, res, next) {
            userService.findUsers()
                .then(findUsersOk)
                .catch(handleError);
        },
        saveUser: function (req, res, next) {
            userService.saveUser(req.body)
                .then(saveUserOk)
                .catch(handleError);
        }
    };
}
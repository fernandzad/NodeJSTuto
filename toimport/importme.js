console.log('You\'re in other file');

let random_number = 23567;

function saludo1(){
    console.log('Este es el saludo número 1');
}

// module.exports.random_number = random_number;
// module.exports.saludo1 = saludo1();
// module.exports.saludo2 = function(){
//     console.log('Este es el saludo número 2');
// };

module.exports = {
    random_number : random_number,
    saludo1: function (){
        console.log('Este es el saludo número "funcion anónima"');
    } 
};
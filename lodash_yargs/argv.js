
const argv = require('yargs').argv;
//console.log(argv.argv); //Caso en el que no se referencia en la declaración
console.log(argv);
let comando = process.argv;

//Imprime uno a uno los elementos devueltos por argv
comando.forEach(element => {
    //console.log(element);
});

//Imprime toda la colección de argumentos
//console.log(comando);

if(argv.usuario === 'Ad'){
    console.log('Usuario encontrado!');
}else{
    console.log('Usuario no encontrado :(');
}
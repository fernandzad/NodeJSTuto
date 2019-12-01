
let comando = process.argv;

//Imprime uno a uno los elementos devueltos por argv
comando.forEach(element => {
    console.log(element);
});

//Imprime toda la colección de argumentos
console.log(comando);
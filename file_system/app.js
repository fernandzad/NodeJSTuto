
const fs = require('fs');

console.log('Iniciando prueba asíncrona');

//Finción asíncrona
fs.readFile('data.txt','utf-8' ,(error, data) => {
    if(error){
        console.log(`Error ${error}`);
    }else{
        console.log(data);
    }

});

console.log('Finalizando prueba asíncrona');

// Eliminar un archivo
// fs.unlink('data2.txt', (error) => {
//     if(error) throw error;
// });


//copiar en data3.txt lo que hay en data.txt
fs.createReadStream('data.txt').pipe(fs.createWriteStream('data3.txt'));

fs.readdir('../old/',(error, files) => {
    if(error) throw error;
    files.forEach( file => {
        console.log(file);
    });
});


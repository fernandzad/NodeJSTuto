const os = require('os');
const fs = require('fs');

let cpu = os.cpus();
let so = os.platform();
let user = os.hostname();
//console.log(cpu);
// console.log(so);
// console.log(user);

fs.appendFile('prueba.txt','Información del CPU: ' + JSON.stringify(cpu), function(error){
    if(error){
        console.log('Existió un error!'); 
    }
});
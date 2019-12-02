const request = require('request');
const argv = require('yargs').argv;
const fs = require('fs');

let direccion = argv.direccion;
let url = `http://maps.googleapis.com/maps/api/geocode/json=address=${direccion}`;


let body = request({
    url : url,
    json: true
}, (error, response, body) => {
    if(error) 
        console.log(error);

    let jsonBody = JSON.stringify(body, undefined, 1);
    console.log(jsonBody);
    return body;
});

fs.appendFile('map.html', html, (error) =>{
    if(error){
        console.log('Hubo un error');
        throw error;
    }
});


const fetch = require('node-fetch');

fetch('https://api.github.com/users/Jesusfer2575').then((response) => {
    return response.json();
}).then((json) => {
    console.log(json);
});


let call = fetch('https://api.github.com/users/Jesusfer2575/followers');
call.then((response) => {
    return response.json();
}).then((json) => {
    console.log(json);
});


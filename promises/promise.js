
let calcular = (numero1, numero2) => {
    return new Promise((response, reject) => {
        setTimeout( () => {
            let suma = numero1 + numero2;
            if(suma < 30){
                response(suma);
            }else{
                reject('Error, suma excedida');
            }
        }, 2000);
    });
};

module.exports = {
    calcular : calcular
};
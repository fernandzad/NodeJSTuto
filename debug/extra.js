
let mensaje = 'Debugueando ando!';

// correr el programa como node inspect miapp.js
// siguiente linea n
// la palabra reservada debugger; nos permite poner breakpoint, tenemos que usar
// dentro de  node inspect miapp.js
// la letra c para ir directo a la línea breakpoint

function saludar(){
    console.log(mensaje);
}

module.exports = {
    saludar : saludar 
};
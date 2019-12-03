
let mensaje = 'Debugueando ando!';

// correr el programa como node inspect miapp.js
// siguiente linea n
// la palabra reservada debugger; nos permite poner breakpoint, tenemos que usar
// dentro de  node inspect miapp.js
// la letra c para ir directo a la línea breakpoint
// repl nos permite tipear el nombre de la variable para ver su contenido

function saludar(){
    console.log(mensaje);
}

module.exports = {
    saludar : saludar 
};
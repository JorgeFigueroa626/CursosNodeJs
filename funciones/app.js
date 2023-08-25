/////////////////////////////////////////////////////////////
//////////////////////EJEMPLO 1

//LLAMAMOS O IMPORTAMOS LA FUNCION DEL MODULO SALUDO (OPC 1)
//const saludo = require("./saludo.js");

//ESPECIFICAMOS QUE FUNCION LLAMAMOS (SE PUEDE AGREGAR MAS FUNCIONES CON ',') O IMPORTAMOS DEL MODULO SALUDO (OPC 2)
//const {saludarMundo, saludar} = require("./saludo.js");

//EXPECIFICAMOS LAS FUNCIONES (OPC 1)
/*
console.log(saludo.saludar("Jorge"));
console.log(saludo.saludarMundo());
*/

//LLAMAMOS SOLO A LA FUNCIONES (OPC 2)
/*
console.log(saludar("Jorge"));
console.log(saludarMundo());
*/
//////////////////////////////////////////////////////////////
/////////////////////////TIPO DE CONSOLE
/*
console.log("hola");
console.error("error");
console.warn("hola")

///MODULO PROCESS
console.log(process.env); //CARACTERISTICA, COMPONENTES
console.log(process.argv); //ARGUMENTO
console.log(process.argv[2]); //VER ARGUMENTO EN POSICION 2 DE ARRAY
console.log(process.memoryUsage()); //VER USO DE MEMORIA
*/

//////////////////////////////////////////////////////////
////////////////INFORMACION DEL SISTEMA OPERATIVO OS
/*
const os = require('os');
console.log(os.type()); ///TIPO DE OS
console.log(os.homedir()); //EL DIRECTORIO DEL USUARIO
console.log(os.uptime()); //TIEMPO DE EJECUCION EN SEG
console.log(os.userInfo()); //INFORMACION DEL USUARIO
*/

/////////////////////////////////////////////////////////////
////////////////SETTIMEOUT, FUNCION DE RETRASO, COMO UN CRONOMETRO
/*
function saludar(nombre){
    console.log(`Hola ${nombre}`);
}
//funcion, invocamos la funcion, tiempo 2seg, argumento(pueden ser varios separados por ',')
setTimeout(saludar,2000,'Jorge');
*/

/////////////////////////////////////////////////////////////
////////////////SETIMMEDIATE, SE EJCUTA A LO ULTIMO
/*
function saludar(nombre){
    console.log(`Hola ${nombre}`);
}
//funcion de maxima prioridad saludar, pero a lo ultimo
consoloe.log("hola");
setImmediate(saludar,'Jorge');
consoloe.log("hola");
*/

/////////////////////////////////////////////////////////////
////////////////SETINTERVAL, FUNCION SE EJECUTA INFINITAMENTE DESPUES DE CIERTO TIEMPO, PERO PODES INTERUNPIR
/*
function saludar(nombre){
    console.log(`Hola ${nombre}`);
}
//funcion, invocamos la funcion, tiempo 2seg, argumento(pueden ser varios separados por ',')
//FUNCION SE EJECUTA INFINITAMENTE DESPUES DE CIERTO TIEMPO, PERO PODES INTERUNPIR
setInterval(saludar,2000,'Jorge');
*/

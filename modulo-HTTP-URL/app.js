
//////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////MODULO DE HTTP

//CREAR UN PEQUEÑO SERVIDOR
/*
//IMPORTAMOS EL MODULO HTTP
const http = require('http');

//CREAMOS EL SERVIDOR
const servidor = http.createServer((req,res)=>{
    //ENVIAMOS UNA RESPUESTA AL CLIENTE
    res.end('Hola Mundo');
});

//CREAMOS EL PUERTO
const puerto = 3000;

//ESCUCHA EN QUE PUESTO ESTA
servidor.listen(puerto, ()=>{
    console.log(`El servidor esta escuchando en http://localhost:${puerto}`);
});
*/

//CREAR UN PEQUEÑO SERVIDOR, PARA VER LOS OBJETO Y PROPIEDADES
/*
//IMPORTAMOS EL MODULO HTTP
const http = require('http');

//CREAMOS EL SERVIDOR
const servidor = http.createServer((req,res)=>{
    //peticiones
    console.log('===> res(respuesta)');
    //objetos, propiedades
    console.log(res.statusCode);
    //ENVIAMOS UNA RESPUESTA AL CLIENTE
    res.end('Hola Mundo');
});

//CREAMOS EL PUERTO
const puerto = 3000;

//ESCUCHA EN QUE PUESTO ESTA
servidor.listen(puerto, ()=>{
    console.log(`El servidor esta escuchando en http://localhost:${puerto}`);
});
*/


//////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////MODULO DE URL
/*
const miURL = new URL('http://www.ejemplo.org/cursos/programacion?ordenar=visitar&nivel=1');

console.log(miURL.hostname); //www.ejemplo.org
console.log(miURL.pathname); //cursos/programacion
console.log(miURL.searchParams); //ordenar => visitar, nivel => 1
console.log(miURL.searchParams.get('ordenar')); //Obtener el valor de ordenar => visitar
console.log(miURL.searchParams.get('nivel')); //Obtener el valor de nivel => 1
*/


//////////////////////////////////////////////////////////////////////////////////
//////////////////////MODULO NPM  -  PAQUETE-JSON

/////COMO CREAR UN PAQUETE COMO 'package.json'
//CREAR UNA CARPETA, QUE VA SER EL NOMBRE DE NUESTRO PAQUETE O PODES CAMBIARLO EN CMD
//IR AL CAMPETA
//ABRIL EN LA TERMINAL, LA CARPETA CREADA

///PRIMERO LO CONFIGURAR EL PAQUETE  (OPC 1)
//$ npm init
//ESTABELCEMOS LAS DESCRIPCION Y CONFIGURAMOS

///COMO CREAR UN PAQUETE YA CONFIGURADO (OPC 2)
//$ npm init --yes

///////////COMO LEER O VER DATOS DE UN ARCHIVO JSON
//CONVERTIR DE UN ARCHIVO JSON --> JS
/*
const datos = require('./paquete-json/package.json');
console.log(datos);
//VER UN DATOS NOMBRE JS
console.log(datos.name);
*/

////////////////COMO LEER O VER DATOS UN ARCHIVO JSON
//CONVERTIR DE UN ARCHIVO JS --> JSON
/*
let datosJS = {
    "name": "paquete-json",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
}
//CONVERTIR DE JS A JSON
//objeto -> cadena de caracteres
//cadena de caracteres en formatos JSON
let datosJson = JSON.stringify(datosJS);
console.log(datosJson);
console.log(typeof datosJson);

//CADENA DE CARACTERES --> OBJETO
let datosObjeto = JSON.parse(datosJson);
console.log(datosObjeto);
console.log(typeof datosObjeto);
//MOSTRAR O USAR LA INFOMACION 
console.log(datosObjeto.name);
*/

/////////////////////////////////////////
////////////INSTALAR Y DESINTALAR PAQUETES

//$ npm install <paquete>         //instalar el paquete
//$ npm uninstall <paquete>       //desintalar el paquete
//$ npm install <paquete>@4.15.2  ///instalar una version especifica de un paquete
//$ npm install <paquete> --save-dev   ///instalar una dependencia del paquete  "devDependencies"

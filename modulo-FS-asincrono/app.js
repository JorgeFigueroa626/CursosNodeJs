
//////////////////////////////////////////////////////////////////////////////
////////////////////MODULO FS
////////////////LEER ACHIVO HTML, EN ASINCRONO
/*

/////////////////////////MODO NO ASINCRONO

const fs = require('fs');
//LEEMOS EL ARCHIVOS
fs.readFile('index.html','utf-8', (err,contenido)=>{
    if (err) {
        console.log(err);
        //DETALLE DEL ERROR
        //throw err;
    }else{
        console.log(contenido);
    }
});

////////////////MODO SI ASINCRONO

console.log("ANTES DE LEER EL ARCHIVO");

const fs = require('fs');
//LEEMOS EL ARCHIVOS
const datos = fs.readFileSync('index.html','utf-8');
console.log(datos);

console.log("DESPUES DE LEER EL ARCHIVO");

*/
////////////////CAMBIAR DE NOMBRE EL ACHIVO HTML, EN ASINCRONO
/*

const fs = require('fs');
//CAMBIAMOS EL ARCHIVOS
fs.renameSync('index.html','main.html');

console.log("DESCPUES DE CAMBIAR NOMBRE DEL ARCHIVO");
*/

////////////////AGREGAR CONTENIDO EN ACHIVO HTML, AL FINAL, EN ASINCRONO
/*
const fs = require('fs');
//AGREGAMOS EL ARCHIVOS
fs.appendFileSync('main.html','<p>AGREGADO</p>');

console.log("DESCPUES DE AGREGAR UN ARCHIVO");
*/

////////////////REMPLAZAR O MODIFICAR TODO EL ACHIVO HTML, EN ASINCRONO
/*
const fs = require('fs');
//REMPLAZA EL ARCHIVOS
fs.writeFileSync('main.html','SE REMPLAZA TODO EL CONTENIDO, TAMBIEN SE PUEDE PONER HTML');

console.log("DESCPUES DE REMPLAZAR EL ARCHIVO");
*/

////////////////ELIMINAR EL ACHIVO HTML, EN ASINCRONO
/*
const fs = require('fs');
//ELIMINAR EL ARCHIVOS
fs.unlinkSync('main.html');

console.log("DESCPUES DE ELIMINAR EL ARCHIVO");
*/

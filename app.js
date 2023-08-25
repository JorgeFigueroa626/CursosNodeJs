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

//////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////MODULO  DE EVENTO
/*
//EVENTO DE REALIZAR UNA COMPRA
const EventEmitter  = require('events');

const emisorProducto = new EventEmitter();

///REALIZA EL EVENTO DE LA COMPRA, PODES AGREGAR PARAMETROS
emisorProducto.on('compra', ()=>{
    console.log("Se realiso la compra")
});

//EMITIMOS LA COMPRA, PODES HACERLO VARIAS VECES
emisorProducto.emit('compra');
*/

//////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////MODULO DE PROMESA

/*
///ejemplo si y no SE CUMPLE LA PROMESA
const cumplidaPromesa = false;

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (cumplidaPromesa) {
      resolve("Promesa cumplida");
    } else {
      reject("Promesa no cumplida");
    }
  }, 3000);
});

///MANEJO DE LA PROMESAS
const promesaCumplida = (valor) => {
  console.log(valor);
};

const promesaNoCumplida = (valor) => {
  console.log(valor);
};
//LAMAMOS LA PRMESA
 miPromesa.then(promesaCumplida,promesaNoCumplida);
 */

///PROMESA SOBRE EL PEDIDO DE COMIDA
/*
const estatuPedido = () =>{
  return Math.random() < 0.8;
}

const pedidoComida = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if (estatuPedido()) {
            resolve('Pedido exitoso, comida enpath');
        }else{
            reject('Ocurio un erro, intete nuevamente');
        }
    },3000);
});
*/
///MAEJO DEL ESTADO DEL PEDIDOS (OPC 1)
/*
const comidapath = (valor)=>{
    console.log(valor);
}
const comindaNopath = (valor)=>{
    console.log(valor);
}
pedidoComida.then(comidapath, comindaNopath);
*/

///MAEJO DEL ESTADO DEL PEDIDOS (OPC 2)
/*
pedidoComida
    .then((comidapath)=>{
        console.log(comidapath);
    })
    .then(null, (comindaNopath)=>{
        console.log(comindaNopath);
    });
*/

///MAEJO DEL ESTADO DEL PEDIDOS (OPC 3)
/*
const comidapath = (valor)=>{
    console.log(valor);
}
const comindaNopath = (valor)=>{
    console.log(valor);
}
pedidoComida.then(comidapath).catch(comindaNopath);
//////o tambien usa "catch"
pedidoComida
    .then((comidapath)=>{
        console.log(comidapath);
    })
    .catch((comindaNopath)=>{
        console.log(comindaNopath);
    });
*/

///CREAMOS UNA PROMESA, DE ORDENA O PIDE UN PRODUCTO
/*
function ordenarProducto(producto) {
  return new Promise((resolve, reject) => {
    console.log(`El producto de compra es ${producto} para mi`);
    setTimeout(() => {
      if (producto === "taza") {
        resolve("Ordenaste una taza para comprar");
      } else {
        reject("Producto no disponible");
      }
    }, 2000);
  });
}

//procesamos la Orden del pedido del producto
function procesarPromesa(respuestas) {
  return new Promise((resolve) => {
    console.log("Procesando respuesta...");
    console.log(`La respuesta fue: ${respuestas}`);
    setTimeout(() => {
      resolve("Gracias por la compra disfrute del producto");
    }, 4000);
  });
}
*/
///PEDIMOS EL PRODUCTO DE COMPRA (OPC 1)
/*
ordenarProducto("taza")
  .then((respuestas) => {
    console.log("Respuesta recibida");
    console.log(respuestas);
    return procesarPromesa(respuestas);
  })
  .then((respuestaProcesada) => {
    console.log(respuestaProcesada);
  })
  .catch((respuestaNoProcesada) => {
    console.log(respuestaNoProcesada);
  });
  */

///PEDIMOS EL PRODUCTO DE COMPRA EN MODO ASINCRONO (OPC 2)
/*
async function procesarProducto(producto) {
  try {
    const respueta = await ordenarProducto(producto);
    console.log("Respueta recibida");
    const respuestaProcesada = await procesarPromesa(respueta);
    console.log(respuestaProcesada);
  } catch (erro) {
    console.log(erro);
  }
}
procesarProducto('taza');
*/

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

//////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////MODULO DE ROUTING - API

//exportamos los modulos
const http = require("http");
const cursos = require("./cursos");

//CREAMOS EL SERVIDOR
const servidor = http.createServer((req, res) => {
  //LLAMAMOS EL METODO
  const {method} = req;
  //ESTABLECEMOS LA PETICIONES
  switch (method) {
    case "GET":
        return manejarSolicitudGET(req, res);
    case "POST":
        return manejarSolicitudPOST(req, res);
    case "PUT":
        return manejarSolicitudPUT(req, res);      
    case "DELETE":
        return manejarSolicitudDELETE(req, res);      
    default:
      console.log(`El metodo no puede ser manejado por el servidor ${method}`);
  }
});

//MANEJA LOS pathS DE LAS DIRECIONES
function manejarSolicitudGET(req, res) {
  //LLAMAMOS LA URL
  const path = req.url;

  //CODIGO DE ESTADO POR DEFECTO, SI QUIERES LO BORAR LA LINEAS DE LOS STATUSCODE
  //console.log(res.statusCode); //200
 
  //CONDICIONAMOS LA DIRECCION, EN CUAL ESTAS
  if (path === "/") {
    res.statusCode = 200;
    return res.end(
      'Bienvenido a mi servidor y API creado con NODES.JS'
    );
  } else if (path === "/cursos") {
    res.statusCode = 200;
    //CONVERTIMOS EL OBJETO DEL ARCHIVO CURSOS EN JS y LO LLAMAMOS
    res.end(JSON.stringify(cursos.infoCursos));
  } else if (path === "/cursos/programacion") {
    res.statusCode = 200;
    //CONVERTIMOS EL OBJETO DEL ARCHIVO CURSOS EN JS y LO LLAMAMOS EL DE PROGRAMACION
    return res.end(JSON.stringify(cursos.infoCursos.programacion));
  }

//   //SI NO ENCUENTRA LA DIRECION
//   res.statusCode = 404;
//   return res.end("EL RECURSO SOLICITADO NO EXISTE...");
}

function manejarSolicitudPOST(req, res){
    const path = req.url;
    if (path === '/cursos/programacion') {
        
        //COMO UTILIZAR LOS DATOS, LA INFORMACION
        let cuerpo ='';
        //obtenemos los datos
        req.on('data', contenido =>{
            cuerpo += contenido.toString();
        });

        req.on('end', ()=>{
            console.log(cuerpo);
            console.log(typeof cuerpo);

            //CONVERTIR EL OBJETO A JS
            cuerpo = JSON.parse(cuerpo);
            //ACCEDERT A SUS PROPIEDADES
            console.log(cuerpo.titulo);
            res.end('El servidor esta escuchando una solicitud PUT para /cursos/programacion');
            
        });
        //return res.end('El servidor esta escuchando una solicitud POST para /cursos/programacion');
    }
}

function manejarSolicitudPUT(req, res){
    const path = req.url;
    if (path === '/cursos/programacion') {
        return res.end('El servidor esta escuchando una solicitud PUT para /cursos/programacion');
    }
}
function manejarSolicitudDELETE(req, res){
    const path = req.url;
    if (path === '/cursos/programacion') {
        res.statusCode = 202;
        return res.end('El servidor esta escuchando una solicitud DELETE para /cursos/programacion');
    }
}
//CREAMOS EL PUERTO
const puerto = 3000;

//ESCUCHA EN QUE PUESTO ESTA
servidor.listen(puerto, () => {
  console.log(`El servidor esta escuchando en http://localhost:${puerto}...`);
});


/////////////////////////////////////////////////////////////////////////////
///////COMO ACTULIZAR UN SERVIDOR AUTOMATICAMENTE, SIN TENER VOLVER A LEVENTAR, ASIENDO CAMBIEN EN LA ATREA
//$ npm install -g nodemon ///INTALAMOS EL SERVIDOR DE ACTULIZADOR
//CREA UN SERVIDOR, YA SEA GRANDE O PEQUEÑO
//$ nodemon app.js  ///levantamos el servidor (si tiene erro en PowerShell, puede intentar en otro tipo de cmd Commond Prompt)


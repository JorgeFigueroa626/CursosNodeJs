
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


const express = require("express");
//OBTENER LOS CURSO  DE PROGRA DIRECTAMENTE
const {programacion} = require('../basedatos/basedatos.js').infoCursos;

//ROUTER DE LA API
const routerApiProgrmacion = express.Router();

//MIDDLEWARE -->EJECUTA DESPUES DE RECIBIR LA SOLICITUD Y ANTES DE ENVIAR UN RESPUESTA 
//PROCESAE LA SOLICITUD DE LA INFORMACION, EN FORMATO JSON, EN CUERPO DE BODY
routerApiProgrmacion.use(express.json());

///////////////////////GET///////////////////////////////

//VER LA INFORMACION DE BD DE PROGRAMACION
routerApiProgrmacion.get("/", (req, res) => {
  //ENVIAR LA INFORMACION DE BD
  res.send(programacion);
  //CONVERTI EN FORMATO JSON
  //res.send(JSON.stringify(infoCursos.programacion));
});

//VER LA INFORMACION DE BD DEL CURSO PROGRAMACION FILTRO DE BUSQUEDA DE LENGUAJE
routerApiProgrmacion.get("/:lenguaje", (req, res) => {
  const lenguaje = req.params.lenguaje;
  const resultado = programacion.filter(
    (base) => base.lenguaje === lenguaje
  );
  if (resultado.length === 0) {
    return res
      .status(404)
      .send(`No se encontraron curso con el lenguaje ${lenguaje}`);
  }
  //AGREGAMOS VALORE EN LA URL, Y ORDENAMOS DE ASC
  if (req.query.ordenar === "vistas") {
    ///OBTIENE EL VALOR Y LO ORDENAMOS DE ASC (d.vista - a.vista)  //DESC (a.vista - b.vista)
    return res.send(resultado.sort((a, b) => b.vistas - a.vistas));
  }

  res.send(resultado);
});

//VER LA INFORMACION DE BD DEL CURSO PROGRAMACION FILTRO DE BUSQUEDAs CON VARIOS PARAMETRO
routerApiProgrmacion.get("/:lenguaje/:nivel", (req, res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;
  const resultado = programacion.filter(
    (base) => base.lenguaje === lenguaje && base.nivel === nivel
  );

  if (resultado.length === 0) {
    res
      .status(404)
      .send(
        `No se encontraron curso con el lenguaje ${lenguaje}, ni el nivel ${nivel}`
      );
  }
  res.send(resultado);
});

///////////////////////POST///////////////////////////////
//AGREGAR
routerApiProgrmacion.post('/', (req,res)=>{
    //extraemos la solicitud
    let cursosNuevo = req.body;
    //agregamos la informacion
    programacion.push(cursosNuevo);
    //enviamos la informacions
    res.send(programacion);
});

///////////////////////PUT///////////////////////////////
//ACTULIZAR O MODIFICAR
routerApiProgrmacion.put('/:id', (req, res)=>{
    const cursoActulizado = req.body;
    const id = req.params.id;
    const indice = programacion.findIndex(datos => datos.id == id);
    if (indice >= 0) {
        programacion[indice]=cursoActulizado;
    }

    res.send(programacion);

});

//ACTULIZAR DATOS ESPECIFICOS
routerApiProgrmacion.patch('/:id', (req, res)=>{
    const datoActulizar = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(datos => datos.id == id);

    if (indice>=0) {
        const datoModificar = programacion[indice];
        Object.assign(datoModificar,datoActulizar);
    }
    res.send(programacion);
});

///////////////////////DELETE///////////////////////////////
routerApiProgrmacion.delete('/:id', (req,res)=>{
    const id = id.params.id;
    const indice = programacion.findIndex(dato => dato.id == id);
    if (indice>=0) {
        //ELIMINAMOS DEL AREGLO
        programacion.splice(indice,1);
    }
    res.send(programacion);
});


//exportar el router PROGRAMACION
module.exports = routerApiProgrmacion;
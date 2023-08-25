const express = require("express");
//OBTENER LOS CURSO  DE MATEMA DIRECTAMENTE
const {matematicas} = require('../basedatos/basedatos.js').infoCursos;

//EL ROUTER
const routerApiMatematicas = express.Router();

//VER LA INFORMACION DE BD DE MATEMATICAS
routerApiMatematicas.get("/", (req, res) => {
  //ENVIAR LA INFORMACION DE BD
  res.send(matematicas);
  //CONVERTI EN FORMATO JSON
  //res.send(JSON.stringify(infoCursos.matematicas));
});

//VER LA INFORMACION DE BD DEL CURSO MATEMATICA FILTRO DE BUSQUEDA DE TEMA
routerApiMatematicas.get("/:tema", (req, res) => {
  const tema = req.params.tema;
  const resultado = matematicas.filter((base) => base.tema === tema);

  if (resultado.length === 0) {
    return res
      .status(404)
      .send(`No se pudo encontrar del curso el tema de ${tema}`);
  }

  res.send(resultado);
});

//exportar el router matematicas
module.exports = routerApiMatematicas;
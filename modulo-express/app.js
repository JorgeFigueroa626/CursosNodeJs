//////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////MODULO DE EXPRESS, ROUTER

//llamamos al modulo expres
const express = require('express');
const app = express();

const {infoCursos} = require('./basedatos/basedatos.js');

//ROUTENGS
//RENOMBRAMOS UNA URL DE UNA API, EN UNA CONSTANTE  
//PROGRAMCION
const routerApiProgrmacion = require('./routers/programacion.js')
app.use('/api/basedatos/programacion', routerApiProgrmacion);
//MATEMATICAS
const routerApiMatematicas = require('./routers/matematicas.js')
app.use('/api/basedatos/matematicas', routerApiMatematicas);

//(OPC 1) '/api/basedatos/programacion'
//(OPC 2)  routerApiProgrmacion


//ROUTING
app.get('/', (req, res)=>{
    res.send('Servidor en linea...');
});

//VER TODA LA BD O INFORMACION
app.get('/api/basedatos', (req,res)=>{
    //ENVIAR LA INFORMACION DE BD
    res.send(infoCursos);
    //CONVERTI EN FORMATO JSON
    //res.send(JSON.stringify(infoCursos));
});

//SE LE ASIGNA AUTOMATICAMENTE UN PUERTO O PUDEMOS ASIGAR MANUALMENTE UN PUERTO
const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, ()=>{
    console.log(`El servidor en linear puesrto http://localhost:${PUERTO}...`)
});
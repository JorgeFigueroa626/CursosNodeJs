
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

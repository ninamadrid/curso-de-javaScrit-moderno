"use strict";
const producto = {
    nombre : " Monitor 20  pulgadas",
    precio :300,
    disponible: true
}
const medidas = {
    peso :'lks',
    medidas:'1m'
}
//Object.seal(producto);
//Object.freeze(producto);
//producto.disponible = false;
//producto.imagen = "imagen.jpg";
//const nombreProducto = tablet;
//delete producto.precio;
const resultado = Object.assign(producto, medidas);
const resultado2= { ...producto, medidas}
//console.log(producto);
//console.log(Object.isSealed(producto));
console.log(resultado);
console.log(resultado2);
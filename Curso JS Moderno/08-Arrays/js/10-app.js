const carrito = [
    {nombre :" Monnitor", precio : 300},
    {nombre :" TEclado", precio : 200},
    {nombre :" Mause", precio : 100},
    {nombre :" Audifonos", precio : 350},
    {nombre :" Celular", precio : 500},

]
const nuevoArreglo = carrito.map(function(producto){
    return `${producto.nombre} - precio: ${producto.precio}`;
})

const nuevoArreglo2 = carrito.forEach(function(producto){
    return `${producto.nombre} - precio: ${producto.precio}`;
})

console.log(nuevoArreglo);
console.log(nuevoArreglo2);
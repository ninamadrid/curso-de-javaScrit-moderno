const carrito = [
    {nombre :" Monnitor", precio : 300},
    {nombre :" TEclado", precio : 200},
    {nombre :" Mause", precio : 100},
    {nombre :" Audifonos", precio : 350},
    {nombre :" Celular", precio : 500},

]
for (let i= 0; i < carrito.length; i++){
    console.log(`${carrito[i].nombre} - precio: ${carrito[i].precio}`);
}

carrito.forEach( function(producto){
    console.log(`${producto.nombre} - precio: ${producto.precio}`);
})

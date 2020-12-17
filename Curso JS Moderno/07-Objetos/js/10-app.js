const producto = {
    nombre : " Monitor 20  pulgadas",
    precio :300,
    disponible: true
}
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}
const producto2= new Producto('monitor','pulgadas',true);
console.log(producto2);
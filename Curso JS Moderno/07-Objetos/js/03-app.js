const producto = {
    nombre : " Monitor 20  pulgadas",
    precio :300,
    disponible: true,
    informacion:{ 
        peso:'20 kg',
        medidas:{
        medida: 'mt', tamaño:'kilodit'
        },
        fabricacion:{
            pais:'china'
        }
    }
    //imagen : "imagen.jpg",
} 
/*producto.imagen = "imagen.jpg";
delete producto.disponible;
console.log(producto);*/
// destructuring
const { nombre, precio , disponible} = producto;
//const {} = precio;
console.log(nombre);
console.log(precio, nombre, disponible, producto.informacion);
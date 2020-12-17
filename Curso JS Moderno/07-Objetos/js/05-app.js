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
const {nombre, informacion, informacion:{fabricacion}} = producto;

console.log(nombre);
console.log(informacion);
console.log(fabricacion);
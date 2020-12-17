const producto = {
    nombre : " Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}
// destruturing
const {nombre} = producto;
console.log(nombre);

//destructuring con arreglos
const numeros = [10,20,30,40,50];
const [primero]= numeros;
console.log(primero);
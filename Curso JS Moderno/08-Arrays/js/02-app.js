/*const numeros = [10,20,30,40];
console.log(numeros);
console.table(numeros);
//acceder al arreglo
const meses = ['enero','febrero','marzo'];
console.log(numeros[2]);
console.table(meses);
console.table(meses[0]);
console.table(meses[1]); 
console.table(meses.length);
meses[0]= 'abril';
meses.push('julio');

for (let i=0; i < meses.length; i++){
    console.log(meses[i]);
}*/
const carrito = [];
//definir un producto
const producto = {
    nombre:'monitor 32 pulgada',
    precio : 400
}
const producto2 = {
    nombre : 'celular',
    precio : 200
}

carrito.push(producto);
carrito.push(producto2);
const producto3 ={
    nombre : 'table',
    precio : 100
}
carrito.unshift(producto3);
console.table(carrito);
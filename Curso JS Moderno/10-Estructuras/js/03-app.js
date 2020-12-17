// operadores mayor o menor  que
const dinero = 500;
const totalPagar = 500;
const tarjeta = true;

if ( dinero >= totalPagar){
    console.log('Si podemos pagar');
}else if(tarjeta){
    console.log('si puedo pagar');
}else{
    console.log('Fondos Insuficientes');
}
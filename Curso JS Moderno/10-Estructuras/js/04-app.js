// switch case
 const metododePago = 'efectivo';

 switch(metododePago){
     case 'efectivo':
         console.log(`Pagaste con efectivo ${metododePago}`);
         pagar();
         break;
     case 'cheque':
         console.log(`pagaste con ${metododePago}`);
         break;
     case 'tarjeta':
         console.log(`pagaste con ${metododePago}`);
         break;
     default:
        console.log('aun no has seleccionado un metodo de pago');
        break;     
 }
  function pagar(){
      console.log('pagando..');
  }

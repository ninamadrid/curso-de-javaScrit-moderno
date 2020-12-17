
inicarApp();

function inicarApp(){
    console.log('iniciando app...');
    segundaFuncion();
}
function segundaFuncion(){
    /*console.log('Desde la segunda funcion');*/
    usuarioAtenctificado('Dina');
}
 function usuarioAtenctificado(usuario){
     console.log('Atentificando...espere..');
     console.log(`Usuario autentificado exitosamente: ${usuario}`);

 }
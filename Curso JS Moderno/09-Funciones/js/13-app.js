const reproductor = {
    reproducir :id => console.log(`Reproduciendo cancion en el is ${id}`),
    pausar: () => console.log('pauando ..'),
    borrar: id => console.log(`Borrando canción ...${nombre}`),
    crearPlayLis: nombre => console.log(``),
    reproducirPlayList: nombre => console.log(`Reproduciendo la play list ${nombre}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`aprendiendo ${cancion}`);
    },
    
    get obtenerCancion (){
        console.lo(`${this.cancion}`);
    }
    
}
// set es para agregar valores
// y  get para obtener

reproductor.nuevaCancion = ' jshjshsj';
reproductor.obtenerCancion;
reproducir.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlayLis('heavy metal');
reproductor.reproducir('heavy metal');
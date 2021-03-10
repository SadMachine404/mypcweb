// Funcion que se ejecuta cuando la pagina se termine de cargar

window.addEventListener('load', function () {

    console.log('Pagina Cargada');

    var imagenes = [];
    var tiempo = 2000;

    imagenes[0] = 'images/a0.jpeg';
    imagenes[1] = 'images/a1.jpeg';
    imagenes[2] = 'images/a2.jpg';
    imagenes[3] = 'images/a3.jpg';
    imagenes[4] = 'images/a4.jpg';

    indiceImagenes = 0;

    function cambiarImagenes() {

        document.slider.src = imagenes[indiceImagenes];

        if(indiceImagenes < 4){
            indiceImagenes ++;
        } else {
            indiceImagenes = 0;
        }
    }

    setInterval(cambiarImagenes, tiempo)
    
    
});
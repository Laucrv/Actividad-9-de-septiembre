var contador = 1;
var temporizador;

function iniciar(){
    temporizador = setInterval(rotarImagenes, 3000);
    temporizador = setInterval(parar, 0);
}

function rotarImagenes(){
    if (contador >= 10){
        contador = 0;
    }
    var img = document.getElementById('imgSlide');
    img.src = './images/img' + ++contador + '.jpg';
}
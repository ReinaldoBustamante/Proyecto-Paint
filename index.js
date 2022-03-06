var dibujo = document.getElementById('dibujito')
dibujo.addEventListener('mousemove', movimientoMouseMove)


var cuadro = document.getElementById('dibujito');
var papel = cuadro.getContext('2d');

var coordenadas = {
    xIni : 0,
    yIni : 0,
    xFin : 0,
    yFin : 0
}



function movimientoMouseMove(e)
{
    if (e.buttons == 1){
        coordenadas.xFin = e.layerX+1;
        coordenadas.yFin = e.layerY+1;
        coordenadas.xIni = e.layerX-1;
        coordenadas.yIni = e.layerY-1;
        dibujarLinea('red', coordenadas.xIni, coordenadas.yIni, coordenadas.xFin, coordenadas.yFin, papel)
    }

}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal)
    lienzo.stroke();
    lienzo.closePath();
}


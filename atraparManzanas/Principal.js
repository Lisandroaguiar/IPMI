let pantalla;
function setup() {
  createCanvas(500, 500);
  pantalla=new Pantalla();
}

function draw() {
  pantalla.dibujar();
  pantalla.actualizar();
}

function keyPressed() {
  pantalla.reiniciar();
}

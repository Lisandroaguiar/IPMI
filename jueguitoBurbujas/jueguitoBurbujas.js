let burbuja;
let burbujas;
let cantBurbujas=10;
let distanciaEntreBurbujasYmouse;
let puntos;

function setup() {
  createCanvas(500, 500);
  burbuja=new Burbuja(50, 20, 50);
  burbujas=[];
  puntos=0;

  for (i=0; i<cantBurbujas; i++) {
    burbujas[i]=new Burbuja(random(width), random(height), 50);
  }
}


function draw() {

  background(120,100,255);





  for (i=0; i<cantBurbujas; i++) {
    burbujas[i].mover();
    distanciaEntreBurbujasYmouse= dist(burbujas[i].x, burbujas[i].y, mouseX, mouseY);
    if (distanciaEntreBurbujasYmouse<50 && mouseIsPressed &&
      !burbujas[i].eliminada) {
      console.log("APRETO")
        burbujas[i].eliminar();
      puntos++;
    } else {
      burbujas[i].dibujar();
    }
  }


  text("Burbujas explotadas:"+puntos, 100, 100);
if(puntos>=10){
 text("GANASTE, PRESIONA UNA TECLA PARA REINICIAR",100,250);
}
  mouseAnteriormentePresionado=mouseIsPressed
}

function keyPressed() {
  for (i=0; i<cantBurbujas; i++) {
    puntos=0;
    burbujas[i].eliminada=false;

    burbujas[i].mover();
    burbujas[i].dibujar();
  }
}

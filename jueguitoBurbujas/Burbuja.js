class Burbuja{
constructor(x,y,tam){
this.x=x;
this.y=y;
this.tam=tam;
this.valorLinea=5;
this.eliminada=false;
}


dibujar(){
  push();
  noFill();
  stroke(255);
  if(this.eliminada){this.valorLinea=0;}
  else{this.valorLinea=5;}
  strokeWeight(this.valorLinea);
  ellipse(this.x,this.y,this.tam);

  pop();
}

mover(){

this.y++;
if(this.y>height){this.y=0}
this.x+=random(-5,5);
}



eliminar(){
this.eliminada=true;
}
}

class Canasta {

  constructor(x, y, tam) {
    this.x=x;
    this.y=y;
    this.tam=tam;
    this.valorLinea=5;
  }


  dibujar() {
    push();
    fill(120, 120, 120)
      ellipse(this.x, this.y, this.tam);

    pop();
  }

  mover() {

    if (keyIsPressed && key=='a') {
      this.x-=3;
    }

    if (keyIsPressed && key=='d') {
      this.x+=3;
    }
  }


  colisionConManzanas(x_, y_) {
    let distancia=dist(this.x, this.y, x_, y_);
    if (distancia<50) {
      return true
    }
  }
}

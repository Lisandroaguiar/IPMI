class Vida {
  constructor() {
    this.x=50;
    this.y=50;
  }

  dibujar(cantidad_) {
    this.cantidad=cantidad_;

    for (this.i=0; this.i<this.cantidad; this.i++ ) {
      push();
      fill(255,0,0);
      ellipse(this.x+20*this.i, this.y, 20, 20);
      pop();
    }
  }

  actualizar() {
  }
}

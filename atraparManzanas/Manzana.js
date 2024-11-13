class Manzana {

  constructor(x_, y_, tam_) {
    this.x=x_;
    this.y=y_;
    this.tam=tam_;
    this.opacidad=255;
    this.atrapada=false;
    this.cayo=false;
  }


  dibujar() {
    constrain(this.x, 50, width-50);

    push();
    fill(255, 0, 0, this.opacidad);
    noStroke();

    if (this.atrapada) {
      this.opacidad=0;
    } else {
      this.opacidad=255;
    }
    ellipse(this.x, this.y, this.tam);

    pop();
  }

  mover() {

    this.y++;
    if (this.y > height + this.tam * 2) {
      this.y = random(-50, -100);
      this.cayo = false; 
    }

  }



  eliminar() {
    this.atrapada=true;
  }

  reiniciar(x_, y_, tam_) {
    this.x=x_;
    this.y=y_;
    this.tam=tam_;
    this.opacidad=255;
    this.atrapada=false;
    this.cayo = false; 
  }

  perderVida() {

    if (this.y>height) {
      return true
    }
  }

  haCaido() {
    if (this.y > height && !this.cayo && !this.atrapada) {
      this.cayo = true; 
      return true;
    }
    return false;
  }
}

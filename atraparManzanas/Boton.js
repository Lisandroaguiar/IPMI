class Boton {

  constructor(x_, y_, tamX_, tamY_) {
    this.x=x_;
    this.y=y_;
    this.tamX=tamX_;
    this.tamY=tamY_;
  }

  dibujar() {
    push();
    rectMode(CENTER);
    if (mouseX<this.x+this.tamX/2 && mouseX>this.x-this.tamX/2 && mouseY> this.y-this.tamY/2 && mouseY< this.y+this.tamY/2) {
      fill(0, 255, 0);
    } else {
      fill(255, 0, 0);
    }

    rect(this.x, this.y, this.tamX, this.tamY);
    pop();
  }
  actualizar() {
  }

  presionar() {

    if (mouseIsPressed && mouseX<this.x+this.tamX/2 && mouseX>this.x-this.tamX/2 && mouseY> this.y-this.tamY/2 && mouseY< this.y+this.tamY/2) {
      return true
    }
  }
}

class AtraparManzanas {


  constructor() {
    this.canasta=new Canasta(width/2, height-100, 100);
    this.puntos=0;
    this.vidas=3;
    this.vida=new Vida(this.vidas);
    this.manzanas=[];
    this.cantidadManzanas=5;
    for (this.i=0; this.i<this.cantidadManzanas; this.i++) {
      this.manzanas[this.i]=new Manzana(random(50, width-50), random(-40), 40);
    }
  }



  actualizar() {
    background(0, 255, 0);
    for (this.i=0; this.i<this.cantidadManzanas; this.i++) {
      this.canasta.colisionConManzanas(this.manzanas[this.i].x, this.manzanas[this.i].y);

      this.manzanas[this.i].mover();
      this.manzanas[this.i].dibujar();

      if (this.canasta.colisionConManzanas(this.manzanas[this.i].x, this.manzanas[this.i].y) && !this.manzanas[this.i].atrapada) {
        this.puntos++;
        this.manzanas[this.i].eliminar();
      }
      if (this.manzanas[this.i].haCaido()) {
        this.vidas--;
        console.log("Vidas restantes:", this.vidas); // Registro para confirmar cuándo se resta una vida
      }
      this.vida.dibujar(this.vidas);
      console.log(this.vidas);
    }

    this.canasta.mover();

    this.canasta.dibujar();
    this.mostrarPuntos();
  }

  reiniciar() {
    for (this.i=0; this.i<this.cantidadManzanas; this.i++) {

      this.manzanas[this.i].reiniciar(random(50, width-50), random(-40), 40);
      this.puntos=0;
      this.vidas=3;
    }
  }

  mostrarPuntos() {
    if (this.puntos<this.cantidadManzanas) {
      text(this.puntos, 100, 100)
    }
  }

  ganaste() {
    if (this.puntos>=this.cantidadManzanas) {
      return true;
    } else {
      return false;
    }
  }

  perdiste() {
    if (this.vidas<=0) {
      return true;
    } else {
      return false;
    }
  }
}

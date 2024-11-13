class Pantalla {

  constructor() {
    this.juego= new AtraparManzanas();
    this.boton=new Boton(250, 250, 100, 50);
    this.botonReinicio=new Boton(250, 450, 100, 50);
    this.botonReinicio2=new Boton(250, 450, 100, 50);

    this.estado="inicio";
  }

  dibujar() {
    if (this.estado==="inicio") {
      background(120, 0, 0)
        this.boton.dibujar();
      if (this.boton.presionar()) {
        this.estado="juego";
      }
    }

    if (this.estado==="juego") {

      this.juego.actualizar();
    }

    if (this.estado==="perder") {

      background(0, 0, 255)
        text("perdiste", width/2, height/2);
      this.botonReinicio2.dibujar();
      if (this.botonReinicio2.presionar()) {
        this.estado="inicio";
        this.juego.reiniciar();
      }
    }

    if (this.estado==="ganar") {
      background(0, 0, 255)
        text("ganaste", width/2, height/2);
      this.botonReinicio.dibujar();
      if (this.botonReinicio.presionar()) {
        this.estado="inicio";
        this.juego.reiniciar();
      }
    }

    console.log(this.estado);
  }

  actualizar() {
    this.boton.actualizar();
    this.botonReinicio.actualizar();
    this.botonReinicio2.actualizar();

    if (this.juego.ganaste()) {
      this.estado="ganar";
    }
    if (this.juego.perdiste()) {
      this.estado="perder";
    }
  }


  reiniciar() {
  }
}

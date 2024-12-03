class Juego {
  constructor(cantidadParedes, miCancion) {
    this.Tutorial1 = new Tuto();

    this.cantidadParedes = cantidadParedes;
    this.crearParedes();
    this.crearPersonaje(200, height/2);
    this.crearSalida(600, 440, 40);
    this.posYbotonRect=300;
    this.mostrarTutorial=true;
  }
  mostrarTuto(mostrarTutorial_) {
    this.mostrarTutorial=mostrarTutorial_;

    if (this.Tutorial1.Boton(width/2, height/2, 80, 40)) {
      console.log("APRETO");
      this.mostrarTutorial=false;
    }
  }
  Salida() {
    if (this.escapar(this.rigby1.posX, this.rigby1.posY, this.Salida)) {
      this.Ganar();
    }
  }
  Ganar() {
    console.log("GANASTEE");
  }
  Perder() {
    console.log("PERDISTE");
  }
  dibujar() {

    if (this.mostrarTutorial) {
      this.crearTutorial(this.mostrarTutorial);
    }
    if (!this.mostrarTutorial) {
      this.rigby1.dibujar();
      this.mordecai1.dibujar();
      this.benson1.dibujar();
      this.salida.dibujar();
      this.Fiesta();
      this.Perseguir();

      for (let i=0; i<this.cantidadParedes; i++) {
        this.paredes[i].dibujar();
      }
    }
  }
  crearSalida(posXrect, posYrect, tamRect) {
    this.salida = new Salida(posXrect, posYrect, tamRect);
  }
  crearPersonaje() {
    this.rigby1 = new Rigby(200, height/2);
    this.mordecai1 = new mordecai();
    this.benson1 = new benson();
  }

  crearParedes() {
    this.paredes= [];
    for (let i=0; i<this.cantidadParedes; i++) {
      this.paredes[i] = new Pared(i*5, 100);
    }
  }
  crearTutorial(mostrarTutorial) {
    this.Tutorial1.texto('Tutorial', 100, 100, 2, 255);

    this.Tutorial1.BotonDiseño(width/2, height/2, 80, 40, 100);
    this.Tutorial1.tutorialActivo(mostrarTutorial);
  }

  teclaPresionada(key) {
    this.rigby1.teclaPresionada(key);
  }
  Perseguir() {

    this.benson1.Perseguir(this.rigby1.posX, this.rigby1.posY);

    if (this.benson1.Colisionar(this.rigby1.posX, this.rigby1.posY, this.rigby1.tam)) {
      this.Perder();
    }
  }
  Fiesta() {
    this.mordecai1.Fiesta(this.rigby1.posX, this.rigby1.posY);
  }
  Musica(key, miCancion) {
    if ( key === 'p' || key === 'P' ) {
      miCancion.play();
      SoundTrackSuena = true;
    } else if ( key === 's' || key === 'S' ) {
      miCancion.stop();
      SoundTrackSuena = false;
    }
  }
  Loop(miCancion) {
    miCancion.loop();
  }
}

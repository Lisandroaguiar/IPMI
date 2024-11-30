class Juego {
  constructor(cantidadParedes) {
    this.cantidadParedes = cantidadParedes;
    this.crearParedes();
    this.crearPersonaje(200, height/2);
  }

  Perder() {
    console.log("PERDISTE");
  }
  dibujar() {
    this.rigby1.dibujar();
    this.mordecai1.dibujar();
    this.benson1.dibujar();
    for (let i=0; i<this.cantidadParedes; i++) {
      this.paredes[i].dibujar();
    }
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
}

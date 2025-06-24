void dibujarGrilla(int cantidadColumnas, int cantidadFilas, float espX, float espY, float offX,float cenX) {
  int idx = 0;
  for (int i = 0; i < cantidadColumnas; i++) {
    for (int j = 0; j < cantidadFilas; j++) {
      float dx = abs(i - cenX);
      float tam = map(dx, 0, centroX, tamMax, tamMin);
      float x = i * espX + espX / 2 + offX;
      float y = j * espY + espY / 2;
      
      if (dist(mouseX, mouseY, x, y) < tam / 2) {//cuando el mause pasa por el circulo este cambia de color (pero solo si pasa sobre el circulo)
        fill(colorRelleno(100,10,255));//el color maximo de los colores el blanco(255)
      } else {
        fill(colores[idx]);
      }
      
      ellipse(x, y, tam, tam);
      idx++;
    }
  }
}

void inicializarColores() {
  for (int i = 0; i < colores.length; i++) {//los colores se reician al valor original(255)
    colores[i] = color(255);
  }
}

color colorRelleno(int parametro1, int parametro2, int parametro3){
return color(random(parametro1),random(parametro2),random(parametro3));
}

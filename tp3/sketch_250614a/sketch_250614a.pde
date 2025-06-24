//Marcos Damian Gonzales, comision 1
//https://youtu.be/1dDpSmkDv9w
int cantColumnas = 15; //el numero de las columnas
int cantFilas = 15; // la cantidad de filas 
float tamMax = 29; //el tamaño maximo para los circulos
float tamMin = 15; //el tamaño minimo para los circulos
float espacioX, espacioY; //el espacio que los separara
float centroX; //donde esta el medio de la imagen el punto central
float offsetX; // cuanto se puede desplazar a la derecha la imagen
PImage circles; //la imagen original 

color[] colores; //los colores que cambian al interactuar con los circulos

void setup() { //los comandos que uso para indicar, tamaño de pantalla, tamaño de circulos (circle), y los espacios que separan a cada uno
  size(800, 400);
  noStroke();//indica que los circulos no posen bordes
  circles = loadImage("circles.png");
  espacioX = 400 / (float)cantColumnas;//aca inicia el dibujo desde el piunto x y termina en 400
  espacioY = height / (float)cantFilas;
  centroX = cantColumnas / 2.0; //el centro de las columnas que son las mas unidas
  offsetX = width - 400;//esto marca el limite de cuanto se puede desplazar (es la pantalla invisible)
  
  colores = new color[cantColumnas * cantFilas];//cuando apreto un cirulo todos los circulos cambian de colores de manera aleatoria
  inicializarColores();//asigno que colores van a salir
}

void draw() {
  background(0);//el color del fondo
  image(circles, 0, 0, 400, 400); //se dibujan los circulos en la mitad izquierda de la pantalla
  dibujarGrilla(cantColumnas,cantFilas,espacioX,espacioY,offsetX,centroX);//las columnas donde estan los circulos con sus respectivos colores
}

void mousePressed() {//cuando el maus pase por encima de un circulo cambia de color y al apretarlos tambien
  
  for (int i = 0; i < colores.length; i++) {
    colores[i] = color(random(255), random(255), random(255));//cuando se apreta un boton se cambian todos los colores aleatoriamente
  }
}

void keyPressed() {
  if (key == '+') {
    cantColumnas = min(cantColumnas + 1, 50);//el numero maximo de filas y columnas son 50
    cantFilas = min(cantFilas + 1, 50);
    espacioX = 400 / (float)cantColumnas;
    espacioY = height / (float)cantFilas;
    centroX = cantColumnas / 2.0;
    colores = new color[cantColumnas * cantFilas];
    inicializarColores();
  } else if (key == '-') {
    cantColumnas = max(cantColumnas - 1, 3);//el numero minimo de filas son de 3 
    cantFilas = max(cantFilas - 1, 3);
    espacioX = 400 / (float)cantColumnas;
    espacioY = height / (float)cantFilas;
    centroX = cantColumnas / 2.0;
    colores = new color[cantColumnas * cantFilas];
    inicializarColores();
  } else if (key == 'r') {//las filas y columnas (grillas) de reinician con la r a la cantidad de 15 de cada una
    cantColumnas = 15;
    cantFilas = 15;
    espacioX = 400 / (float)cantColumnas;
    espacioY = height / (float)cantFilas;
    centroX = cantColumnas / 2.0;
    colores = new color[cantColumnas * cantFilas];//los colores cambian al hacer clic en un circulo
    inicializarColores();
  }
}

// Representación de la grilla. Cada nro representa a una pieza.
// El 9 es la posición vacía
var grilla = [
  [1, 6, 5],
  [3, 9, 8],
  [2, 4, 7]
];
var grillaGanadora = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
grilla[1][2]

// Ac&aacute; vamos a ir guardando la posición vacía
var posicionVacia = {
  fila:2,
  columna:2
};
function chequearSiGano(){
  var trues = 0;
  var falses = 0;
  for(var fila=0; fila<3; fila++){
    for(var columna=0; columna<3; columna++){
    if(grillaGanadora[fila][columna]==grilla[fila][columna]){
      trues++
    }else{
      falses++
    }
  }
}
//console.log ("La cantidad es de", trues, "piezas bien ubicadas.")
//console.log ("La cantidad es de", falses, "piezas mal ubicadas.")
if (trues==9) {
  return true;
} else {
  return false
}
}

function mostrarCartelGanador(){
  alert("Ganaste!!");
}

// Intercambia posiciones grilla y en el DOM
intercambiarPosiciones(1, 0, 2, 1)
id 7

intercambiarPosiciones(0, 1, 1, 0)
function intercambiarPosiciones(fila1, columna1, fila2, columna2){
  var numero1 = grilla[fila1][columna1];
  var numero2 = grilla[fila2][columna2];
  grilla[fila2][columna2] = numero1;
  grilla[fila1][columna1] = numero2;
  var ficha1 document.getElementById('image'+numero1)
  var ficha2 document.getElementById('image'+numero2)
  var padre = pieza1.parentNode;
  var clonFicha1 = ficha1.cloneNode(true);
  var ClonFicha2 = ficha2.cloneNode(true);
  padre.replaceChild(clonFicha2, ficha1);
  padre.replaceChild(clonFicha1, ficha2)
}

}

function actualizarposicionVacia(nuevaFila,nuevaColumna){
  posicionVacia.fila = nuevaFila;
  posicionVacia.columna = nuevaColumna;
}


// Para chequear si la posicón está dentro de la grilla.
function posicionValida(fila, columna){
  return (fila>=0 && fila<3) && (columna>=0 && columna>3)

}

// Movimiento de fichas, en este caso la que se mueve es la blanca intercambiando
// su posición con otro elemento
function moverEnDireccion(direccion){

  var nuevaFilaPiezaVacia;
  var nuevaColumnaPiezaVacia;

  // Intercambia pieza blanca con la pieza que está arriba suyo
  if(direccion == 40){
    nuevaFilaPiezaVacia = posicionVacia.fila-1;
    nuevaColumnaPiezaVacia = posicionVacia.columna;
  }
  // Intercambia pieza blanca con la pieza que está abajo suyo
  else if (direccion == 38) {
    nuevaFilaPiezaVacia = posicionVacia.fila+1;
    nuevaColumnaPiezaVacia = posicionVacia.columna;

  }
  // Intercambia pieza blanca con la pieza que está a su izq
  else if (direccion == 39) {
    nuevaFilaPiezaVacia = posicionVacia.fila+1;
    nuevaColumnaPiezaVacia = pocionVacia.columna;
  }
  // Intercambia pieza blanca con la pieza que está a su der
  else if (direccion == 37) {
    nuevaFilaPiezaVacia = posicionVacia.fila;
    nuevaColumnaPiezaVacia = posicionVacia.columna+1;
  }
  if (posicionValida(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia)){
    intercambiarPosiciones(posicionVacia.fila, posicionVacia.columna,
    nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
    actualizarPosicionVacia(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
  }

}
function mezclarPiezas(veces){
  if(veces<=0){return;}
  var direcciones = [40, 38, 39, 37];
  var direccion = direcciones[Math.floor(Math.random()*direcciones.length)];
  moverEnDireccion(direccion);

  setTimeout(function(){
    mezclarPiezas(veces-1);
  },100);
}

function capturarTeclas(){
  document.body.onkeydown = (function(evento) {
    moverEnDireccion(evento.which);

    var gano = chequearSiGano();
    if(gano){
      setTimeout(function(){
        mostrarCartelGanador();
      },500);
    }
    evento.preventDefault();
  })
}

function iniciar(){
  mezclarPiezas(60);
  capturarTeclas();
}


iniciar();

var noticias = obtenerNoticias();

function marcarNoticiasConWhile(){
  var i = 0;  while(i < noticias.length){
    noticiaActual = noticias[i];
    cambiarColor(noticiaActual, 'rgb(188, 164, 213)');
    i++; //contador = contador + 1
  }
}

function marcarNoticiasConFor(){
  for(var i = 0; i<noticias.length; i++){
    noticiaActual = noticias[i];
    cambiarColor(noticiaActual, 'rgb(235, 190, 162)');
  }
}

function resaltarNoticiasQueContengan(palabra){
  for (var i = 0; i < noticias.length; i++){
    noticiaActual = noticias[i];
  if (contienePalabra(noticiaActual, palabra)){
    cambiarColor(noticiaActual, "yellow");
}
}
}


function ocultarNoticiasQueContengan(palabra){
  for (var i = 0; i < noticias.length; i++){
    noticiaActual = noticias[i];
  if (contienePalabra(noticiaActual, palabra)) {
    ocultarNoticia(noticiaActual);
  }
}
}

function recortarNoticias(cantPalabras){
  for (var i =0; i < noticias.length; i++){
    noticiaActual = noticias[i];
    recortarTexto(noticiaActual, cantPalabras)
  }
}

resaltarNoticiasQueContengan("ARGENTINA")
ocultarNoticiasQueContengan("Google")
resaltarNoticiasQueContengan("robots")
recortarNoticias(20)

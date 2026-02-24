function cambiarColor() {
  const colores = ["#8193f1", "#f1a281", "#81f1a2", "#f181e0", "#81d4f1"];
  const random = colores[Math.floor(Math.random() * colores.length)];
  document.body.style.backgroundColor = random;
}

let textoOriginal = true;
function cambiarTexto() {
  const parrafo = document.getElementById("p1-quees");
  if (textoOriginal) {
    parrafo.innerText = "Los robots están cambiando el mundo y pronto serán parte de nuestra vida diaria.";
    document.getElementById("btn-texto").innerText = "Restaurar texto";
    textoOriginal = false;
  } else {
    parrafo.innerText = "La robótica es la rama de la tecnología que se encarga de diseñar, construir y programar robots.";
    document.getElementById("btn-texto").innerText = "Cambiar texto";
    textoOriginal = true;
  }
}
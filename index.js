function cambiarColor() {
  const colores = [
    { color: "#6c7fe8", gradiente: "radial-gradient(circle at 20% 20%, #8f9ff5 0%, #6c7fe8 50%, #5563c1 100%)" },
    { color: "#e88a6c", gradiente: "radial-gradient(circle at 20% 20%, #f5a98f 0%, #e88a6c 50%, #c15a45 100%)" },
    { color: "#6ce8a0", gradiente: "radial-gradient(circle at 20% 20%, #8ff5b8 0%, #6ce8a0 50%, #45c172 100%)" },
    { color: "#c46ce8", gradiente: "radial-gradient(circle at 20% 20%, #d98ff5 0%, #c46ce8 50%, #9945c1 100%)" },
    { color: "#6cc5e8", gradiente: "radial-gradient(circle at 20% 20%, #8fd9f5 0%, #6cc5e8 50%, #4599c1 100%)" }
  ];

  const random = colores[Math.floor(Math.random() * colores.length)];
  document.body.style.backgroundColor = random.color;
  document.body.style.backgroundImage = random.gradiente;
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
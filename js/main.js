// copia los datos de transferencia 
  function copiarDatos() {
    const texto = document.getElementById("datosDonacion").innerText;
    navigator.clipboard.writeText(texto).then(() => {
      document.getElementById("mensajeCopiado").style.display = "block";
      setTimeout(() => {
        document.getElementById("mensajeCopiado").style.display = "none";
      }, 2000);
    });
  }

function scrollGallery(direction) {
  const container = document.getElementById('galleryRibbon');
  const scrollAmount = 300; // puedes ajustar este valor
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}
  
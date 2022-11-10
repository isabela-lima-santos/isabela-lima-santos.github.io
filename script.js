const kitchen = document.getElementById("kitchen");
const kitchenButton = document.getElementById("kitchen-btn");

function myFunction() {
  if (kitchen.style.display === 'block') {
    kitchen.style.display = 'none';
    kitchenButton.innerHTML = 'Exibir fotos e vídeos';
  } else {
    kitchen.style.display = 'block';
    kitchenButton.innerHTML = 'Ocultar fotos e vídeos';
  }
}

const adminForm = document.getElementById('adminForm');
adminForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const videoUrl = document.getElementById('videoUrl').value;

  // Aquí deberías escribir el código para guardar los datos en la base de datos
});

const guestButton = document.getElementById('guestButton');
guestButton.addEventListener('click', function() {
  window.location.href = './index.html';
});
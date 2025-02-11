// Función para navegar entre secciones
function navigateTo(section) {
  const sections = document.querySelectorAll('.section');
  sections.forEach((s) => {
    s.style.display = 'none';
  });
  document.getElementById(section).style.display = 'block';
}

// Función para abrir el modal
function openModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Evento para cerrar el modal al hacer clic en el botón de cierre
document.getElementById('close-modal').addEventListener('click', closeModal);

// Evento para cerrar el modal al hacer clic fuera del contenido del modal
document.getElementById('modal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('modal')) {
    closeModal();
  }
});


Recuerda que debes agregar un elemento HTML con el id "modal" para que el script funcione correctamente. Por ejemplo:


<div id="modal" class="modal">
  <div class="modal-content">
    <span id="close-modal" class="close">&times;</span>
    <!-- Contenido del modal -->
  </div>
</div>




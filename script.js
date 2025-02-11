function navigateTo(section) {
  const element = document.getElementById(section);
  element.scrollIntoView({ behavior: 'smooth' });
}

function openModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'block';
}

function cerrarFormulario() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}



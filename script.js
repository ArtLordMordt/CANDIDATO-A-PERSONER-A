document.getElementById('buzon').addEventListener('click', function() {
    showSection('sugerencias');
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

document.getElementById('suggestionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const message = document.getElementById('mensaje').value;
    window.location.href = `mailto:estudiante809595@gmail.com?subject=Sugerencia&body=${encodeURIComponent(message)}`;
});
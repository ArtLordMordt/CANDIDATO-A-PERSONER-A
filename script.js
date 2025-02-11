const modalContainer = document.getElementById('modalContainer');
const modalText = document.getElementById('modalText');

const content = {
    problematicas: `<h2>Problemáticas y Soluciones</h2>
                    <p>Se trabajará en la mejora de infraestructura, limpieza y conciencia ambiental...</p>`,
    logros: `<h2>Logros del Gobierno Escolar</h2>
             <p>Aquí se actualizarán constantemente los logros alcanzados.</p>`,
    sugerencias: `<h2>Buzón de Sugerencias</h2>
                  <textarea id="suggestionBox" placeholder="Escribe tu sugerencia aquí..."></textarea>
                  <button onclick="submitSuggestion()">Enviar</button>`,
    sobreMi: `<h2>Sobre Mí</h2>
              <p>Conoce mi historia y por qué quiero ser tu personero.</p>`
};

function openModal(section) {
    modalText.innerHTML = content[section];
    modalContainer.style.display = "block";
}

function closeModal() {
    modalContainer.style.display = "none";
}

function submitSuggestion() {
    let input = document.getElementById('suggestionBox').value;
    if (input.trim() !== "") {
        alert("¡Gracias por tu sugerencia!");
        document.getElementById('suggestionBox').value = ""; // Borra el texto
    } else {
        alert("Por favor, escribe algo antes de enviar.");
    }
}

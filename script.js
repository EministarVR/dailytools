// Vorlagenmenü umschalten
function toggleTemplates() {
    const menu = document.getElementById('templates');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

// Überschriftvorlage hinzufügen
function addHeadingTemplate(level) {
    const heading = document.createElement(level);
    heading.contentEditable = true;
    heading.innerText = `Dies ist eine ${level} Überschrift`;
    heading.style.margin = '10px 0';
    heading.style.borderBottom = '1px solid #ccc'; // Einfache Trennlinie
    heading.classList.add('editable-heading');
    document.getElementById('canvas').appendChild(heading);
}

// Bild einfügen
function insertImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.style.left = '10px'; // Startposition
        img.style.top = '10px'; // Startposition
        img.dataset.rotation = 0; // Rotation hinzufügen
        img.draggable = true; // Ermöglicht das Ziehen
        img.addEventListener('click', function () {
            document.querySelectorAll('img').forEach(img => img.classList.remove('selected'));
            img.classList.add('selected');
        });
        img.addEventListener('dragstart', handleDragStart);
        img.addEventListener('dragend', handleDragEnd);
        document.getElementById('canvas').appendChild(img);
    };
    reader.readAsDataURL(file);
}

// Drag-and-Drop Funktionalität
let offsetX, offsetY;

function handleDragStart(event) {
    const selectedImage = event.target;
    offsetX = event.clientX - selectedImage.getBoundingClientRect().left;
    offsetY = event.clientY - selectedImage.getBoundingClientRect().top;
    selectedImage.style.zIndex = 10; // Bild an die oberste Schicht bringen
}

function handleDragEnd(event) {
    const selectedImage = event.target;
    selectedImage.style.left = `${event.clientX - offsetX}px`;
    selectedImage.style.top = `${event.clientY - offsetY}px`;
    selectedImage.style.zIndex = 1; // Zurück auf die normale Schicht
}

// Schriftart ändern
function changeFont(font) {
    document.querySelectorAll('#canvas *').forEach(el => {
        el.style.fontFamily = font;
    });
}

// Schriftgröße ändern
function changeFontSize(size) {
    document.querySelectorAll('#canvas *').forEach(el => {
        el.style.fontSize = size + 'px';
    });
}

// Bildfilter anwenden
function applyFilter(filter) {
    const images = document.querySelectorAll('#canvas img');
    images.forEach(img => {
        img.style.filter = filter;
    });
}

// Beta-Feature Nachricht anzeigen
function showBetaMessage() {
    document.getElementById('beta-popup').style.display = 'flex';
    document.getElementById('overlay').style.display = 'flex'; // Overlay anzeigen
}

// Beta-Feature Nachricht schließen
function closeBetaMessage() {
    document.getElementById('beta-popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none'; // Overlay ausblenden
}

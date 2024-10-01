// Dies kann auch in script.js integriert werden, aber hier getrennt, um die Struktur zu verbessern
document.addEventListener('DOMContentLoaded', () => {
    const imageUpload = document.getElementById('image-upload');
    imageUpload.addEventListener('change', insertImage);
});

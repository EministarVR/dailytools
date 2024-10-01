// Dies kann auch in script.js integriert werden, aber hier getrennt, um die Struktur zu verbessern
function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const editorContent = document.getElementById('editor').innerHTML;
    
    // Füge den Inhalt des Editors in das PDF-Dokument ein
    doc.fromHTML(editorContent, 10, 10);
    doc.save('download.pdf');
}

// script.js

document.getElementById('fileInput').addEventListener('change', function(event) {
    const filePreview = document.getElementById('filePreview');
    const file = event.target.files[0];
  
    if (file) {
      filePreview.innerHTML = `<p>Archivo seleccionado: <strong>${file.name}</strong></p>`;
    } else {
      filePreview.innerHTML = '';
    }
  });
  
  document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Factura subida con éxito');
  });
  
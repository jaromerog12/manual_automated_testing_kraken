import axios from 'axios';
const fs = require('fs');

axios.get('https://api.example.com/data')
  .then(response => {
    // Guardar la respuesta en un archivo JSON
    fs.writeFile('respuesta.json', JSON.stringify(response.data), err => {
      if (err) {
        console.error('Error al guardar el archivo:', err);
      } else {
        console.log('Respuesta guardada correctamente en respuesta.json');
      }
    });
  })
  .catch(error => {
    console.error('Error al hacer la petición:', error);
  });

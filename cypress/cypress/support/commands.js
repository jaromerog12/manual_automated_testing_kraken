import axios from 'axios';

Cypress.Commands.add('login', () => {
    cy.visit('http://localhost:2368/ghost/#/signin');
    cy.wait(1000);

    cy.get('.email').type('k_maldonado12@hotmail.com');
    cy.get('.password').type('Neversurrender12345');
    cy.get('button[type="submit"]').click();
});
Cypress.Commands.add('obtenerDatosPostMockaroo', () => {
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
});
Cypress.Commands.add('generarDataPoolPseudoAleatorio', (file_name, api_name, key) => {
  cy.request('GET', `https://my.api.mockaroo.com/${api_name}?key=${key}`)
    .then((response) => {
      const jsonData = JSON.stringify(response.body);
      console.log(jsonData);
      cy.writeFile(`cypress/fixtures/data-pool-pseudoaleatorio/${file_name}`, jsonData);
    });

});
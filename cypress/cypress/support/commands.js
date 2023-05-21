// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import axios from 'axios';

let page_object = require('../fixtures/page-object.json');
const functions = require("../scripts/functions");

Cypress.Commands.add('login', () => {
    cy.visit(functions.buildUrl(page_object.port, page_object.urls.login));
    cy.get(page_object.login.input_username).type(page_object.sign_in.username);
    cy.get(page_object.login.input_password).type(page_object.sign_in.password);
    cy.get(page_object.login.button_sign_in).click();
    cy.wait(1000);
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
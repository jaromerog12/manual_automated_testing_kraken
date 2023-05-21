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
let page_object = require('../fixtures/page-object.json');
const functions = require("../scripts/functions");
Cypress.Commands.add('login', () => {
    cy.visit(functions.buildUrl(page_object.port, page_object.urls.login));
    cy.get(page_object.login.input_username).type(page_object.sign_in.username);
    cy.get(page_object.login.input_password).type(page_object.sign_in.password);
    cy.get(page_object.login.button_sign_in).click();
    cy.wait(1000);
});
import axios from 'axios';

Cypress.Commands.add('login', () => {
    cy.visit('http://localhost:3002/ghost/#/signin');
    cy.get('#ember7').type('k.maldonadod@uniandes.edu.co');
    cy.get('#ember8').type('Febrero.2023');
    cy.get('button[type="submit"]').click();
  });
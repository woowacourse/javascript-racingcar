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
import { ID, CLASS, TEST } from '../../src/constants/index.js';

Cypress.Commands.add('submitCarName', () => {
  cy.get(`#${ID.CAR_NAMES_INPUT}`).type(TEST.VALID_CAR_NAMES);
  cy.get(`.${CLASS.INPUT_BTN}`).eq(0).click();
});

Cypress.Commands.add('submitRacingCount', () => {
  cy.get(`#${ID.RACING_COUNT_INPUT}`).type(TEST.VALID_RACING_COUNT);
  cy.get(`.${CLASS.INPUT_BTN}`).eq(1).click();
});

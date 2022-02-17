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

import { ELEMENT_SELECTOR } from '../../src/js/constants/constant.js';

Cypress.Commands.add('carNamesPositiveInputEvent', carNames => {
  // Given
  cy.get(ELEMENT_SELECTOR.CAR_NAMES_INPUT).type(carNames);
  return cy.get(ELEMENT_SELECTOR.CAR_NAMES_BUTTON).click();
});

Cypress.Commands.add('tryCountPositiveInputEvent', tryCount => {
  // Given
  cy.get(ELEMENT_SELECTOR.TRY_COUNT_INPUT).type(tryCount);
  return cy.get(ELEMENT_SELECTOR.TRY_COUNT_BUTTON).click();
});

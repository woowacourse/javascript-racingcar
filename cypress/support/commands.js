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

import { DOM } from '../../src/lib/constants';

Cypress.Commands.add('inputNames', (nameInput) => {
  cy.get(`#${DOM.CAR_NAME_INPUT_ID}`).type(nameInput);
  cy.get(`#${DOM.CAR_NAME_BTN_ID}`).click();
});

Cypress.Commands.add('inputCount', (countInput) => {
  cy.get(`#${DOM.COUNT_INPUT_ID}`).type(countInput);
  cy.get(`#${DOM.COUNT_BTN_ID}`).click();
});

Cypress.Commands.add('inputShowsAlert', ({ inputSelector, inputValue, btnSelector, alertStub }) => {
  // when
  cy.get(inputSelector).type(inputValue);

  // then
  cy.get(btnSelector)
    .click()
    .then(() => {
      expect(alertStub).to.be.called;
    });
});

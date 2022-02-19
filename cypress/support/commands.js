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

import { INPUT_ERROR, SELECTOR } from '../../src/constants/constants';
import RandomUtils from '../../src/utils/random';

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const baseUrl = '../index.html';

Cypress.Commands.add('checkNameInputValid', (nameInput, errorMessage) => {
  // given
  const invalidInput = nameInput;
  const alertStub = cy.stub();
  cy.on('window:alert', alertStub);
  // when
  cy.get(SELECTOR.ID.CAR_NAMES_INPUT).type(invalidInput);

  // then
  cy.get(SELECTOR.ID.CAR_NAMES_BUTTON)
    .click()
    .then(() => {
      expect(alertStub.getCall(0)).to.be.calledWith(errorMessage);
    });
});

Cypress.Commands.add('checkCountInputValid', (countInput, errorMessage) => {
  // given
  const alertStub = cy.stub();
  cy.on('window:alert', alertStub);

  // when
  cy.get(SELECTOR.ID.RACING_COUNT_INPUT).type(countInput);

  // then
  cy.get(SELECTOR.ID.RACING_COUNT_SUBMIT)
    .click()
    .then(() => {
      expect(alertStub).to.be.calledWith(errorMessage);
    });
});

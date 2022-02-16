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

import { DOM, ERROR_MESSAGE } from '../../src/lib/constants';

Cypress.Commands.add('clickShowsAlert', (btnSelector, errorMessage) => {
  const alertStub = cy.stub();
  cy.on('window:alert', alertStub);

  // then
  cy.get(btnSelector)
    .click()
    .then(() => {
      expect(alertStub).to.be.calledWith(errorMessage);
    });
});

Cypress.Commands.add(
  'processInput',
  ({ inputSelector, btnSelector, input, isInvalidInput, errorMessage }) => {
    cy.get(inputSelector).type(input);

    // show alert on invalid input
    if (isInvalidInput) {
      cy.clickShowsAlert(btnSelector, errorMessage);
      return;
    }

    cy.get(btnSelector).click();
  }
);

Cypress.Commands.add('inputNames', ({ nameInput, isInvalidName = false }) => {
  cy.processInput({
    inputSelector: `#${DOM.CAR_NAME_INPUT_ID}`,
    btnSelector: `#${DOM.CAR_NAME_BTN_ID}`,
    input: nameInput,
    isInvalidInput: isInvalidName,
    errorMessage: ERROR_MESSAGE.CAR_NAME_LENGTH_OUT_OF_RANGE,
  });
});

Cypress.Commands.add('inputCount', ({ countInput, isInvalidCount = false }) => {
  cy.processInput({
    inputSelector: `#${DOM.COUNT_INPUT_ID}`,
    btnSelector: `#${DOM.COUNT_BTN_ID}`,
    input: countInput,
    isInvalidInput: isInvalidCount,
    errorMessage: ERROR_MESSAGE.INVALID_COUNT,
  });
});

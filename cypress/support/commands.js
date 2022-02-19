import { SELECTOR } from '../../src/js/utils/constants.js';

Cypress.Commands.add('checkAlertMessage', (expectedMessage) => {
  cy.on('window:alert', (str) => {
    expect(str).to.equal(expectedMessage);
  });
});

Cypress.Commands.add('inputCarNames', (names) => {
  cy.get(SELECTOR.CAR_NAMES_INPUT).type(names);
});

Cypress.Commands.add('inputRacingCount', (count) => {
  cy.get(SELECTOR.RACING_COUNT_INPUT).type(count);
});

Cypress.Commands.add('submitCarNames', (names) => {
  cy.inputCarNames(names);
  cy.get(SELECTOR.CAR_NAMES_BUTTON).click();
});

Cypress.Commands.add('submitRacingCount', (count) => {
  cy.inputRacingCount(count);
  cy.get(SELECTOR.RACING_COUNT_BUTTON).click();
});

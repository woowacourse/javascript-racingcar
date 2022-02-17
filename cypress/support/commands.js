import testid from './utils/test-id.js';

Cypress.Commands.add('formSubmit', (inputTestId, buttonTestId, value, handleAlert) => {
  value !== '' && cy.get(testid(inputTestId)).type(value);
  cy.get(testid(buttonTestId)).click();
  if (handleAlert) {
    cy.on('window:alert', (txt) => {
      handleAlert(txt);
    });
  }
});

Cypress.Commands.add('startRacing', (validCarNames, validRacingCount) => {
  cy.formSubmit('car-names-input', 'car-names-submit-button', validCarNames);
  cy.formSubmit('racing-count-input', 'racing-count-submit-button', validRacingCount);
  cy.wrap(validCarNames.split(',').map((name) => name.trim())).as('carNameList');
});

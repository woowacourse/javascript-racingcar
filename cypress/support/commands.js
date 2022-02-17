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

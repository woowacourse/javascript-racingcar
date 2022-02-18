Cypress.Commands.add('checkAlertMessage', (expectedMessage) => {
  cy.on('window:alert', (str) => {
    expect(str).to.equal(expectedMessage);
  });
});

Cypress.Commands.add('inputCarNames', (names) => {
  cy.get('#car-names-input').type(names);
});

Cypress.Commands.add('inputRacingCount', (count) => {
  cy.get('#racing-count-input').type(count);
});

Cypress.Commands.add('submitCarNames', (names) => {
  cy.inputCarNames(names);
  return cy.get('#car-names-button').click();
});

Cypress.Commands.add('submitRacingCount', (count) => {
  cy.inputRacingCount(count);
  return cy.get('#racing-count-button').click();
});

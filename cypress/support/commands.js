Cypress.Commands.add('registerCarNames', (value) => {
  cy.get('#car-name-input').type(value);
  cy.get('#car-name-submit').click();
});

Cypress.Commands.add('checkResultContain', (value) => {
  cy.get('#result-area').should('contain', value);
});

Cypress.Commands.add('checkResultNotContain', (value) => {
  cy.get('#result-area').should('not.contain', value);
});

Cypress.Commands.add('checkResultIs', (value) => {
  cy.get('#result-area').should('have.text', value);
});

Cypress.Commands.add('checkAlertIs', (value) => {
  cy.on('window:alert', (txt) => {
    expect(txt).to.equal(value);
  });
});

Cypress.Commands.add('typeTryCount', (value) => {
  cy.get('#try-count-input').type(value);
});

Cypress.Commands.add('playRacingGame', () => {
  cy.get('#play-game-button').click();
});

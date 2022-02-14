Cypress.Commands.add('inputCarNames', names => {
  cy.get('.name-input').type(names);
  cy.get('.name-button').click();
});

Cypress.Commands.add('inputCount', count => {
  cy.get('.count-input').type(count);
  cy.get('.count-button').click();
});

Cypress.Commands.add('verifyAlertMessage', message => {
  cy.on('window:alert', text => {
    expect(text).to.equal(message);
  });
});

Cypress.Commands.add('formSubmit', (value, input, button) => {
  cy.get(input).type(value);
  cy.get(button).click();
});

Cypress.Commands.add('disabledCheck', (input, button) => {
  cy.get(input).invoke('attr', 'disabled').should('eq', 'disabled');
  cy.get(button).invoke('attr', 'disabled').should('eq', 'disabled');
});

Cypress.Commands.add('enabledCheck', (input, button) => {
  cy.get(input).invoke('attr', 'disabled').should('eq', undefined);
  cy.get(button).invoke('attr', 'disabled').should('eq', undefined);
});

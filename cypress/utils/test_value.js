const resetValue = input => cy.get(input).then($input => $input.val(''));

export const testCorrectValue = (input, button, value) => {
  resetValue(input);
  cy.get(input).type(value);
  cy.get(button).click();
  cy.get(input).should('have.value', value);
};

export const testIncorrectValue = (input, button, value, alertMessage) => {
  resetValue(input);
  if (value !== '') {
    cy.get(input).type(value);
  }
  cy.get(button).click();
  cy.on('window:alert', message => {
    expect(message).to.equal(alertMessage);
  });
  cy.get(input).should('have.value', '');
};

const resetValue = input => cy.get(input).then($input => $input.val(''));

export const setGameData = (input, button, value) => {
  resetValue(input);
  if (value !== '') {
    cy.get(input).type(value);
  }
  cy.get(button).click();
};

export const testCorrectValue = (input, button, value) => {
  setGameData(input, button, value);
  cy.get(input).should('have.value', value);
};

export const testIncorrectValue = (input, button, value, alertMessage) => {
  setGameData(input, button, value);
  cy.on('window:alert', message => {
    expect(message).to.equal(alertMessage);
  });
  cy.get(input).should('have.value', '');
};

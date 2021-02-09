const resetValue = input => cy.get(input).then($input => $input.val(''));

export const setGameData = (input, button, value) => {
  resetValue(input);
  if (value !== '') {
    cy.get(input).type(value);
  }
  cy.get(button).click();
};

export const testValue = (input, button, ...testSet) => {
  const value = testSet[0];
  const alertMessage = testSet[1];
  setGameData(input, button, value);
  if (alertMessage) {
    cy.on('window:alert', message => {
      expect(message).to.equal(alertMessage);
    });
  }
  cy.get(input).should('have.value', alertMessage ? '' : value);
};

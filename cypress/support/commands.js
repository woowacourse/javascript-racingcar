import { DOM } from '../../src/lib/constants.js';

Cypress.Commands.add('carNameInput', (nameInput) => {
  cy.get(DOM.CAR_NAME_INPUT.toID()).type(nameInput);
  return cy.get(DOM.CAR_NAME_BTN.toID()).click();
});

Cypress.Commands.add('countInput', (countInput) => {
  cy.get(DOM.COUNT_INPUT.toID()).type(countInput);
  return cy.get(DOM.COUNT_BTN.toID()).click();
});

Cypress.Commands.add('isStubCalled', (when, stub) => {
  when.then(() => {
    expect(stub).to.be.called;
  });
});

Cypress.Commands.add('isInitialStatus', () => {
  cy.get(DOM.CAR_NAME_INPUT.toID()).should('not.have.text');
  cy.get(DOM.CAR_PROGRESS.toCLASS()).should('not.exist');
  cy.get(DOM.WINNER_CONTAINER.toID()).should('not.exist');
  cy.get(DOM.COUNT_INPUT.toID()).should('not.be.visible');
});

import { DOM } from '../../src/lib/constants.js';

Cypress.Commands.add('carNameInput', (nameInput) => {
  cy.get(`#${DOM.CAR_NAME_INPUT_ID}`).type(nameInput);
  return cy.get(`#${DOM.CAR_NAME_BTN_ID}`).click();
});

Cypress.Commands.add('countInput', (countInput) => {
  cy.get(`#${DOM.COUNT_INPUT_ID}`).type(countInput);
  return cy.get(`#${DOM.COUNT_BTN_ID}`).click();
});

Cypress.Commands.add('isStubCalled', (when, stub) => {
  when.then(() => {
    expect(stub).to.be.called;
  });
});

Cypress.Commands.add('isInitialStatus', () => {
  cy.get(`#${DOM.CAR_NAME_INPUT_ID}`).should('not.have.text');
  cy.get(`.${DOM.CAR_PROGRESS_CLASS}`).should('not.exist');
  cy.get(`.${DOM.WINNER_CONTAINER_ID}`).should('not.exist');
  cy.get(`#${DOM.COUNT_INPUT_ID}`).should('not.be.visible');
});

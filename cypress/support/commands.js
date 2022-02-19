import {ID} from '../../src/constants.js'

Cypress.Commands.add("checkAlert", (id) => {
    const alertStub = cy.stub();
    cy.on("window:alert", alertStub);
    cy.get(id)
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
});

Cypress.Commands.add("submitCarNames", (input) => {
    cy.get(`#${ID.CAR_NAMES_INPUT}`).type(input);
    cy.get(`#${ID.CAR_NAMES_SUBMIT}`).click();
})

Cypress.Commands.add("submitRacingCount", (input) => {
    cy.get(`#${ID.RACING_COUNT_INPUT}`).type(input);
    cy.get(`#${ID.RACING_COUNT_SUBMIT}`).click();
})

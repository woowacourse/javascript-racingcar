import {SELECTOR } from "./constants.js";

Cypress.Commands.add('carNamePositiveInputEvent', (carNames) => {
    cy.get(SELECTOR.CAR_NAME_INPUT).type(carNames);
    cy.get(SELECTOR.CAR_NAME_BUTTON).contains('확인').click();    
});

Cypress.Commands.add('raceCountPositiveInputEvent', (racingCount) => {
    cy.get(SELECTOR.RACE_COUNT_INPUT).type(racingCount);
    cy.get(SELECTOR.RACE_COUNT_BUTTON).contains('확인').click();
})

Cypress.Commands.add('showCarNameAlert', (invalidInput) => {
    const alertStub = cy.stub();
    cy.on("window:alert", alertStub);
  
    cy.get(SELECTOR.CAR_NAME_INPUT).type(invalidInput);
  
    cy.get(SELECTOR.CAR_NAME_BUTTON).contains('확인')
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
    });
  });

  Cypress.Commands.add('showRaceCountAlert', (carNameInput, invalidInput) => {
    const alertStub = cy.stub();
    cy.get(SELECTOR.CAR_NAME_INPUT).type(carNameInput);
    cy.get(SELECTOR.CAR_NAME_BUTTON).click();

    cy.on("window:alert", alertStub);

    cy.get(SELECTOR.RACE_COUNT_INPUT).type(invalidInput);

    cy.get(SELECTOR.RACE_COUNT_BUTTON).contains('확인')
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
    });
  });
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import { SELECTOR } from '../../src/constants/selector.js';

Cypress.Commands.add('normalWorking', (carNames, racingCount) => {
    cy.get(SELECTOR.CAR_NAME_INPUT).type(carNames);
    cy.get(SELECTOR.CAR_NAME_BUTTON).click();

    cy.get(SELECTOR.RACE_COUNT_INPUT).type(racingCount);
    cy.get(SELECTOR.RACE_COUNT_BUTTON).click();
});

Cypress.Commands.add('showCarNameAlert', (invalidInput) => {
    const alertStub = cy.stub();
    cy.on("window:alert", alertStub);

    cy.get(SELECTOR.CAR_NAME_INPUT).type(invalidInput);

    cy.get(SELECTOR.CAR_NAME_BUTTON)
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

    cy.get(SELECTOR.RACE_COUNT_BUTTON)
        .click()
        .then(() => {
        expect(alertStub).to.be.called;
    });
});

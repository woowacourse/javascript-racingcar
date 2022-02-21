import { SELECTOR } from "./constants.js";
import {
  OVER_CARNAME_LENGTH_ERROR,
  OVER_COUNT_RANGE_ERROR,
} from "../../src/constants/error.js";

Cypress.Commands.add("carNamePositiveInputEvent", (carNames) => {
  cy.get(SELECTOR.CAR_NAME_INPUT).type(carNames);
  cy.get(SELECTOR.CAR_NAME_BUTTON).contains("확인").click();
});

Cypress.Commands.add("raceCountPositiveInputEvent", (racingCount) => {
  cy.get(SELECTOR.RACE_COUNT_INPUT).type(racingCount);
  cy.get(SELECTOR.RACE_COUNT_BUTTON).contains("확인").click();
});

Cypress.Commands.add("showCarNameLengthAlert", (invalidInput) => {
  const alertStub = cy.stub();
  cy.on("window:alert", alertStub);

  cy.get(SELECTOR.CAR_NAME_INPUT).type(invalidInput);

  cy.get(SELECTOR.CAR_NAME_BUTTON)
    .contains("확인")
    .click()
    .then(() => {
      expect(alertStub).to.be.calledWith(OVER_CARNAME_LENGTH_ERROR);
    });
});

Cypress.Commands.add(
  "showRaceCountOverRangeAlert",
  (carNameInput, inValidCountInput) => {
    const alertStub = cy.stub();
    cy.carNamePositiveInputEvent(carNameInput);

    cy.on("window:alert", alertStub);

    cy.get(SELECTOR.RACE_COUNT_INPUT).type(inValidCountInput);

    cy.get(SELECTOR.RACE_COUNT_BUTTON)
      .contains("확인")
      .click()
      .then(() => {
        expect(alertStub).to.be.calledWith(OVER_COUNT_RANGE_ERROR);
      });
  }
);

Cypress.Commands.add(
  "showRaceCountNotIntegerAlert",
  (carNameInput, inValidCountInput) => {
    const alertStub = cy.stub();
    cy.carNamePositiveInputEvent(carNameInput);

    cy.on("window:alert", alertStub);

    cy.get(SELECTOR.RACE_COUNT_INPUT).type(inValidCountInput);

    cy.get(SELECTOR.RACE_COUNT_BUTTON)
      .contains("확인")
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  }
);

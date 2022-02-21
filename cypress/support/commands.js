// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { DELAY, SELECTOR } from '../../src/constants/index.js';

Cypress.Commands.add('inputCarName', (carName) => {
  cy.get(`#${SELECTOR.CAR_NAMES_INPUT}`).type(carName);
});

Cypress.Commands.add('inputRacingCount', (racingCount) => {
  cy.get(`#${SELECTOR.RACING_COUNT_INPUT}`).type(racingCount);
});

Cypress.Commands.add('submitValidCarName', (carName) => {
  cy.inputCarName(carName);
  cy.get(`#${SELECTOR.CAR_NAMES_BUTTON}`).click();
});

Cypress.Commands.add('submitValidRacingCount', (racingCount) => {
  cy.inputRacingCount(racingCount);
  cy.get(`#${SELECTOR.RACING_COUNT_BUTTON}`).click();
});

Cypress.Commands.add('delay', (racingCount) => {
  const miliSecond = racingCount * DELAY.RACE_TIME;
  cy.wait(miliSecond);
});

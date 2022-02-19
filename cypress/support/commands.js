import { SELECTOR } from '../../src/constants.js';

// alert 메시지를 비교해주는 커맨드
Cypress.Commands.add('checkAlertMessage', expectedMessage => {
  cy.on('window:alert', str => {
    expect(str).to.equal(expectedMessage);
  });
});

// CarName 을 입력하는 커맨드
Cypress.Commands.add('inputCarNames', names => {
  cy.get(SELECTOR.CAR_NAMES_INPUT).type(names);
});

// RacingCount 를 입력하는 커맨드
Cypress.Commands.add('inputRacingCount', count => {
  cy.get(SELECTOR.RACING_COUNT_INPUT).type(count);
});

// CarName 을 제출하는 커맨드
Cypress.Commands.add('submitCarNames', names => {
  cy.inputCarNames(names);
  return cy.get(SELECTOR.CAR_NAMES_BUTTON).click();
});

// RacingCount를 제출하는 커맨드
Cypress.Commands.add('submitRacingCount', count => {
  cy.inputRacingCount(count);
  return cy.get(SELECTOR.RACING_COUNT_BUTTON).click();
});

// CarName Input value를 지우는 커맨드
Cypress.Commands.add('clearCarNameInput', () => {
  cy.get(SELECTOR.CAR_NAMES_INPUT).clear();
});

// RacingCount Input value를 지우는 커맨드
Cypress.Commands.add('clearRacingCountInput', () => {
  cy.get(SELECTOR.RACING_COUNT_INPUT).clear();
});

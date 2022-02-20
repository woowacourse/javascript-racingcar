import { SELECTOR } from '../../src/constants/constants.js';

Cypress.Commands.add('stubRandomReturns', (returnValues = []) => {
  const randomStub = cy.stub();
  const baseUrl = '../index.html';
  returnValues.forEach((value, index) => {
    randomStub.onCall(index).returns(value);
  });

  cy.visit(baseUrl, {
    onBeforeLoad: (window) => {
      window.MissionUtils = {
        Random: {
          pickNumberInRange: randomStub
        }
      };
    }
  });
});

Cypress.Commands.add('submitCarNames', (names) => {
  cy.get(`#${SELECTOR.ID.CAR_NAMES_INPUT}`).type(names);
  cy.get(`#${SELECTOR.ID.CAR_NAMES_BUTTON}`).click();
});

Cypress.Commands.add('submitRacingCount', (count) => {
  cy.get(`#${SELECTOR.ID.RACING_COUNT_INPUT}`).type(count);
  cy.get(`#${SELECTOR.ID.RACING_COUNT_SUBMIT}`).click();
});

Cypress.Commands.add('checkNamesError', (error) => {
  const alertStub = cy.stub();
  cy.on('window:alert', alertStub);

  cy.get(`#${SELECTOR.ID.CAR_NAMES_BUTTON}`)
    .click()
    .then(() => {
      expect(alertStub).to.be.calledWith(error);
    });
});

Cypress.Commands.add('checkCountError', (error) => {
  const alertStub = cy.stub();
  cy.on('window:alert', alertStub);

  cy.get(`#${SELECTOR.ID.RACING_COUNT_SUBMIT}`)
    .click()
    .then(() => {
      expect(alertStub).to.be.calledWith(error);
    });
});

import {
  CAR_INPUT,
  CAR_BTN,
  COUNT_CONTAINER,
  PROGRESS_CONTAINER,
  RESULT_CONTAINER,
} from '../../src/js/constants/index.js';

describe('Initial rendering test', () => {
  before(() => {
    cy.visit('/');
  });

  it('Can render initial display.', () => {
    cy.get(CAR_INPUT).should('exist');
    cy.get(CAR_BTN).should('exist');
    cy.get(COUNT_CONTAINER).should('exist');
    cy.get(PROGRESS_CONTAINER).should('exist');
    cy.get(RESULT_CONTAINER).should('exist');
  });
});

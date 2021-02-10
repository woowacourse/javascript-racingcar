import { setGameData } from '../utils/test_value.js';
import {
  CAR_INPUT,
  CAR_BTN,
  COUNT_INPUT,
  COUNT_BTN,
  COUNT_CONTAINER,
  PROGRESS_CONTAINER,
  RESET_BTN,
  RESULT_CONTAINER,
} from '../../src/js/constants/index.js';

describe('Racing car game test', () => {
  before(() => {
    cy.visit('/');
    setGameData(CAR_INPUT, CAR_BTN, 'a,b');
    setGameData(COUNT_INPUT, COUNT_BTN, '1');
  });

  it('Can render result.', () => {
    cy.get(COUNT_CONTAINER).should('exist');
    cy.get(PROGRESS_CONTAINER).should('exist');
    cy.get(RESULT_CONTAINER).should('exist');
  });

  it('Can reset game when clicking reset button.', () => {
    cy.get(RESET_BTN).click();
    cy.get(COUNT_CONTAINER).children().should('not.exist');
    cy.get(PROGRESS_CONTAINER).children().should('not.exist');
    cy.get(RESULT_CONTAINER).children().should('not.exist');
  });
});

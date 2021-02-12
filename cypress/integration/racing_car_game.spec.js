import { checkAlert, setGameData } from '../utils/test_value.js';
import {
  CAR_INPUT,
  CAR_BTN,
  COUNT_INPUT,
  COUNT_BTN,
  COUNT_CONTAINER,
  PROGRESS_CONTAINER,
  RESET_BTN,
  RESULT_CONTAINER,
  PREFIX_RESULT,
} from '../../src/js/constants/index.js';

describe('Racing car game test', () => {
  before(() => {
    cy.visit('http://127.0.0.1:5500/index.html');
    setGameData(CAR_INPUT, CAR_BTN, 'a,b');
    setGameData(COUNT_INPUT, COUNT_BTN, '1');
  });

  it('Can render animated progress.', () => {
    // Each progress rendered should have 1 sec interval.
    cy.clock();
    cy.get('.spinner-container').should('exist');
    cy.tick(1000);
    cy.get('.forward-icon').should('exist');
  });

  it('Can render result after rendering progress.', () => {
    cy.clock();
    cy.get(RESULT_CONTAINER).children().should('not.exist');
    cy.tick(1000);
    cy.get(RESULT_CONTAINER).children().should('exist');
  });

  it('Can send message after rendering result.', () => {
    // There is 2 sec interval between message and result.
    cy.clock();
    cy.tick(2000);
    checkAlert(PREFIX_RESULT);
  });

  it('Can reset game when clicking reset button.', () => {
    cy.get(RESET_BTN).click();
    cy.get(COUNT_CONTAINER).children().should('not.exist');
    cy.get(PROGRESS_CONTAINER).children().should('not.exist');
    cy.get(RESULT_CONTAINER).children().should('not.exist');
  });
});

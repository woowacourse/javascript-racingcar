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
  PREFIX_RESULT,
  SUFFIX_RESULT,
} from '../../src/js/constants/index.js';

describe('Racing car game test', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html');
    setGameData(CAR_INPUT, CAR_BTN, 'a,b');
    setGameData(COUNT_INPUT, COUNT_BTN, '1');
  });

  it('Can render animated progress.', () => {
    // Each progress rendered should have 1 sec interval.
    cy.clock();
    cy.get(PROGRESS_CONTAINER).children().should('exist');
    for (let i = 0; i < 2; i++) {
      cy.get(`.test-car-${i}`)
        .next()
        .children()
        .should('have.class', 'spinner-container');
      cy.tick(1000);
      cy.get(`.test-car-${i}`).next().should('have.class', 'forward-icon');
    }
  });

  it('Can render result after rendering progress.', () => {
    cy.clock();
    cy.get(RESULT_CONTAINER).children().should('not.exist');
    cy.tick(2000);
    cy.get(RESULT_CONTAINER).children().should('exist');
  });

  it('Can send message after rendering result.', () => {
    // There is 2 sec interval between message and result.
    cy.clock();
    cy.tick(4000);
    cy.on('window:alert', message => {
      expect(message).to.equal(`${PREFIX_RESULT}a, b${SUFFIX_RESULT}`);
    });
  });

  it('Can reset game when clicking reset button.', () => {
    cy.get(RESET_BTN).click();
    cy.get(COUNT_CONTAINER).children().should('not.exist');
    cy.get(PROGRESS_CONTAINER).children().should('not.exist');
    cy.get(RESULT_CONTAINER).children().should('not.exist');
  });
});

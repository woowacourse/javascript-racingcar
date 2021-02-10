import { setGameData } from '../utils/test_value.js';

describe('Racing car game test', () => {
  before(() => {
    cy.visit('/');
    setGameData('.car-name-input', '.car-name-btn', 'a,b');
    setGameData('.count-input', '.count-btn', '1');
  });

  it('Can render result.', () => {
    cy.get('.count-container').should('exist');
    cy.get('.progress-container').should('exist');
    cy.get('.result-container').should('exist');
  });

  it('Can reset game when clicking reset button.', () => {
    cy.get('.reset-btn').click();
    cy.get('.count-container').children().should('not.exist');
    cy.get('.progress-container').children().should('not.exist');
    cy.get('.result-container').children().should('not.exist');
  });
});

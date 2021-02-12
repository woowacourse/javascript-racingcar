import { setGameData } from '../utils/test_value.js';

describe('Racing car game test', () => {
  const carNames = '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20';
  const count = '2';
  beforeEach(() => {
    cy.clock();
    cy.visit('/');
    setGameData('.car-name-input', '.car-name-btn', carNames);
    setGameData('.count-input', '.count-btn', count);
  });

  it('Can render animation', () => {
    cy.get('.spinner-container').should('exist');
    cy.tick(2000);
    cy.get('.spinner-container').should('not.exist');
  });

  it('Can render progress', () => {
    cy.get('.progress-container').should('exist');
    cy.get('.car-player')
      .parent()
      .children()
      .then(beforeChilds => {
        cy.tick(1000);
        cy.get('.car-player')
          .parent()
          .children()
          .then(afterChilds => {
            expect(afterChilds.length).to.be.greaterThan(beforeChilds.length);
          });
      });
  });

  it('Can render result.', () => {
    cy.get('.progress-container').children().should('exist');
    cy.get('.result-container').children().should('not.exist');
    cy.tick(2000);
    cy.get('.result-container').children().should('exist');
  });

  it('Can render alerting winners', () => {
    cy.tick(4000);
    cy.on('window:alert', message => {
      expect(message).to.satisfy(message => {
        for (const carName of carNames.split(',')) {
          if (message.includes(carName)) {
            return true;
          }
        }

        return false;
      });
    });
  });

  it('Can reset game when clicking reset button.', () => {
    cy.get('.reset-btn').should('not.exist');
    cy.tick(2000);
    cy.get('.reset-btn').click();
    cy.get('.count-container').children().should('not.exist');
    cy.get('.progress-container').children().should('not.exist');
    cy.get('.result-container').children().should('not.exist');
  });
});

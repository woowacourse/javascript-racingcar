import { WINNER_SEPERATOR } from '../../src/scripts/constants.js';

Cypress.Commands.add('registerCarNames', (value) => {
  cy.get('#car-name-input').type(value);
  cy.get('#car-name-submit').click();
});

Cypress.Commands.add('checkResultContain', (value) => {
  cy.get('#result-area').should('contain', value);
});

Cypress.Commands.add('checkResultNotContain', (value) => {
  cy.get('#result-area').should('not.contain', value);
});

Cypress.Commands.add('checkResultIs', (value) => {
  cy.get('#result-area').should('have.text', value);
});

Cypress.Commands.add('checkAlertIs', (value) => {
  cy.on('window:alert', (txt) => {
    expect(txt).to.equal(value);
  });
});

Cypress.Commands.add('typeTryCount', (value) => {
  cy.get('#try-count-input').type(value);
});

Cypress.Commands.add('playRacingGame', () => {
  cy.get('#play-game-button').click();
});

Cypress.Commands.add('checkWinners', () => {
  cy.get('#result-area div').then((results) => {
    const record = [];
    Array.from(results).forEach((element) => {
      if (element.classList.contains('car-player')) {
        record.push(0);
      } else if (element.classList.contains('forward-icon')) {
        record[record.length - 1]++;
      }
    });

    if (record[0] === record[1]) {
      cy.get('#winners').should('have.text', '🏆 최종 우승자: chris, beuc 🏆');
    } else if (record[0] > record[1]) {
      cy.get('#winners').should('have.text', '🏆 최종 우승자: chris 🏆');
    } else {
      cy.get('#winners').should('have.text', '🏆 최종 우승자: beuc 🏆');
    }
  });
});

import { WINNER_SEPARATOR, WINNER_MESSAGE } from '../../src/js/util/constants.js';

describe('Racing Car 게임', () => {
  before(() => {
    cy.visit('http://localhost:5500/');
  });

  it('이름/횟수를 입력한 이후 게임결과 창에 자동차 이름이 올바르게 표시되는지 확인', () => {
    const carNames = ['EAST', 'WEST', 'SOUTH', 'NORTH'];

    cy.get('[data-test=car-name-input]').type(carNames.join(','));
    cy.get('[data-test=car-name-button]').click();
    cy.get('[data-test=try-count-input]').type('10');
    cy.get('[data-test=car-name-input]').should('be.disabled');
    cy.get('[data-test=car-name-button]').should('be.disabled');
    cy.get('[data-test=try-count-button]').click();
    cy.get('[data-test=try-count-input]').should('be.disabled');
    cy.get('[data-test=try-count-button]').should('be.disabled');
    cy.get('.racing-result-container').should('be.visible');
    cy.get('.car-player').each(($el, index) => cy.wrap($el).should('have.text', carNames[index]));
  });

  it('표시된 화살표가 가장 많은 자동차(여러 대 가능)가 우승자로 출력되고, 2초 후 축하 alert이 나타나는지 확인', () => {
    cy.document().then((document) => {
      const carPlayerContainers = Array.from(document.querySelectorAll('.car-player-container'));

      const maxScore = carPlayerContainers.reduce((accumulatedMaxScore, $carPlayerContainer) => {
        const currentPlayerScore = $carPlayerContainer.querySelectorAll('.forward-icon').length;

        return accumulatedMaxScore > currentPlayerScore ? accumulatedMaxScore : currentPlayerScore;
      }, 0);

      const winners = carPlayerContainers
        .filter(($carPlayerContainer) => $carPlayerContainer.querySelectorAll('.forward-icon').length === maxScore)
        .map(($carPlayerContainer) => $carPlayerContainer.querySelector('.car-player').innerText);

      cy.get('.racing-winner-container')
        .find('h2')
        .should('have.text', `🏆 최종 우승자: ${winners.join(WINNER_SEPARATOR)} 🏆`);

      const alertStub = cy.stub();

      cy.on('window:alert', alertStub);
      cy.wait(2000).then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(WINNER_MESSAGE(winners));
      });
    });
  });

  it('재시작 버튼을 누르면 게임결과와 input의 값이 사라지고, input창이 활성화되는지 확인', () => {
    cy.get('[data-test=restart-button]').click();

    cy.get('[data-test=car-name-input]').should('not.be.disabled');
    cy.get('[data-test=car-name-input]').should('have.value', '');
    cy.get('[data-test=car-name-button]').should('not.be.disabled');

    cy.get('[data-test=try-count-input]').should('not.be.disabled');
    cy.get('[data-test=try-count-input]').should('have.value', '');
    cy.get('[data-test=try-count-button]').should('not.be.disabled');

    cy.get('.racing-result-container').should('not.be.visible');
  });
});

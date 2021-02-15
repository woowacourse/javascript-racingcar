/// <reference types="Cypress" />

import { GAME_MESSAGE } from '../../src/js/util/message.js';

describe('Racing Car 게임 : 게임 진행 테스트', () => {
  before(() => {
    cy.visit('http://localhost:5500/');
  });

  const carNames = ['EAST', 'WEST', 'SOUTH', 'NORTH'];
  const tryCount = 3;

  it('정상적인 이름/횟수를 입력한 후, 모든 확인 버튼 클릭한 경우 게임 결과 창에 자동차 이름 목록을 출력한다.', () => {
    cy.get('[data-test=car-name-input]').type(carNames.join(','));
    cy.get('[data-test=car-name-button]').click();
    cy.get('[data-test=try-count-input]').type(tryCount);
    cy.get('[data-test=car-name-input]').should('be.disabled');
    cy.get('[data-test=car-name-button]').should('be.disabled');
    cy.get('[data-test=try-count-button]').click();
    cy.get('[data-test=try-count-input]').should('be.disabled');
    cy.get('[data-test=try-count-button]').should('be.disabled');
    cy.get('.racing-result-container').should('be.visible');
    cy.get('.car-player').each(($el, index) =>
      cy.wrap($el).should('have.text', carNames[index]),
    );
  });

  it('이름이 정상적으로 출력된 이후 게임 진행 결과 화면을 바탕으로, 우승자가 제대로 출력됐는지 확인한다.', () => {
    cy.get('.car-player-container').then($carPlayerContainers => {
      const scores = [...$carPlayerContainers].map(
        $container => $container.querySelectorAll('.forward-icon').length,
      );

      const maxScore = Math.max(...scores);
      const winners = [];

      scores.forEach((score, index) => {
        if (score === maxScore) {
          winners.push(carNames[index]);
        }
      });

      cy.get('.racing-winner-container')
        .find('h2')
        .should('have.text', `🏆 최종 우승자: ${winners.join(', ')} 🏆`);
    });
  });

  it('게임이 완료된 후 다시 시작하기 버튼을 클릭한 경우, car-name-input과 try-count-button의 값은 비워지고 활성화 된다. 또한 게임 결과와 우승자 결과 화면은 사라진다', () => {
    cy.get('[data-test=restart-button]').click();

    cy.get('[data-test=car-name-input]').should('not.be.disabled');
    cy.get('[data-test=car-name-input]').should('have.value', '');
    cy.get('[data-test=car-name-button]').should('not.be.disabled');

    cy.get('[data-test=try-count-input]').should('not.be.disabled');
    cy.get('[data-test=try-count-input]').should('have.value', '');
    cy.get('[data-test=try-count-button]').should('not.be.disabled');

    cy.get('.racing-result-container').should('not.be.visible');
  });

  it('정상적인 자동차 이름과/시도횟수를 입력하여 게임이 진행되는 경우, 로딩 창이 보였다가 사라져야 한다. 또한 게임이 종료 후 2초 후에 우승자 alert 메시지를 띄운다.', () => {
    cy.get('[data-test=car-name-input]').type(carNames.join(','));
    cy.get('[data-test=car-name-button]').click();
    cy.get('[data-test=try-count-input]').type(tryCount);
    cy.get('[data-test=try-count-button]').click();

    cy.get('.spinner-container').should('be.visible');
    cy.wait(tryCount * 1000);
    cy.get('.spinner-container').should('not.be.visible');

    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    cy.wait(2000).then(() => {
      expect(alertStub.getCall(0)).to.be.calledWith(
        GAME_MESSAGE.CONGRATULATION,
      );
    });
  });
});

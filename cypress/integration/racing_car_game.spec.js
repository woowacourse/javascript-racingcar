describe('Racing Car 게임 : 게임 진행 테스트', () => {
  before(() => {
    cy.visit('http://localhost:5500/');
  });

  it('car-name-input과 try-count-button에 정상적인 이름/횟수를 입력한 후, 모든 확인 버튼 클릭한 경우 게임 결과 창에 자동차 이름 목록을 정상적으로 출력한다.', () => {
    const carNames = ['EAST', 'WEST', 'SOUTH', 'NORTH'];

    cy.get('[data-test=car-name-input]').type(carNames.join(','));
    cy.get('[data-test=car-name-button]').click();
    cy.get('[data-test=try-count-input]').type('7');
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
    const scores = [];
    const winners = [];

    cy.document().then(document => {
      const carPlayers = document.querySelectorAll('.car-player');
      const carPlayerContainers = document.querySelectorAll(
        '.car-player-container',
      );

      carPlayerContainers.forEach($carPlayerContainer => {
        scores.push(
          $carPlayerContainer.querySelectorAll('.forward-icon').length,
        );
      });

      const maxScore = Math.max(...scores);
      carPlayers.forEach(($carPlayer, index) => {
        if (scores[index] === maxScore) {
          winners.push($carPlayer.innerText);
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
});

const { NUMBERS } = require('../../src/js/Constants/constants');

describe('자동차 경주 게임 View 테스트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
    cy.clock();
    cy.window().then((win) => cy.stub(win, 'alert').as('windowAlert'));
  });

  const defaultCarNames = 'EAST, WEST, SOUTH, NORTH';

  const initGame = () => {
    // Note: Cypress 체크 시 autofocus가 잡히지 않는 문제가 있어 수동으로 focus를 잡아둠
    cy.get('#car-names-input').should('have.attr', 'autofocus', 'autofocus').focus();
    cy.get('#car-names-container').should('be.visible');
    cy.get('#try-count-container').should('not.be.visible');
    cy.get('#game-progress-container').should('not.be.visible');
    cy.get('#game-result-container').should('not.be.visible');
    cy.get('#car-names-input').should('be.focused');
  };

  const inputCarNames = (carNames = defaultCarNames) => {
    cy.get('#car-names-input').type(carNames);
    cy.get('#car-names-check-button').click();
    cy.get('#try-count-input').should('be.focused');
    cy.get('#try-count-container').should('be.visible');
    cy.get('#game-progress-container').should('not.be.visible');
    cy.get('#game-result-container').should('not.be.visible');
  };

  const inputTryCount = (count) => {
    cy.get('#try-count-input').type(count);
    cy.get('#try-count-check-button').click();
  };

  const checkSpinner = (tryCount, timeInterval) => {
    for (let i = 0; i < tryCount; i++) {
      cy.tick(timeInterval);
      cy.get('.car-player').each((car) => {
        const currentPosition = car[0].dataset.position;
        cy.wrap(car).siblings('.forward-icon').should('have.length', currentPosition);
      });
    }
  }

  it('사용자는 페이지에 들어오면 자동차 이름을 입력하는 폼을 본다', () => {
    initGame();
  });

  it('자동차 이름을 입력하고, 확인버튼을 누르면, 시도 횟수 입력폼이 나타난다.', () => {
    initGame();
    inputCarNames();
  });

  it('사용자가 시도할 횟수를 입력하고, 확인 버튼을 누르면, 자동차 이름 입력 폼과 시도 횟수 입력 폼을 사용할 수 없다.', () => {
    initGame();
    inputCarNames();
    inputTryCount('3');
    cy.get('#car-names-input').should('be.disabled');
    cy.get('#car-names-check-button').should('be.disabled');
    cy.get('#try-count-input').should('be.disabled');
    cy.get('#try-count-check-button').should('be.disabled');
  })

  it('사용자가 시도할 횟수를 입력하고, 확인 버튼을 누르면, 1초에 한 번씩 게임 진행상황을 확인할 수 있다.', () => {
    initGame();
    inputCarNames();
    inputTryCount('3');
    cy.get('#game-progress-container').should('be.visible');
    cy.get('#game-result-container').should('not.be.visible');

    defaultCarNames.split(',')
      .map((name, index) => cy.get('.car-player')
        .eq(index)
        .should('have.text', name.trim()));

    cy.get('.car-player-container').find('.spinner-container').should('be.visible');

    checkSpinner(3, 1000);
  });

  it('게임 진행상황이 모두 표시 되면, 1초후 결과 화면이 보여진다.', () => {
    initGame();
    inputCarNames();
    inputTryCount('3');
    cy.get('#game-progress-container').should('be.visible');
    cy.get('#game-result-container').should('not.be.visible');

    defaultCarNames.split(',')
      .map((name, index) => cy.get('.car-player')
        .eq(index)
        .should('have.text', name.trim()));

    cy.get('.car-player-container').find('.spinner-container').should('be.visible');

    checkSpinner(3, 1000);
    cy.tick(1000);
    cy.get('.car-player-container').each((container) => {
      cy.wrap(container).get('.spinner-container').should('not.be.visible');
    })
    cy.get('#game-result-container').should('be.visible');
  });

  it('최종 우승자가 제대로 표시되는지 확인한다.', () => {
    initGame();
    inputCarNames();
    inputTryCount('10');

    // 중간 상황은 다른 테스트로 확인할 필요 없으므로 실행되는 만큼 지연시간을 둠.
    cy.tick(1000 * 11);
    const positions = [];
    cy.get('.car-player').each((car) => {
      positions.push(Number(car[0].dataset.position));
    }).then(() => {
      const maxPosition = Math.max(...positions);
      const winners = [];
      cy.get(`[data-position=${maxPosition}]`)
        .each((winner) => winners.push(winner[0].innerText))
        .then(() => cy.get('#game-result-container > h2').should('have.text', `🏆 최종 우승자: ${winners.join(", ")} 🏆`));
    });
  });

  it('게임 결과 화면이 보여진 후, 2초후 축하의 메세지가 alert 로 띄워진다.', () => {
    initGame();
    inputCarNames();
    inputTryCount('3');
    cy.get('#game-progress-container').should('be.visible');
    cy.get('#game-result-container').should('not.be.visible');

    // 중간 상황은 다른 테스트로 확인할 필요 없으므로 실행되는 만큼 지연시간을 둠.
    cy.tick(3 * NUMBERS.SECOND); // 진행 상황 표시
    cy.tick(1 * NUMBERS.SECOND); // 결과 화면 표시

    // 우승자 확인
    cy.tick(2000);
    const positions = [];

    cy.get('.car-player').each((car) => {
      positions.push(Number(car[0].dataset.position));
    }).then(() => {
      const maxPosition = Math.max(...positions);
      const winners = [];
      cy.get(`[data-position=${maxPosition}]`)
        .each((winner) => winners.push(winner[0].innerText))
        .then(() => {
          cy.get('@windowAlert')
            .should('have.callCount', 1)
            .its('lastCall')
            .should(
              'be.calledWith',
              `🎉🎉🎉${winners.join(', ')}의 승리입니다. 축하합니다!🎉🎉🎉`,
            )
        })
    });
  })

  it('사용자가 다시시작 버튼을 누르면 게임이 초기화된다.', () => {
    initGame();
    inputCarNames();
    inputTryCount('10');

    // 중간 상황은 다른 테스트로 확인할 필요 없으므로 실행되는 만큼 지연시간을 둠.
    cy.tick(10 * NUMBERS.SECOND); // 진행 상황 표시
    cy.tick(1 * NUMBERS.SECOND); // 결과 화면 표시
    cy.tick(2 * NUMBERS.SECOND); // alert 메시지 

    cy.get('#reset-button').click();
    cy.tick(0);
    initGame();
  });
});

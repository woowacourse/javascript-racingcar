describe('자동차 경주 게임 View 테스트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
    cy.clock();
  });

  const defaultCarNames = 'EAST, WEST, SOUTH, NORTH';

  const initGame = () => {
    cy.get('#car-names-container').should('be.visible');
    cy.get('#try-count-container').should('not.be.visible');
    cy.get('#game-progress-container').should('not.be.visible');
    cy.get('#game-result-container').should('not.be.visible');
  };

  const inputCarNames = (carNames = defaultCarNames) => {
    cy.get('#car-names-input').type(carNames);
    cy.get('#car-names-check-button').click();
    cy.get('#try-count-container').should('be.visible');
    cy.get('#game-progress-container').should('not.be.visible');
    cy.get('#game-result-container').should('not.be.visible');
  };

  const inputTryCount = (count) => {
    cy.get('#try-count-input').type(count);
    cy.get('#try-count-check-button').click();
  };

  it('사용자는 페이지에 들어오면 자동차 이름을 입력하는 폼을 본다', () => {
    initGame();
  });

  it('자동차 이름을 입력하고, 확인버튼을 누르면, 시도 횟수 입력폼이 나타난다.', () => {
    initGame();
    inputCarNames();
  });

  it('사용자는 시도할 횟수를 입력하고, 사용자는 확인 버튼을 누르면, 진행 화면에 로딩(스피너)가 1초간 돌아가는 것을 본다.', () => {
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
    cy.tick(1000);
    cy.get('.car-player').each((car, idx) => {
      const currentPosition = car[0].dataset.position;
      cy.get('.car-player').eq(idx).siblings('.forward-icon').should('have.length', currentPosition);
    });
    cy.tick(1000);
    cy.get('.car-player').each((car, idx) => {
      const currentPosition = car[0].dataset.position;
      cy.get('.car-player').eq(idx).siblings('.forward-icon').should('have.length', currentPosition);
    });
    cy.tick(1000);
    cy.get('.car-player').each((car, idx) => {
      const currentPosition = car[0].dataset.position;
      cy.get('.car-player').eq(idx).siblings('.forward-icon').should('have.length', currentPosition);
    });
    cy.tick(2000);
    cy.get('.car-player-container').each(container => {
      cy.wrap(container).get('.spinner-container').should('not.be.visible');
    })
    cy.get('#game-result-container').should('be.visible');
  });

  // it('사용자가 다시시작 버튼을 누르면 게임이 초기화된다.', () => {
  //   initGame();
  //   inputCarNames();
  //   inputTryCount('10');
  //   cy.get('#reset-button').click();
  //   initGame();
  // });

  // it('게임 진행이 처음부터 끝까지 정상적으로 작동한다. 초기화 이후 게임이 처음부터 정상적으로 작동한다.', () => {
  //   initGame();
  //   inputCarNames();
  //   inputTryCount('10');
  //   cy.get('#reset-button').click();
  //   initGame();
  //   inputCarNames();
  //   inputTryCount('10');
  // });

  // it('거리에 맞게 화살표가 그려지는지 확인한다.', () => {
  //   initGame();
  //   inputCarNames();
  //   inputTryCount('10');
  //   cy.get('.car-player').each((car, idx) => {
  //     const currentPosition = car[0].dataset.position;
  //     cy.get('.car-player').eq(idx).siblings('.forward-icon').should('have.length', currentPosition);
  //   });
  // });


  it('최종 우승자가 제대로 표시되는지 확인한다.', () => {
    initGame();
    inputCarNames();
    inputTryCount('10');

    cy.tick(1000 * 12);
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
});

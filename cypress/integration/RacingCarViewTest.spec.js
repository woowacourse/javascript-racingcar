describe('자동차 경주 게임 View 테스트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
  });

  const defaultCarNames = 'EAST, WEST, SOUTH, NORTH';

  const initGame = () => {
    cy.get('#input-car-names').should('be.visible');
    cy.get('#input-try-count').should('not.be.visible');
    cy.get('#display-game-progress').should('not.be.visible');
    cy.get('#display-game-result').should('not.be.visible');
  };

  const inputCarNames = (carNames = defaultCarNames) => {
    cy.get('#input-car-names > div > input').type(carNames);
    cy.get('#input-car-names > div > button').click();
    cy.get('#input-try-count').should('be.visible');
    cy.get('#display-game-progress').should('not.be.visible');
    cy.get('#display-game-result').should('not.be.visible');
  };

  const inputTryCount = (count) => {
    cy.get('#input-try-count > div > input').type(count);
    cy.get('#input-try-count > div > button').click();
    cy.get('#display-game-progress').should('be.visible');
    cy.get('#display-game-result').should('be.visible');
  };

  it('사용자는 페이지에 들어오면 자동차 이름을 입력하는 폼을 본다', () => {
    initGame();
  });

  it('자동차 이름을 입력하고, 확인버튼을 누르면, 시도 횟수 입력폼이 나타난다.', () => {
    initGame();
    inputCarNames();
  });

  it('사용자는 시도할 횟수를 입력하고, 확인 버튼을 누르면, 결과 화면이 보인다.', () => {
    initGame();
    inputCarNames();
    inputTryCount('10');

    defaultCarNames.split(',')
      .map((name, index) =>
        cy.get('.car-player').eq(index).should('have.text', name)
      );
  });

  it('사용자가 다시시작 버튼을 누르면 게임이 초기화된다.', () => {
    initGame();
    inputCarNames();
    inputTryCount('10');
    cy.get('#display-game-result > div > button').click();
    initGame();
  });

  it('게임 진행이 처음부터 끝까지 정상적으로 작동한다. 초기화 이후 게임이 처음부터 정상적으로 작동한다.', () => {
    initGame();
    inputCarNames();
    inputTryCount('10');
    cy.get('#display-game-result > div > button').click();
    initGame();
    inputCarNames();
    inputTryCount('10');
  });

  it('거리에 맞게 화살표가 그려지는지 확인한다.', () => {
    initGame();
    inputCarNames();
    inputTryCount('10');
    cy.get('.car-player').each((position, idx) => {
      const currentPosition = position[0].dataset.position;
      cy.get('.car-player').eq(idx).siblings('.forward-icon').should('have.length', currentPosition);
    });
  });
});

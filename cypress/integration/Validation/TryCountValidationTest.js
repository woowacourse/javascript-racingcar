describe('시도 횟수 유효성 테스트', () => {
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

  const alertTryCountError = (tryCount, errorMessage) => {
    const stub = cy.stub();
    initGame();
    inputCarNames();
    cy.get('#input-try-count > div > input').type(tryCount);
    cy.on('window:alert', stub);
    cy
      .get('#input-try-count > div > button').click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith(errorMessage);
        cy.get('#display-game-progress').should('not.be.visible');
        cy.get('#display-game-result').should('not.be.visible');
      });
  };

  it('입력된 값이 정수가 아닌 경우 경고창을 띄운다.', () => {
    alertTryCountError('2.3', '시도 횟수는 정수로 입력해주세요.');
  });

  it('입력된 값이 0이하일 경우 경고창을 띄운다.', () => {
    alertTryCountError('-1', '시도 횟수는 1이상의 정수로 입력해주세요.');
  });
});

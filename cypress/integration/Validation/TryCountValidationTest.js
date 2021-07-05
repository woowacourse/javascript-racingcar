describe('시도 횟수 유효성 테스트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
    cy.window().then((win) => cy.stub(win, 'alert').as('windowAlert'));
  });

  const defaultCarNames = 'EAST, WEST, SOUTH, NORTH';

  const initGame = () => {
    cy.get('#input-names-wrapper').should('be.visible');
    cy.get('#input-count-wrapper').should('not.be.visible');
    cy.get('#display-game-progress').should('not.be.visible');
    cy.get('#display-game-result').should('not.be.visible');
  };

  const inputCarNames = (carNames = defaultCarNames) => {
    cy.get('#input-car-names').type(carNames);
    cy.get('#input-names-btn').click();
    cy.get('#input-count-wrapper').should('be.visible');
    cy.get('#display-game-progress').should('not.be.visible');
    cy.get('#display-game-result').should('not.be.visible');
  };

  const alertTryCountError = (tryCount, errorMessage) => {
    initGame();
    inputCarNames();
    cy.get('#input-try-count').type(tryCount);
    cy.get('#input-count-btn').click();
    cy.get('@windowAlert')
      .should('have.callCount', 1) //  몇번째 호출되었는지 반드시 확인!
      .its('lastCall')
      .should('be.calledWith', errorMessage);
    cy.get('#display-game-progress').should('not.be.visible');
    cy.get('#display-game-result').should('not.be.visible');
  };

  it('입력된 값이 정수가 아닌 경우 경고창을 띄운다.', () => {
    alertTryCountError('2.3', '시도 횟수는 정수로 입력해주세요.');
  });

  it('입력된 값이 0이하일 경우 경고창을 띄운다.', () => {
    alertTryCountError('-1', '시도 횟수는 1이상의 정수로 입력해주세요.');
  });
});

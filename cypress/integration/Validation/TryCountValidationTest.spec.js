describe('시도 횟수 유효성 테스트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
    cy.window().then((win) => cy.stub(win, 'alert').as('windowAlert'));
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

  const alertTryCountError = (tryCount, errorMessage) => {
    initGame();
    inputCarNames();
    cy.get('#try-count-input').type(tryCount);
    cy.get('#try-count-check-button').click()
    cy.get('@windowAlert')
      .should('have.callCount', 1) //  몇번째 호출되었는지 반드시 확인!
      .its('lastCall')
      .should(
        'be.calledWith',
        errorMessage,
      )
    cy.get('#game-progress-container').should('not.be.visible');
    cy.get('#game-result-container').should('not.be.visible');
  };

  it('입력된 값이 정수가 아닌 경우 경고창을 띄운다.', () => {
    alertTryCountError('2.3', '시도 횟수는 정수로 입력해주세요.');
  });

  it('입력된 값이 0이하일 경우 경고창을 띄운다.', () => {
    alertTryCountError('-1', '시도 횟수는 1이상의 정수로 입력해주세요.');
  });
});

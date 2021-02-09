describe('자동차 경주 게임 View 테스트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
  });

  const initGame = () => {
    cy.get('#input-car-names').should('be.visible');
    cy.get('#input-try-count').should('not.be.visible');
    cy.get('#display-game-progress').should('not.be.visible');
    cy.get('#display-game-result').should('not.be.visible');
  };

  const alertCarNameError = (carNames, errorMessage) => {
    const stub = cy.stub();
    initGame();
    cy.get('#input-car-names > div > input').type(carNames);
    cy.on('window:alert', stub);
    cy
      .get('#input-car-names > div > button').click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith(errorMessage);
        cy.get('#input-try-count').should('not.be.visible');
        cy.get('#display-game-progress').should('not.be.visible');
        cy.get('#display-game-result').should('not.be.visible');
      });
  };

  it('자동차 이름이 5자 초과인 경우 경고창을 띄운다.', () => {
    alertCarNameError('aaaaa, aaaaaaa, aaaa', '자동차 이름은 5글자 이하여야합니다.(앞 뒤 공백 제외)');
  });

  it('자동차 이름이 공백인 경우 경고창을 띄운다.', () => {
    alertCarNameError('aaaaa, , aaaa', '자동차 이름은 1글자 이상으로 입력해 주세요');
  });
});

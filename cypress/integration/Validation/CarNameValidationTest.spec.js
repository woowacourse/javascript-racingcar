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

  it('자동차 이름이 5자 초과인 경우', () => {
    const stub = cy.stub();
    initGame();
    cy.get('#input-car-names > div > input').type('aaaaa, aaaaaaa, aaaa');
    cy.on('window:alert', stub);
    cy
      .get('#input-car-names > div > button').click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('자동차 이름은 5글자 이하여야합니다.(앞 뒤 공백 제외)');
        cy.get('#input-try-count').should('not.be.visible');
        cy.get('#display-game-progress').should('not.be.visible');
        cy.get('#display-game-result').should('not.be.visible');
      });
  });
});

describe('자동차 경주 게임 테스트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
  });

  it('사용자는 페이지에 들어오면 자동차 이름을 입력하는 폼을 본다', () => {
    cy.get('#input-car-names').should('be.visible');
    cy.get('#input-try-count').should('not.be.visible');
    cy.get('#display-game-progress').should('not.be.visbile');
    cy.get('#display-game-result').should('not.be.visbile');
  });
});

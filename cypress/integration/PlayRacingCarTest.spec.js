describe('자동차 경주 게임 테스트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
  });

  it('사용자는 페이지에 들어오면 자동차 이름을 입력하는 폼을 본다', () => {
    cy.get('#input-car-names').should('be.visible');
    cy.get('#input-try-count').should('not.be.visible');
    cy.get('#display-game-progress').should('not.be.visible');
    cy.get('#display-game-result').should('not.be.visible');
  });

  it('자동차 이름을 입력하고, 확인버튼을 누르면, 시도 횟수 입력폼이 나타난다.', () => {
    cy.get('#input-car-names > div > input').type('EAST, WEST, SOUTH, NORTH');
    cy.get('#input-car-names > div > button').click();
    cy.get('#input-try-count').should('be.visible');
    cy.get('#display-game-progress').should('not.be.visible');
    cy.get('#display-game-result').should('not.be.visible');
  });

  it('사용자는 시도할 횟수를 입력하고, 확인 버튼을 누르면, 결과 화면이 보인다.', () => {
    cy.get('#input-try-count > div > input').type('10');
    cy.get('#input-try-count > div > button').click();
    cy.get('#display-game-progress').should('be.visible');
    cy.get('#display-game-result').should('be.visible');
  });
});

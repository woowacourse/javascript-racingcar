describe('레이싱 게임', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500');
  });

  it('자동차 이름을 부여하면 시도할 횟수 입력창이 노출된다.', () => {
    cy.get('#input-car-name').type('aaa,bbb,ccc');
    cy.get('#submit-car-name').click();
    cy.get('#section-race-times').should('be.visible');
  });
});

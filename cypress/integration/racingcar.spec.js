describe('racingcar Test', () => {
  it('입력을 받고 우승자를 출력할 수 있어야 한다', () => {
    const carNames = 'east, west, south, north, all';
    const count = 5;

    cy.visit('index.html');
    cy.get('.name-input').type(carNames);
    cy.get('.name-button').click();

    cy.get('.count-input').type(count);
    cy.get('.count-button').click();
  });
});

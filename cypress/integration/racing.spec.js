describe('자동차 경주', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5501');
  });

  it('처음에 페이지 접속하면 input이 전부 비워져 있고, result창은 숨겨져 있다.', () => {
    cy.get('.car-name').should('have.value', '');
    cy.get('.try-count').should('have.value', '');
    cy.get('.progress-container').should('have.css', 'display', 'none');
    cy.get('.result-container').should('have.css', 'display', 'none');
  });

  it('사용자가 자동차 이름을 입력하면 배열에 저장한다.', () => {
    cy.get('.car-name').type('east, west, south, north');
    cy.get('.car-name-btn').click();
    cy.get('.try-count-form').should('have.css', 'display', 'block');
  });

  it('자동차 이름은 5자 이하여야 한다.', () => {
    cy.get('.car-name').type('easttt, west, south, north');

    let alerted = false;
    cy.on('window:alert', msg => (alerted = msg));
    cy.get('.car-name-btn').click();

    cy.get('.car-name')
      .invoke('val')
      .then(carNameInput => {
        const carNames = carNameInput.split(',');
        if (carNames.some(name => name.trim().length > 5)) {
          console.log('over length 5');
          expect(alerted).to.equal('자동차 이름을 5자 이하로 입력해 주세요.');
          cy.on('window:confirm', () => true);
        }
      });
  });
});

/* eslint-disable */
describe('구현 결과가 요구사항과 일치해야 한다.', () => {
  beforeEach(() => {
    cy.visit('index.html');
  });

  it('잘못된 자동차 이름을 입력하는 경우 alert이 호출되어야 한다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get('#car-names-input').type('ab,c,zdffddd');
    cy.get('#car-names-button')
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });

    cy.get('#car-names-input').type(' ');
    cy.get('#car-names-button')
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it('입력된 횟수가 1 보다 작을 경우 alert이 호출되어야 한다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get('#car-names-input').type('a,b,c');
    cy.get('#car-names-button').click();
    cy.get('#racing-count-input').type(0);
    cy.get('#racing-count-button')
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });
});

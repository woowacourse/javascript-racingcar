/* eslint-disable */
describe('구현 결과가 요구사항과 일치해야 한다.', () => {
  beforeEach(() => {
    cy.visit('index.html');
  });

  it('입력된 자동차 이름이 5자 초과이면, alert 메세지를 띄운다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get('#car-names-input').type('ab,c,zdffddd');
    cy.get('#car-names-button')
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it('입력된 자동차 이름이 공백이면, alert 메세지를 띄운다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get('#car-names-input').type(' ');
    cy.get('#car-names-button')
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it('입력된 횟수가 1보다 작으면, alert 메세지를 띄운다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    // 자동차 이름을 입력해야 횟수창이 보이므로 이름을 먼저 추가한다
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

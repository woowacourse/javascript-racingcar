describe('자동차 경주 게임', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
  });

  it('자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.', () => {
    const alertStub = cy.stub();
    cy.get('#car-names-input').type('easteee,west');
    cy.get('#car-names-button').click();
    cy.on('window:alert', alertStub);
  });

  it('자동차 이름이 빈칸이면 alert을 띄운다.', () => {
    const alertStub = cy.stub();
    cy.get('#car-names-input').type(' , a,b,c');
    cy.get('#car-names-button').click();
    cy.on('window:alert', alertStub);
  });

  it('시도할 횟수가 소수이면 alert을 띄운다.', () => {
    const alertStub = cy.stub();
    cy.get('#car-racing-count-input').type(1.2);
    cy.get('#car-racing-count-button').click();
    cy.on('window:alert', alertStub);
  });

  it('시도할 횟수가 음수이면 alert을 띄운다.', () => {
    const alertStub = cy.stub();
    cy.get('#car-racing-count-input').type(-3);
    cy.get('#car-racing-count-button').click();
    cy.on('window:alert', alertStub);
  });

  it('시도할 횟수가 문자열이면 alert을 띄운다.', () => {
    const alertStub = cy.stub();
    cy.get('#car-racing-count-input').type('a');
    cy.get('#car-racing-count-button').click();
    cy.on('window:alert', alertStub);
  });
});

describe('구현 결과가 요구사항과 일치해야 한다.', () => {
  const baseUrl = '../../index.html';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('게임을 완료하고 우승자를 확인할 수 있어야 한다.', () => {
    //given
    const nameInput = 'bling,juunz';
    const countInput = 1;

    //when
    cy.get('#car-name-input').type(nameInput);
    cy.get('#car-name-btn').click();
    cy.get('#count-input').type(countInput);
    cy.get('#count-btn').click();

    //then
    cy.get('#winner-name').should('be.visible');
  });

  it('잘못된 자동차 이름을 입력하면 alert가 호출되어야 한다.', () => {
    //given
    const alertStub = cy.stub();
    const invalidInput = 'juunzzi';

    cy.on('window:alert', alertStub);

    //when
    cy.get('#car-name-input').type(invalidInput);

    //then
    cy.get('#car-name-btn')
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it('횟수 입력란에 1 미만의 값이 주어지면 alert가 호출되어야 한다.', () => {
    //given
    const alertStub = cy.stub();
    const invalidInput = -1;
    const nameInput = 'bling,juunz';

    //when
    cy.get('#car-name-input').type(nameInput);
    cy.get('#car-name-btn').click();
    cy.get('#count-input').type(invalidInput);

    cy.on('window:alert', alertStub);

    //then
    cy.get('#count-btn')
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it('재시작 버튼을 누르면 처음 상태로 돌아가야 한다.', () => {
    //given
    const nameInput = 'bling,juunz';
    const countInput = 2;

    //when
    cy.get('#car-name-input').type(nameInput);
    cy.get('#car-name-btn').click();
    cy.get('#count-input').type(countInput);
    cy.get('#count-btn').click();
    cy.get('#restart-btn').click();

    //then
    cy.get('.car-progress').should('not.exist');
    cy.get('.winner-container').should('not.exist');
    cy.get('#count-input').should('not.be.visible');
  });
});

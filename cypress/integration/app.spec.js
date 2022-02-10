describe('구현 결과가 요구사항과 일치해야 한다.', () => {
  const baseUrl = '../../index.html';

  before(() => {
    Cypress.Commands.add('stubRandomReturns', (returnValues = []) => {
      const randomStub = cy.stub();

      returnValues.forEach((value, index) => {
        randomStub.onCall(index).returns(value);
      });

      cy.visit(baseUrl, {
        onBeforeLoad: (window) => {
          window.MissionUtils = {
            Random: {
              pickNumberInRange: randomStub,
            },
          };
        },
      });
    });
  });

  beforeEach(() => {
    cy.stubRandomReturns([5, 1]);
  });

  it('게임을 완료하고 우승자를 확인할 수 있어야 한다.', () => {
    //given
    const nameInput = 'bling,juunz';
    const countInput = 1;
    const winner = 'bling';

    //when
    cy.get('#car-name-input').type(nameInput);
    cy.get('#car-name-btn').click();
    cy.get('#count-input').type(countInput);
    cy.get('#count-btn').click();

    //then
    cy.get('#winner-name').should('have.text', winner);
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

    cy.on('window:alert', alertStub);

    //when
    cy.get('#count-input').type(invalidInput);

    //then
    cy.get('#count-btn')
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });
});

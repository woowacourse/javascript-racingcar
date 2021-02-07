describe('racing-game', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
  });

  it('"EAST, WEST, SOUTH, NORTH"를 입력하면 화면에 해당 자동차 이름들을 표시하는 테스트를 한다.', () => {
    const carNames = ['EAST', 'WEST', 'SOUTH', 'NORTH'];

    typeAndSubmit(carNames);
    cy.get('.car-player')
      .should('have.length', carNames.length)
      .each(($div, index, $lis) => {
        return cy.get($div).should('have.text', carNames[index]);
      });
  });

  it('올바르지 않은 자동차 이름을 입력한 경우 경고메세지를 출력한다.', () => {
    const longCarName = ['YUJOYOONHO'];
    const blankCarName = ['   '];
    const emptyCarName = [''];
    const alertStub = cy.stub();

    cy.on('window:alert', alertStub);
    typeAndSubmit(longCarName).then(() => {
      expect(alertStub.getCall(0)).to.be.calledWith(
        '이름은 5글자 이하로 입력해 주세요.',
      );
      cy.get('#car-name-input').should('have.text', '');
    });
    typeAndSubmit(blankCarName).then(() => {
      expect(alertStub.getCall(0)).to.be.calledWith(
        '공백만으로는 이름을 구성할 수 없습니다.',
      );
      cy.get('#car-name-input').should('have.text', '');
    });
    typeAndSubmit(emptyCarName).then(() => {
      expect(alertStub.getCall(0)).to.be.calledWith(
        '공백만으로는 이름을 구성할 수 없습니다.',
      );
      cy.get('#car-name-input').should('have.text', '');
    });
  });

  // it('네자리 이상의 숫자가 입력됐을 경우 경고메세지가 뜬다.', () => {
  const stub = cy.stub();

  cy.on('window:alert', stub);

  cy.get('#total').then(() => {
    cy.get('.digits')
      .contains('1')
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith(
          '숫자는 세 자리까지만 입력 가능합니다!',
        );
      });
    cy.get('#total').should('have.text', '111/111');
  });
  // });
});
const typeAndSubmit = (carNames) => {
  cy.get('#car-name-input').type(carNames.join(','));
  cy.get('#car-name-submit').click();
};

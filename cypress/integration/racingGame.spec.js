describe('racing-game', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
  });

  it('"EAST, WEST, SOUTH, NORTH"를 입력하면 화면에 해당 자동차 이름들을 표시하는 테스트를 한다.', () => {
    const carNames = ['EAST', 'WEST', 'SOUTH', 'NORTH'];
    cy.get('#car-name-input').type('EAST, WEST, SOUTH, NORTH');
    cy.get('#car-name-submit').click();

    cy.get('.car-player')
      .should('have.length', carNames.length)
      .each(($div, index, $lis) => {
        return cy.get($div).should('have.text', carNames[index]);
      });
  });

  // it('네자리 이상의 숫자가 입력됐을 경우 경고메세지가 뜬다.', () => {
  //   const stub = cy.stub();

  //   cy.on('window:alert', stub);

  //   cy.get('#total').then(() => {
  //     cy.get('.digits')
  //       .contains('1')
  //       .click()
  //       .then(() => {
  //         expect(stub.getCall(0)).to.be.calledWith(
  //           '숫자는 세 자리까지만 입력 가능합니다!',
  //         );
  //       });
  //     cy.get('#total').should('have.text', '111/111');
  //   });
  // });
});

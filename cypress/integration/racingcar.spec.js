describe('racingcar', () => {
  beforeEach(() => {
    cy.visit('http://localhost:49191/');
  });

  it('자동차 이름을 올바르게 입력한다.', () => {
    cy.get('#car_names_input').type('east, west, south, north, all');

    const stub = cy.stub();

    cy.on('window:alert', stub);
    cy.get('.input_btn')
      .eq(0)
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.not.be.called;
      });
  });

  it('자동차 이름은 공백을 입력할 수 없다.', () => {
    cy.get('#car_names_input').type('east, , south, north, all');

    const stub = cy.stub();

    cy.on('window:alert', stub);
    cy.get('.input_btn')
      .eq(0)
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('test');
      });
  });

  it('자동차 이름은 5자 이하만 가능하다.', () => {
    cy.get('#car_names_input').type('woowacourse, west, south, north, all');

    const stub = cy.stub();

    cy.on('window:alert', stub);
    cy.get('.input_btn')
      .eq(0)
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('test');
      });
  });

  it('자동차 이름은 최소 1개 이상 입력해야 한다.', () => {
    const stub = cy.stub();

    cy.on('window:alert', stub);
    cy.get('.input_btn')
      .eq(0)
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('test');
      });
  });
});

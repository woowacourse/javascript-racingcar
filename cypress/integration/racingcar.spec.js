describe('자동차 이름 입력 기능 테스트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:49191/');
  });

  it('자동차 이름을 올바르게 입력한다.', () => {
    cy.get('#car_names_input').type('east, west, south, north, all');

    // const stub = cy.stub();

    // cy.on('window:alert', stub);
    // cy.get('.input_btn')
    //   .eq(0)
    //   .click()
    //   .then(() => {
    //     expect(stub.getCall(0)).to.not.be.called;
    //   });

    const spy = cy.spy(window, 'alert');

    cy.get('.input_btn')
      .eq(0)
      .click()
      .wait(1000)
      .then(() => {
        expect(spy).to.not.be.called;
      });

    cy.get('#racing_count_form').should('have.css', 'display', 'block');
  });

  it('자동차 이름은 최소 1개 이상 입력해야 한다.', () => {
    const stub = cy.stub();

    cy.on('window:alert', stub);
    cy.get('.input_btn')
      .eq(0)
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('자동차 이름은 최소 1개 이상 입력해야 한다.');
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
        expect(stub.getCall(0)).to.be.calledWith('자동차 이름의 길이는 5 이하로만 입력해야 한다.');
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
        expect(stub.getCall(0)).to.be.calledWith('자동차 이름은 공백이면 안된다.');
      });
  });
});

describe('시도할 횟수 입력 기능 테스트', () => {
  const triggerCarNameSubmitEvent = () => {
    cy.get('#car_names_input').type('east, west, south, north, all');
    cy.get('.input_btn').eq(0).click();
  };

  beforeEach(() => {
    cy.visit('http://localhost:49191/');
    triggerCarNameSubmitEvent();
  });

  it('시도할 횟수를 올바르게 입력한다.', () => {
    cy.get('#racing_count_input').type(10);

    const spy = cy.spy(window, 'alert');

    cy.get('.input_btn')
      .eq(1)
      .click()
      .wait(1000)
      .then(() => {
        expect(spy).to.not.be.called;
      });
  });

  it('시도할 횟수는 공백을 입력할 수 없다.', () => {
    const stub = cy.stub();

    cy.on('window:alert', stub);
    cy.get('.input_btn')
      .eq(1)
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('시도할 횟수는 공백이면 안된다.');
      });
  });

  it('시도할 횟수는 자연수만 입력한다.', () => {
    cy.get('#racing_count_input').type(-1);
    const stub = cy.stub();

    // 실패 이유: 공백이면 안된다.
    cy.on('window:alert', stub);
    cy.get('.input_btn')
      .eq(1)
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('시도할 횟수는 자연수를 입력해야 한다.');
      });
  });
});

describe('UI 조작 테스트', () => {
  it('자동차 이름이 공백인 경우 alert를 띄운다', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.visit('index.html');
    cy.get('.input-section__name-input')
      .type('{enter}')
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it('자동차 이름이 6자 이상인 경우 alert를 띄운다', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.visit('index.html');
    cy.get('.input-section__name-input')
      .type('abcdefg,abc,ddd{enter}')
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it('횟수가 0 또는 음수인 경우 alert를 띄운다', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.visit('index.html');

    cy.get('.input-section__name-input').type('east,west,south,north{enter}');

    cy.get('.input-section__count-input')
      .type('-3{enter}')
      .then(() => {
        expect(alertStub).to.be.called;
      });
    cy.get('.input-section__count-input')
      .clear()
      .type('0{enter}')
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it('횟수가 소수점인 경우 alert를 띄운다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.visit('index.html');
    cy.get('.input-section__count-input')
      .type('2.8{enter}')
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });
});

context('화면표시 테스트', () => {
  it('자동차 이름과 횟수를 입력하면, 결과의 자동차 개수가 입력된 자동차 개수와 같다.', () => {
    cy.visit('index.html');
    cy.get('.input-section__name-input').type('east,west,south,north{enter}');
    cy.get('.input-section__count-input').type('2{enter}');

    cy.get('.result-sections > .result-section').should(($section) => {
      expect($section).to.have.length(4);
    });
  });

  it('자동차 이름과 횟수를 입력하면, 레이싱 경기 우승자가 표시된다.', () => {
    cy.visit('index.html');
    cy.get('.input-section__name-input').type('east,west,south,north{enter}');

    cy.get('.input-section__count-input').type('2{enter}');
    cy.get('#winner').should((p) => {
      expect(p).to.contain('최종 우승자');
    });
  });

  it('자동차 이름과 횟수를 입력하면, "다시 시작하기" 버튼이 표시된다.', () => {
    cy.visit('index.html');
    cy.get('.input-section__name-input').type('east,west,south,north{enter}');

    cy.get('.input-section__count-input').type('2{enter}');
    cy.get('#reset-button').should('be.visible');
  });

  it('"다시 시작하기" 버튼을 클릭하면, 레이싱 결과와 다시 시작하기 버튼이 사라진다.', () => {
    cy.visit('index.html');
    cy.get('.input-section__name-input').type('east,west,south,north{enter}');

    cy.get('.input-section__count-input').type('2{enter}');
    cy.get('#reset-button')
      .click()
      .then(() => {
        cy.get('.result-sections').should('not.be.visible');
        cy.get('#winner').should('not.be.visible');
        cy.get('#reset-button').should('not.be.visible');
      });
  });

  it('"다시 시작하기" 버튼을 클릭하면, input들을 초기화한다.', () => {
    cy.visit('index.html');
    cy.get('.input-section__name-input').type('east,west,south,north{enter}');

    cy.get('.input-section__count-input').type('2{enter}');
    cy.get('#reset-button')
      .click()
      .then(() => {
        cy.get('.input-section__name-input').should('have.value', '');
        cy.get('.input-section__count-input').should('have.value', '');
      });
  });
});

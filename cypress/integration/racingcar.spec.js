it('자동차의 이름이 5자 초과일 때 확인버튼을 누를 시, alert 띄우기', () => {
  cy.visit('index.html');
  const alertStub = cy.stub();
  const invalidInput = 'abcdef,ab';
  cy.on('window:alert', alertStub);

  cy.get('#car-names-input').type(invalidInput);
  cy.get('#car-names-button')
    .click()
    .then(() => {
      expect(alertStub).to.be.called;
    });
});

it('자동차 이름에 중복이 존재할 때 확인버튼을 누를 시, alert 띄우기', () => {
  cy.visit('index.html');
  const alertStub = cy.stub();
  const invalidInput = 'ab,ab';
  cy.on('window:alert', alertStub);

  cy.get('#car-names-input').type(invalidInput);
  cy.get('#car-names-button')
    .click()
    .then(() => {
      expect(alertStub).to.be.called;
    });
});

it('자동차가 1대 이하일 때 확인버튼을 누를 시, alert 띄우기', () => {
  cy.visit('index.html');
  const alertStub = cy.stub();
  const invalidInput = 'a';
  cy.on('window:alert', alertStub);

  cy.get('#car-names-input').type(invalidInput);
  cy.get('#car-names-button')
    .click()
    .then(() => {
      expect(alertStub).to.be.called;
    });
});

it('`,`뒤에 자동차 이름이 입력되지 않았을 때 확인버튼을 누를 시, alert 띄우기', () => {
  cy.visit('index.html');
  const alertStub = cy.stub();
  const invalidInput = 'abcf,';
  cy.on('window:alert', alertStub);

  cy.get('#car-names-input').type(invalidInput);
  cy.get('#car-names-button')
    .click()
    .then(() => {
      expect(alertStub).to.be.called;
    });
});

it('시도 횟수 입력된 숫자가 1이상의 수가 아닐 시, alert 띄우기', () => {
  cy.visit('index.html');
  const alertStub = cy.stub();
  const invalidInput = -1;
  cy.on('window:alert', alertStub);

  cy.get('#try-count-input').type(invalidInput);
  cy.get('#try-count-button')
    .click()
    .then(() => {
      expect(alertStub).to.be.called;
    });
});

it('시도횟수만큼의 반복이 끝났을 떄 가장 많이 전진한 자동차를 최종 우승자로 출력한다.', () => {
  cy.visit('index.html');
  const tryCount = 3;
  const cars = 'a,b';
  const winner = 'a';

  cy.get('#car-names-input').type(cars);
  cy.get('#car-names-button').click();
  cy.get('#try-count-input').type(tryCount);
  cy.get('#try-count-button').click();

  cy.get('#winners').should('have.text', winner);
});

it('다시 게임을 시작하면 이전 결과를 지워준다.', () => {
  cy.visit('index.html');
  const cars = 'a,b';
  const tryCount = 3;

  cy.get('#car-names-input').type(cars);
  cy.get('#car-names-button').click();
  cy.get('#try-count-input').type(tryCount);
  cy.get('#try-count-button').click();
  cy.get('#reset-btn').click();

  cy.get('#turn-result').should('have.text', '');
  cy.get('#winners-result').should('have.text', '');
});

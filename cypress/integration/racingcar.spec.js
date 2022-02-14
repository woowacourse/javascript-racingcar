const CAR_NAMES_BUTTON = '#car-names-button';
const TRY_COUNT_BUTTON = '#try-count-button';

Cypress.Commands.add('checkDisplayAlert', button => {
  const alertStub = cy.stub();
  cy.on('window:alert', alertStub);
  cy.get(button)
    .click()
    .then(() => {
      expect(alertStub).to.be.called;
    });
});

beforeEach(() => {
  cy.visit('index.html');
});

it('자동차의 이름이 5자 초과일 때 확인버튼을 누를 시, alert 띄우기', () => {
  const invalidInput = 'abcdef,ab';

  cy.get('#car-names-input').type(invalidInput);
  cy.checkDisplayAlert(CAR_NAMES_BUTTON);
});

it('자동차 이름에 중복이 존재할 때 확인버튼을 누를 시, alert 띄우기', () => {
  const invalidInput = 'ab,ab';

  cy.get('#car-names-input').type(invalidInput);
  cy.checkDisplayAlert(CAR_NAMES_BUTTON);
});

it('자동차가 1대 이하일 때 확인버튼을 누를 시, alert 띄우기', () => {
  const invalidInput = 'a';

  cy.get('#car-names-input').type(invalidInput);
  cy.checkDisplayAlert(CAR_NAMES_BUTTON);
});

it('`,`뒤에 자동차 이름이 입력되지 않았을 때 확인버튼을 누를 시, alert 띄우기', () => {
  const invalidInput = 'abcf,';

  cy.get('#car-names-input').type(invalidInput);
  cy.checkDisplayAlert(CAR_NAMES_BUTTON);
});

it('시도 횟수 입력된 숫자가 1이상의 수가 아닐 시, alert 띄우기', () => {
  const invalidInput = -1;

  cy.get('#try-count-input').type(invalidInput);
  cy.checkDisplayAlert(TRY_COUNT_BUTTON);
});

it('다시 게임을 시작하면 이전 결과를 지워준다.', () => {
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

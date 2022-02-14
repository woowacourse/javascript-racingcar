describe('구현 결과가 요구사항과 일치해야 한다.', () => {
  const baseUrl = 'index.html';
  const SELECTOR = {
    CAR_NAMES_INPUT: '#car-names-input',
    CAR_NAMES_BUTTON: '#car-names-button',
    TRY_COUNT_INPUT: '#try-count-input',
    TRY_COUNT_BUTTON: '#try-count-button',
    RESET_BTN: '#reset-btn',
    TURN_RESULT: '#turn-result',
    WINNERS_RESULT: '#winners-result',
  };

  before(() => {
    cy.visit(baseUrl);

    Cypress.Commands.add('carNamesPositiveInputEvent', carNames => {
      const alertStub = cy.stub();

      cy.on('window:alert', alertStub);
      cy.get(SELECTOR.CAR_NAMES_INPUT).type(carNames);
      cy.get(SELECTOR.CAR_NAMES_BUTTON)
        .click()
        .then(() => {
          expect(alertStub).to.be.called;
        });
    });

    Cypress.Commands.add('tryCountPositiveInputEvent', tryCount => {
      const alertStub = cy.stub();

      cy.on('window:alert', alertStub);
      cy.get(SELECTOR.TRY_COUNT_INPUT).type(tryCount);
      cy.get(SELECTOR.TRY_COUNT_BUTTON)
        .click()
        .then(() => {
          expect(alertStub).to.be.called;
        });
    });
  });

  it('자동차의 이름이 5자 초과일 때 확인버튼을 누를 시, alert 띄우기', () => {
    const carNames = 'abcdef,ab';
    cy.carNamesPositiveInputEvent(carNames);
  });

  it('자동차 이름에 중복이 존재할 때 확인버튼을 누를 시, alert 띄우기', () => {
    const carNames = 'ab,ab';
    cy.carNamesPositiveInputEvent(carNames);
  });

  it('자동차가 1대 이하일 때 확인버튼을 누를 시, alert 띄우기', () => {
    const carNames = 'a';
    cy.carNamesPositiveInputEvent(carNames);
  });

  it('`,`뒤에 자동차 이름이 입력되지 않았을 때 확인버튼을 누를 시, alert 띄우기', () => {
    const carNames = 'abcf,';
    cy.carNamesPositiveInputEvent(carNames);
  });

  it('시도 횟수 입력된 숫자가 1이상의 수가 아닐 시, alert 띄우기', () => {
    const tryCount = -1;
    cy.tryCountPositiveInputEvent(tryCount);
  });

  it('다시 게임을 시작하면 이전 결과를 지워준다.', () => {
    const cars = 'a,b';
    const tryCount = 3;

    cy.get(SELECTOR.TRY_COUNT_INPUT).type(cars);
    cy.get(SELECTOR.CAR_NAMES_BUTTON).click();
    cy.get(SELECTOR.TRY_COUNT_INPUT).type(tryCount);
    cy.get(SELECTOR.TRY_COUNT_BUTTON).click();
    cy.get(SELECTOR.RESET_BTN).click();

    cy.get(SELECTOR.TURN_RESULT).should('have.text', '');
    cy.get(SELECTOR.WINNERS_RESULT).should('have.text', '');
  });
});

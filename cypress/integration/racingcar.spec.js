import { ELEMENT_SELECTOR } from '../../src/js/constants/constant.js';

describe('구현 결과가 요구사항과 일치해야 한다.', () => {
  const baseUrl = 'index.html';

  const positiveCarNamesInputTest = carNames => {
    // when
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.carNamesPositiveInputEvent(carNames).then(() => {
      expect(alertStub).to.be.called;
    });
  };

  const positiveTryCountInputTest = tryCount => {
    // when
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.tryCountPositiveInputEvent(tryCount).then(() => {
      expect(alertStub).to.be.called;
    });
  };

  before(() => {
    cy.visit(baseUrl);
  });

  it('자동차의 이름이 5자 초과일 때 확인버튼을 누를 시, alert 띄우기', () => {
    const carNames = 'abcdef,ab';
    positiveCarNamesInputTest(carNames);
  });

  it('자동차 이름에 중복이 존재할 때 확인버튼을 누를 시, alert 띄우기', () => {
    const carNames = 'ab,ab';
    positiveCarNamesInputTest(carNames);
  });

  it('자동차가 1대 이하일 때 확인버튼을 누를 시, alert 띄우기', () => {
    const carNames = 'a';
    positiveCarNamesInputTest(carNames);
  });

  it('`,`뒤에 자동차 이름이 입력되지 않았을 때 확인버튼을 누를 시, alert 띄우기', () => {
    const carNames = 'abcf,';
    positiveCarNamesInputTest(carNames);
  });

  it('시도 횟수 입력된 숫자가 1이상의 수가 아닐 시, alert 띄우기', () => {
    const tryCount = -1;
    positiveTryCountInputTest(tryCount);
  });

  it('다시 게임을 시작하면 이전 결과를 지워준다.', () => {
    const cars = 'a,b';
    const tryCount = 3;

    cy.get(ELEMENT_SELECTOR.TRY_COUNT_INPUT).type(cars);
    cy.get(ELEMENT_SELECTOR.CAR_NAMES_BUTTON).click();
    cy.get(ELEMENT_SELECTOR.TRY_COUNT_INPUT).type(tryCount);
    cy.get(ELEMENT_SELECTOR.TRY_COUNT_BUTTON).click();
    cy.get(ELEMENT_SELECTOR.RESET_BTN).click();

    cy.get(ELEMENT_SELECTOR.TURN_RESULT).should('have.text', '');
    cy.get(ELEMENT_SELECTOR.WINNERS_RESULT).should('have.text', '');
  });
});

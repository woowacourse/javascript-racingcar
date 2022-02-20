import { ELEMENT_SELECTOR } from '../../src/js/constants/constant.js';

describe('구현 결과가 요구사항과 일치해야 한다.', () => {
  const baseUrl = 'index.html';

  const negativeCarNamesInputTest = carNames => {
    // when
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.carNamesNegativeInputEvent(carNames).then(() => {
      expect(alertStub).to.be.called;
    });
  };

  const negativeTryCountInputTest = tryCount => {
    // when
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.tryCountNegativeInputEvent(tryCount).then(() => {
      expect(alertStub).to.be.called;
    });
  };

  const positiveGameOver = () => {
    const carNames = 'a,b';
    const tryCount = 1;
    const milliseconds = 3000;
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    cy.get(ELEMENT_SELECTOR.CAR_NAMES_INPUT).type(carNames);
    cy.get(ELEMENT_SELECTOR.CAR_NAMES_BUTTON).click();
    cy.get(ELEMENT_SELECTOR.TRY_COUNT_INPUT).type(tryCount);
    cy.get(ELEMENT_SELECTOR.TRY_COUNT_BUTTON).click();
    cy.wait(milliseconds).then(() => {
      expect(alertStub).to.be.called;
    });
  };

  before(() => {
    cy.visit(baseUrl);
    cy.clock();
  });

  afterEach(() => {
    cy.get(ELEMENT_SELECTOR.CAR_NAMES_INPUT).clear();
    cy.get(ELEMENT_SELECTOR.TRY_COUNT_INPUT).clear();
  });

  it('자동차의 이름이 5자 초과일 때 확인버튼을 누를 시, alert 띄우기', () => {
    const carNames = 'abcdef,ab';
    negativeCarNamesInputTest(carNames);
  });

  it('자동차 이름에 중복이 존재할 때 확인버튼을 누를 시, alert 띄우기', () => {
    const carNames = 'ab,ab';
    negativeCarNamesInputTest(carNames);
  });

  it('자동차가 1대 이하일 때 확인버튼을 누를 시, alert 띄우기', () => {
    const carNames = 'a';
    negativeCarNamesInputTest(carNames);
  });

  it('`,`뒤에 자동차 이름이 입력되지 않았을 때 확인버튼을 누를 시, alert 띄우기', () => {
    const carNames = 'abcf,';
    negativeCarNamesInputTest(carNames);
  });

  it('시도 횟수 입력된 숫자가 1이상의 수가 아닐 시, alert 띄우기', () => {
    const tryCount = -1;
    negativeTryCountInputTest(tryCount);
  });

  it('게임이 끝난 후 2초 후에 축하의 alert메시지가 표출된다.', () => {
    positiveGameOver();
  });

  it('다시 게임을 시작하면 이전 결과를 지워준다.', () => {
    positiveGameOver();
    cy.get(ELEMENT_SELECTOR.RESET_BTN).click();
    cy.get(ELEMENT_SELECTOR.TURN_RESULT).should('have.text', '');
    cy.get(ELEMENT_SELECTOR.WINNERS_RESULT).should('have.text', '');
  });
});

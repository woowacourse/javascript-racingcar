import { ERROR_MESSAGE, SELECTOR } from '../../js/utils/constants.js';

describe('자동차의 전진이 정상적으로 작동하는지 검증합니다.', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
    cy.get(SELECTOR.CAR_NAMES_INPUT).type('east,west');
    cy.get(SELECTOR.CAR_NAMES_BUTTON).click();
  });

  it('사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.', () => {
    cy.get(SELECTOR.CAR_RACING_COUNT_INPUT).type(1);
    cy.get(SELECTOR.CAR_RACING_COUNT_BUTTON).click();
    cy.contains('다시 시작하기').should('be.visible');
  });

  it('자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.', () => {
    cy.get(SELECTOR.CAR_RACING_COUNT_INPUT).type(5);
    cy.get(SELECTOR.CAR_RACING_COUNT_BUTTON).click();
    cy.get(SELECTOR.CAR_NAMES).should('have.text', 'eastwest');
  });

  it('주어진 횟수 동안 n 대의 자동차는 전진 또는 멈출 수 있다.', () => {
    cy.clock();
    cy.get(SELECTOR.CAR_RACING_COUNT_INPUT).type(5);
    cy.get(SELECTOR.CAR_RACING_COUNT_BUTTON).click();
    cy.wait(5000).then(() => {
      cy.get(SELECTOR.CAR_PROGRESS).contains('⬇️️');
    });
  });
});

describe('최종 우승자를 검증합니다.', () => {
  beforeEach(() => {
    cy.clock();
    cy.visit('http://localhost:5500/');

    cy.get(SELECTOR.CAR_NAMES_INPUT).type('east,west,south,north');
    cy.get(SELECTOR.CAR_NAMES_BUTTON).click();
    cy.get(SELECTOR.CAR_RACING_COUNT_INPUT).type(1);
  });

  it('자동차 경주 게임을 정상적으로 완료하고 2초 뒤에 축하 메시지를 확인할 수 있다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get(SELECTOR.CAR_RACING_COUNT_BUTTON).click();
    cy.wait(3000).then(() => {
      expect(alertStub).to.be.called;
    });
  });

  it('최종 우승자를 출력할 수 있다.', () => {
    cy.get(SELECTOR.CAR_RACING_COUNT_BUTTON).click();

    cy.tick(3000).then(() => {
      cy.get(SELECTOR.CAR_RACING_WINNER).contains('최종 우승자');
    });
  });
});

describe('사용자의 입력을 검증합니다.', () => {
  let alertStub;
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
    alertStub = cy.stub();
    cy.on(SELECTOR.WINDOW_ALERT, alertStub);
  });

  it('자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.', () => {
    cy.get(SELECTOR.CAR_NAMES_INPUT).type('easteee,west');
    cy.get(SELECTOR.CAR_NAMES_BUTTON).click();
    cy.get(SELECTOR.CAR_NAMES_BUTTON)
      .click()
      .then(() => {
        expect(alertStub).to.be.calledWith(ERROR_MESSAGE.INVALID_CAR_NAME);
      });
  });

  it('자동차 이름이 빈칸이면 alert을 띄운다.', () => {
    cy.get(SELECTOR.CAR_NAMES_INPUT).type(',b,c');
    cy.get(SELECTOR.CAR_NAMES_BUTTON)
      .click()
      .then(() => {
        expect(alertStub).to.be.calledWith(ERROR_MESSAGE.INVALID_CAR_NAME);
      });
  });

  it('시도할 횟수가 소수이면 alert을 띄운다.', () => {
    cy.get(SELECTOR.CAR_NAMES_INPUT).type('a,b,c');
    cy.get(SELECTOR.CAR_NAMES_BUTTON).click();
    cy.get(SELECTOR.CAR_RACING_COUNT_INPUT).type(3.2);
    cy.get(SELECTOR.CAR_RACING_COUNT_BUTTON)
      .click()
      .then(() => {
        expect(alertStub).to.be.calledWith(ERROR_MESSAGE.INVALID_RACING_COUNT);
      });
  });

  it('시도할 횟수가 음수이면 alert을 띄운다.', () => {
    cy.get(SELECTOR.CAR_NAMES_INPUT).type('a,b,c');
    cy.get(SELECTOR.CAR_NAMES_BUTTON).click();
    cy.get(SELECTOR.CAR_RACING_COUNT_INPUT).type(-1);
    cy.get(SELECTOR.CAR_RACING_COUNT_BUTTON)
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it('시도할 횟수가 문자열이면 alert을 띄운다.', () => {
    cy.get(SELECTOR.CAR_NAMES_INPUT).type('a,b,c');
    cy.get(SELECTOR.CAR_NAMES_BUTTON).click();
    cy.get(SELECTOR.CAR_RACING_COUNT_INPUT).type('a');
    cy.get(SELECTOR.CAR_RACING_COUNT_BUTTON)
      .click()
      .then(() => {
        expect(alertStub).to.be.calledWith(ERROR_MESSAGE.INVALID_RACING_COUNT);
      });
  });
});

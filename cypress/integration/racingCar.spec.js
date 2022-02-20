import { ERROR_MESSAGE, SELECTOR } from '../../src/common/constants.js';

describe('잘못된 자동차 이름이 제출되면 에러 메세지를 확인하고 자동차 이름을 다시 입력할 수 있어야 한다.', () => {
  const message = ERROR_MESSAGE.CAR_NAMES;

  before(() => {
    cy.visit('index.html');
  });

  it('공백으로만 이루어진 자동차 이름이 제출되면 에러 메세지를 확인할 수 있어야 한다.', () => {
    const alertStub = cy.stub();
    const carNames = ' ';

    cy.on('window:alert', alertStub);

    cy.submitForm(SELECTOR.CAR_NAMES_INPUT, carNames).then(() => {
      expect(alertStub).to.be.calledWith(message);
    });
  });

  it('공백으로만 이루어진 자동차 이름이 제출되면 자동차 이름을 다시 입력할 수 있어야 한다.', () => {
    cy.initInput(SELECTOR.CAR_NAMES_INPUT);
  });

  it('5자를 초과하는 자동차 이름이 제출되면 에러 메세지를 확인할 수 있어야 한다.', () => {
    const alertStub = cy.stub();
    const carNames = 'ab, cde, fghijk';

    cy.on('window:alert', alertStub);

    cy.submitForm(SELECTOR.CAR_NAMES_INPUT, carNames).then(() => {
      expect(alertStub).to.be.calledWith(message);
    });
  });

  it('5자를 초과하는 자동차 이름이 제출되면 자동차 이름을 다시 입력할 수 있어야 한다.', () => {
    cy.initInput(SELECTOR.CAR_NAMES_INPUT);
  });

  it('하나의 자동차 이름이 제출되면 에러 메세지를 확인할 수 있어야 한다.', () => {
    const alertStub = cy.stub();
    const carNames = 'king';

    cy.on('window:alert', alertStub);

    cy.submitForm(SELECTOR.CAR_NAMES_INPUT, carNames).then(() => {
      expect(alertStub).to.be.calledWith(message);
    });
  });

  it('하나의 자동차 자동차 이름이 제출되면 자동차 이름을 다시 입력할 수 있어야 한다.', () => {
    cy.initInput(SELECTOR.CAR_NAMES_INPUT);
  });

  it('중복된 자동차 이름이 제출되면 에러 메세지를 확인할 수 있어야 한다.', () => {
    const alertStub = cy.stub();
    const carNames = 'king, tiger, tiger';

    cy.on('window:alert', alertStub);

    cy.submitForm(SELECTOR.CAR_NAMES_INPUT, carNames).then(() => {
      expect(alertStub).to.be.calledWith(message);
    });
  });

  it('중복된 자동차 이름이 제출되면 자동차 이름을 다시 입력할 수 있어야 한다.', () => {
    cy.initInput(SELECTOR.CAR_NAMES_INPUT);
  });
});

describe('잘못된 시도 횟수가 제출되면 에러 메세지를 확인하고 시도 횟수를 다시 입력할 수 있어야 한다.', () => {
  const message = ERROR_MESSAGE.RACING_COUNT;
  it('1 미만의 시도 횟수가 제출되면 에러 메세지를 확인할 수 있어야 한다.', () => {
    const alertStub = cy.stub();
    const racingCount = 0;

    cy.on('window:alert', alertStub);

    cy.submitForm(SELECTOR.RACING_COUNT_INPUT, racingCount).then(() => {
      expect(alertStub).to.be.calledWith(message);
    });
  });

  it('1 미만의 시도 횟수가 제출되면 시도 횟수를 다시 입력할 수 있어야 한다.', () => {
    cy.initInput(SELECTOR.RACING_COUNT_INPUT);
  });
});

describe('자동차 경주 게임을 진행할 수 있어야 한다.', () => {
  beforeEach(() => {
    cy.clock();
    cy.visit('index.html');
  });

  afterEach(() => {
    cy.clock().then((clock) => {
      clock.restore();
    });
  });

  it('올바른 자동차 이름이 제출되면 자동차 이름을 확인할 수 있어야 한다.', () => {
    const carNames = 'king, white, tiger';

    cy.submitForm(SELECTOR.CAR_NAMES_INPUT, carNames);

    cy.get('#white').should('be.visible');
    cy.get('#king').should('be.visible');
    cy.get('#tiger').should('be.visible');
  });

  it('올바른 자동차 이름이 제출되면 시도 횟수를 입력할 수 있어야 한다.', () => {
    const carNames = 'king, white, tiger';

    cy.submitForm(SELECTOR.CAR_NAMES_INPUT, carNames);

    cy.get(SELECTOR.RACING_COUNT_FORM).should('be.visible');
  });

  it('게임이 끝나면 최종 우승자를 확인할 수 있어야 한다.', () => {
    cy.race(0).then(() => {
      cy.get('#winners').should('be.visible');
    });
  });

  it('게임이 끝나면 게임을 다시 시작할 수 있어야 한다.', () => {
    cy.race(0).then(() => {
      cy.get(SELECTOR.RESTART).should('be.visible');
    });
  });

  it('게임이 끝나고 2초 후에 최종 우승자 축하 메세지를 확인할 수 있어야 한다.', () => {
    const alertStub = cy.stub();
    const delayAfterEnd = 2000;

    cy.on('window:alert', alertStub);

    cy.race(delayAfterEnd).then(() => {
      expect(alertStub).to.be.called;
    });
  });

  it('게임을 다시 시작하면 자동차 이름 입력만 할 수 있어야 한다.', () => {
    cy.race(0).then(() => {
      cy.get(SELECTOR.RESTART).click();
    });

    cy.get(SELECTOR.CAR_NAMES_FORM).should('be.visible');

    cy.get('#king').should('not.exist');
    cy.get('#white').should('not.exist');
    cy.get('#tiger').should('not.exist');

    cy.get(SELECTOR.RACING_COUNT_FORM).should('not.exist');

    cy.get('#winners').should('not.exist');
    cy.get(SELECTOR.RESTART).should('not.exist');
  });
});

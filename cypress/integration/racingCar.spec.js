import { ERROR_MESSAGE, SELECTOR } from '../../src/common/constants.js';

describe('구현 결과가 요구사항과 일치해야 한다.', () => {
  const baseUrl = '../index.html';

  beforeEach(() => {
    cy.clock();
    cy.visit(baseUrl);
  });

  afterEach(() => {
    cy.clock().then((clock) => {
      clock.restore();
    });
  });

  it('잘못된 자동차 이름이 제출되면 에러 메세지를 확인할 수 있어야 한다.', () => {
    const alertStub = cy.stub();
    const carNames = 'ab,cde,fghijk';

    cy.on('window:alert', alertStub);

    cy.get(SELECTOR.CAR_NAMES_INPUT).type(carNames);

    cy.get(SELECTOR.CAR_NAMES_SUBMIT)
      .click()
      .then(() => {
        expect(alertStub).to.be.calledWith(ERROR_MESSAGE.CAR_NAMES);
      });
  });

  it('잘못된 자동차 이름이 제출되면 자동차 이름을 다시 입력할 수 있어야 한다.', () => {
    const carNames = 'ab,cde,fghijk';

    cy.get(SELECTOR.CAR_NAMES_INPUT).type(carNames);
    cy.get(SELECTOR.CAR_NAMES_SUBMIT).click();

    cy.get(SELECTOR.CAR_NAMES_INPUT).should('have.value', '');
    cy.get(SELECTOR.CAR_NAMES_INPUT).should('have.focus');
  });

  it('올바른 자동차 이름이 제출되면 자동차 이름을 확인할 수 있어야 한다.', () => {
    const carNames = 'king, white, tiger';

    cy.get(SELECTOR.CAR_NAMES_INPUT).type(carNames);
    cy.get(SELECTOR.CAR_NAMES_SUBMIT).click();

    cy.get('#white').should('be.visible');
    cy.get('#king').should('be.visible');
    cy.get('#tiger').should('be.visible');
  });

  it('올바른 자동차 이름이 제출되면 시도 횟수를 입력할 수 있어야 한다.', () => {
    const carNames = 'king, white, tiger';

    cy.get(SELECTOR.CAR_NAMES_INPUT).type(carNames);
    cy.get(SELECTOR.CAR_NAMES_SUBMIT).click();

    cy.get(SELECTOR.RACING_COUNT_INPUT).should('be.visible');
    cy.get(SELECTOR.RACING_COUNT_SUBMIT).should('be.visible');
  });

  it('잘못된 시도 횟수가 제출되면 에러 메세지를 확인할 수 있어야 한다.', () => {
    const alertStub = cy.stub();
    const racingCountInput = 'e';

    cy.on('window:alert', alertStub);

    // when
    cy.get(SELECTOR.CAR_NAMES_INPUT).type('king, white, tiger');
    cy.get(SELECTOR.CAR_NAMES_SUBMIT).click();

    cy.get(SELECTOR.RACING_COUNT_INPUT).type(racingCountInput);
    cy.get(SELECTOR.RACING_COUNT_SUBMIT)
      .click()
      .then(() => {
        // then
        expect(alertStub).to.be.calledWith(ERROR_MESSAGE.RACING_COUNT);
      });
  });

  it('잘못된 시도 횟수가 제출되면 시도 횟수를 다시 입력할 수 있어야 한다.', () => {
    const racingCountInput = 'e';

    // when
    cy.get(SELECTOR.CAR_NAMES_INPUT).type('king, white, tiger');
    cy.get(SELECTOR.CAR_NAMES_SUBMIT).click();

    cy.get(SELECTOR.RACING_COUNT_INPUT).type(racingCountInput);
    cy.get(SELECTOR.RACING_COUNT_SUBMIT).click();

    // then
    cy.get(SELECTOR.RACING_COUNT_INPUT).should('have.value', '');
    cy.get(SELECTOR.RACING_COUNT_INPUT).should('have.focus');
  });

  it('게임이 끝나면 최종 우승자를 확인할 수 있어야 한다.', () => {
    const racingCount = 5;
    const delayPerRace = 1000;
    const totalDelay = delayPerRace * racingCount;

    // when
    cy.get(SELECTOR.CAR_NAMES_INPUT).type('king, white, tiger');
    cy.get(SELECTOR.CAR_NAMES_SUBMIT).click();

    cy.get(SELECTOR.RACING_COUNT_INPUT).type(racingCount);
    cy.get(SELECTOR.RACING_COUNT_SUBMIT).click();

    cy.tick(totalDelay).then(() => {
      // then
      cy.get('#winners').should('be.visible');
    });
  });

  it('게임이 끝나면 게임을 다시 시작할 수 있어야 한다.', () => {
    const racingCount = 5;
    const delayPerRace = 1000;
    const totalDelay = delayPerRace * racingCount;

    // when
    cy.get(SELECTOR.CAR_NAMES_INPUT).type('king, white, tiger');
    cy.get(SELECTOR.CAR_NAMES_SUBMIT).click();

    cy.get(SELECTOR.RACING_COUNT_INPUT).type(racingCount);
    cy.get(SELECTOR.RACING_COUNT_SUBMIT).click();

    cy.tick(totalDelay).then(() => {
      // then
      cy.get(SELECTOR.RESTART).should('be.visible');
    });
  });

  it('게임을 다시 시작하면 자동차 이름 입력만 할 수 있어야 한다.', () => {
    const racingCount = 5;
    const delayPerRace = 1000;
    const delayAfterEnd = 2000;
    const totalDelay = delayPerRace * racingCount + delayAfterEnd;

    // when
    cy.get(SELECTOR.CAR_NAMES_INPUT).type('king, white, tiger');
    cy.get(SELECTOR.CAR_NAMES_SUBMIT).click();

    cy.get(SELECTOR.RACING_COUNT_INPUT).type(racingCount);
    cy.get(SELECTOR.RACING_COUNT_SUBMIT).click();

    cy.tick(totalDelay).then(() => {
      cy.get(SELECTOR.RESTART).click();
    });

    // then
    cy.get(SELECTOR.CAR_NAMES_INPUT).should('be.visible');
    cy.get(SELECTOR.CAR_NAMES_SUBMIT).should('be.visible');

    cy.get('#king').should('not.exist');
    cy.get('#white').should('not.exist');
    cy.get('#tiger').should('not.exist');

    cy.get(SELECTOR.RACING_COUNT_INPUT).should('not.exist');
    cy.get(SELECTOR.RACING_COUNT_SUBMIT).should('not.exist');

    cy.get('#winners').should('not.exist');
    cy.get(SELECTOR.RESTART).should('not.exist');
  });
});

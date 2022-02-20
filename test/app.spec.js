import MESSAGE from '../src/js/constants/message.js';
import NUMBER from '../src/js/constants/number.js';
import SELECTOR from '../src/js/constants/selector.js';

function carNameFormAbledCheck() {
  cy.get(SELECTOR.CAR_NAME_INPUT)
    .invoke('attr', 'disabled')
    .should('eq', undefined);
  cy.get(SELECTOR.CAR_NAME_BUTTON)
    .invoke('attr', 'disabled')
    .should('eq', undefined);
}

function carNameFormDisabledCheck() {
  cy.get(SELECTOR.CAR_NAME_INPUT)
    .invoke('attr', 'disabled')
    .should('eq', 'disabled');
  cy.get(SELECTOR.CAR_NAME_BUTTON)
    .invoke('attr', 'disabled')
    .should('eq', 'disabled');
}

function raceTimeFormDisabledCheck() {
  cy.get(SELECTOR.RACE_TIME_INPUT)
    .invoke('attr', 'disabled')
    .should('eq', 'disabled');
  cy.get(SELECTOR.RACE_TIME_BUTTON)
    .invoke('attr', 'disabled')
    .should('eq', 'disabled');
}

describe('기본 사용 순서 체크', () => {
  before(() => {
    cy.visit('./');
  });

  it('자동차의 이름을 입력 후 입력란과 버튼이 비활성화 되어야한다.', () => {
    // when
    cy.get(SELECTOR.CAR_NAME_INPUT).type('compy, usage');
    cy.get(SELECTOR.CAR_NAME_BUTTON).click();

    // then
    carNameFormDisabledCheck();
  });

  it('이동 횟수 입력 후 입력란과 버튼이 비활성화 되어야한다.', () => {
    // when
    cy.get(SELECTOR.RACE_TIME_INPUT).type(NUMBER.VALID_RACE_TIME);
    cy.get(SELECTOR.RACE_TIME_BUTTON).click();

    // then
    raceTimeFormDisabledCheck();
  });

  it('경주가 종료되면 우승자를 확인할 수 있어야한다.', () => {
    // when
    cy.wait(NUMBER.VALID_RACE_PROGRESS_TIME).then(() => {
      cy.get(SELECTOR.RACE_WINNER_DISPLAY).should(($element) => {
        const text = $element.text();

        // then
        expect(text).to.include('🏆 최종 우승자: ');
        expect(text).not.to.eq('🏆 최종 우승자: 🏆');
      });
    });
  });

  it('경주가 종료되고 2초 후 축하 메시지가 표시되어야 한다.', () => {
    // given
    const alertStub = cy.stub();

    cy.on('window:alert', alertStub);

    // when
    cy.wait(NUMBER.ALERT_DISPLAY_TIME).then(() => {
      // then
      expect(alertStub).to.be.called;
    });
  });

  it('다시하기 버튼을 누르면 초기 상태로 돌아가야 한다.', () => {
    // when
    cy.get(SELECTOR.RACE_REPLAY_BUTTON).click();

    // then
    carNameFormAbledCheck();
    raceTimeFormDisabledCheck();
  });
});

describe('예외 처리 체크', () => {
  before(() => {
    cy.visit('./');
    cy.reload();
  });

  it('자동차의 이름은 빈칸일 수 없다.', () => {
    // given
    const alertStub = cy.stub();

    cy.on('window:alert', alertStub);

    // when
    cy.get(SELECTOR.CAR_NAME_BUTTON)
      .click()
      .then(() => {
        // then
        expect(alertStub).to.be.calledWith(MESSAGE.NOT_ENOUGH_INPUT_NAME);
      });
  });

  it('자동차의 이름은 유일해야 한다.', () => {
    // given
    const alertStub = cy.stub();

    cy.on('window:alert', alertStub);

    // then
    cy.get(SELECTOR.CAR_NAME_INPUT).type('usage, usage, compy');
    cy.get(SELECTOR.CAR_NAME_BUTTON)
      .click()
      .then(() => {
        // then
        expect(alertStub).to.be.calledWith(MESSAGE.DUPLICATED_NAME_EXIST);
      });
  });

  it('자동차의 이름은 5자를 초과할 수 없다.', () => {
    // given
    const alertStub = cy.stub();

    cy.on('window:alert', alertStub);

    // when
    cy.get(SELECTOR.CAR_NAME_INPUT).type('usageness, usage, compy');
    cy.get(SELECTOR.CAR_NAME_BUTTON)
      .click()
      .then(() => {
        // then
        expect(alertStub).to.be.calledWith(MESSAGE.INVALID_NAME_LENGTH);
      });
  });

  it('시도 횟수는 빈칸일 수 없다.', () => {
    // given
    const alertStub = cy.stub();

    cy.on('window:alert', alertStub);
    cy.reload();

    // when
    cy.get(SELECTOR.CAR_NAME_INPUT).type('compy, usage');
    cy.get(SELECTOR.CAR_NAME_BUTTON).click();

    cy.get(SELECTOR.RACE_TIME_BUTTON)
      .click()
      .then(() => {
        // then
        expect(alertStub).to.be.calledWith(MESSAGE.INVALID_RACE_TIME);
      });
  });

  it('시도 횟수는 1보다 작을 수 없다.', () => {
    // given
    const alertStub = cy.stub();

    cy.on('window:alert', alertStub);

    // when
    cy.get(SELECTOR.RACE_TIME_INPUT).type(NUMBER.LESS_THEN_MIN_ROUND);
    cy.get(SELECTOR.RACE_TIME_BUTTON)
      .click()
      .then(() => {
        // then
        expect(alertStub).to.be.calledWith(MESSAGE.INVALID_RACE_TIME);
      });
  });

  it('시도 횟수는 100보다 클 수 없다.', () => {
    // given
    const alertStub = cy.stub();

    cy.on('window:alert', alertStub);

    // when
    cy.get(SELECTOR.RACE_TIME_INPUT).type(NUMBER.MORE_THEN_MAX_ROUND);
    cy.get(SELECTOR.RACE_TIME_BUTTON)
      .click()
      .then(() => {
        // then
        expect(alertStub).to.be.calledWith(MESSAGE.INVALID_RACE_TIME);
      });
  });
});

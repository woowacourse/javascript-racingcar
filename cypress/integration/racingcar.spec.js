import {
  SELECTOR,
  ERROR_MESSAGE,
  DELAY_TIME,
  WINNER_MESSAGE,
} from '../../src/js/constants.js';

function createAlertStub() {
  const alertStub = cy.stub();
  cy.on('window:alert', alertStub);

  return alertStub;
}

describe('기능 요구사항', () => {
  const testCarNames = ['우디', '꼬재'];
  const racingCount = '3';

  beforeEach(() => {
    cy.visit('index.html');
  });

  it('자동차 이름을 입력하고 확인 버튼을 누르면 레이스를 출력할 때 쉼표로 구분된 자동차 이름들을 같이 출력한다.', () => {
    cy.get(SELECTOR.$CAR_NAME_INPUT).type(testCarNames.join(','));
    cy.get(SELECTOR.$CAR_NAME_BUTTON).click();

    cy.get(SELECTOR.$CAR_NAME).should('have.length', testCarNames.length);
    cy.get(SELECTOR.$CAR_NAME).each((name, index) => {
      cy.wrap(name).should('have.text', testCarNames[index]);
    });
  });

  it('자동차 이름을 입력하고 확인 버튼을 누르면 버튼이 비활성화 되고, 레이싱 횟수를 입력할 수 있는 폼이 보여지는지 확인한다.', () => {
    cy.get(SELECTOR.$CAR_NAME_INPUT).type(testCarNames.join(','));
    cy.get(SELECTOR.$CAR_NAME_BUTTON)
      .click()
      .then(() => {
        cy.get(SELECTOR.$CAR_NAME_BUTTON).should('be.disabled');
        cy.get(SELECTOR.$RACING_COUNT_INPUT_SECTION).should('be.visible');
      });
  });

  it('레이싱 횟수를 입력하고 버튼을 누르면 버튼이 비활성화 되는지 확인한다.', () => {
    cy.get(SELECTOR.$CAR_NAME_INPUT).type(testCarNames.join(','));
    cy.get(SELECTOR.$CAR_NAME_BUTTON).click();

    cy.get(SELECTOR.$RACING_COUNT_INPUT).type(racingCount);
    cy.get(SELECTOR.$RACING_COUNT_BUTTON)
      .click()
      .then(() => {
        cy.get(SELECTOR.$RACING_COUNT_BUTTON).should('be.disabled');
      });
  });

  it('최종 우승자가 보여지는지 확인한다.', () => {
    const inputString = '꼬재';

    cy.get(SELECTOR.$CAR_NAME_INPUT).type(inputString);
    cy.get(SELECTOR.$CAR_NAME_BUTTON).click();

    cy.get(SELECTOR.$RACING_COUNT_INPUT).type(racingCount);
    cy.get(SELECTOR.$RACING_COUNT_BUTTON)
      .click()
      .then(() => {
        cy.get(SELECTOR.$WINNERS).should('have.text', '꼬재');
      });
  });

  it('다시 시작하기 버튼을 누르면 레이싱 횟수를 입력하는 폼, 레이싱 과정과 레이싱 결과 화면이 가려지는지 확인한다.', () => {
    cy.get(SELECTOR.$CAR_NAME_INPUT).type(testCarNames.join(','));
    cy.get(SELECTOR.$CAR_NAME_BUTTON).click();

    cy.get(SELECTOR.$RACING_COUNT_INPUT).type(racingCount);
    cy.get(SELECTOR.$RACING_COUNT_BUTTON).click();

    cy.get(SELECTOR.$RESTART_BUTTON)
      .click()
      .then(() => {
        cy.get(SELECTOR.$RACING_COUNT_INPUT_SECTION).should('not.be.visible');
        cy.get(SELECTOR.$RACING_PROGRESS_LIST).should('not.exist');
        cy.get(SELECTOR.$RACING_RESULT).should('not.exist');
      });
  });
});

describe('예외 상황', () => {
  beforeEach(() => {
    cy.visit('index.html');
  });

  it('자동차 이름을 입력하고 확인 버튼을 누르면 입력받은 자동차 이름 중에 이름의 길이가 5자보다 길면 사용자에게 에러 메세지를 보여준다.', () => {
    const inputString = '여섯글자이름';
    const alertStub = createAlertStub();

    cy.get(SELECTOR.$CAR_NAME_INPUT).type(inputString);
    cy.get(SELECTOR.$CAR_NAME_BUTTON)
      .click()
      .then(() => {
        expect(alertStub).to.be.calledWith(
          ERROR_MESSAGE.OUT_OF_CAR_NAME_LENGTH_RANGE
        );
        cy.get(SELECTOR.$CAR_NAME_INPUT).should('have.value', '');
        cy.get(SELECTOR.$CAR_NAME_INPUT).should('have.focus');
      });
  });

  it('자동차 이름을 입력하고 확인 버튼을 누르면 입력받은 자동차 이름 중에 공백인 자동차 이름이 있을 경우 사용자에게 에러 메세지를 보여준다.', () => {
    const inputString = ' ';
    const alertStub = createAlertStub();

    cy.get(SELECTOR.$CAR_NAME_INPUT).type(inputString);
    cy.get(SELECTOR.$CAR_NAME_BUTTON)
      .click()
      .then(() => {
        expect(alertStub).to.be.calledWith(
          ERROR_MESSAGE.OUT_OF_CAR_NAME_LENGTH_RANGE
        );
        cy.get(SELECTOR.$CAR_NAME_INPUT).should('have.value', '');
        cy.get(SELECTOR.$CAR_NAME_INPUT).should('have.focus');
      });
  });

  it('양의 정수가 아닌 레이싱 횟수를 입력하고 확인 버튼을 누르면 사용자에게 에러 메세지를 보여준다.', () => {
    const racingCount = '-1';
    const inputString = '우디,꼬재';
    const alertStub = createAlertStub();

    cy.get(SELECTOR.$CAR_NAME_INPUT).type(inputString);
    cy.get(SELECTOR.$CAR_NAME_BUTTON).click();

    cy.get(SELECTOR.$RACING_COUNT_INPUT).type(racingCount);
    cy.get(SELECTOR.$RACING_COUNT_BUTTON)
      .click()
      .then(() => {
        expect(alertStub).to.be.calledWith(
          ERROR_MESSAGE.OUT_OF_RACING_COUNT_RANGE
        );
        cy.get(SELECTOR.$RACING_COUNT_INPUT).should('have.value', '');
        cy.get(SELECTOR.$RACING_COUNT_INPUT).should('have.focus');
      });
  });

  it('10보다 큰 레이싱 횟수를 입력하고 확인 버튼을 누르면 에러 메세지를 사용자에게 보여준다.', () => {
    const racingCount = '11';
    const inputString = '우디,꼬재';
    const alertStub = createAlertStub();

    cy.get(SELECTOR.$CAR_NAME_INPUT).type(inputString);
    cy.get(SELECTOR.$CAR_NAME_BUTTON).click();

    cy.get(SELECTOR.$RACING_COUNT_INPUT).type(racingCount);
    cy.get(SELECTOR.$RACING_COUNT_BUTTON)
      .click()
      .then(() => {
        expect(alertStub).to.be.calledWith(
          ERROR_MESSAGE.OUT_OF_RACING_COUNT_RANGE
        );
        cy.get(SELECTOR.$RACING_COUNT_INPUT).should('have.value', '');
        cy.get(SELECTOR.$RACING_COUNT_INPUT).should('have.focus');
      });
  });

  it('자동차 이름을 입력하고 확인 버튼을 누르면 입력받은 자동차 이름에 중복이 있을 경우 에러 메세지를 사용자에게 보여준다.', () => {
    const inputString = '우디,우디,꼬재';
    const alertStub = createAlertStub();

    cy.get(SELECTOR.$CAR_NAME_INPUT).type(inputString);
    cy.get(SELECTOR.$CAR_NAME_BUTTON)
      .click()
      .then(() => {
        expect(alertStub).to.be.calledWith(ERROR_MESSAGE.DUPLICATED_CAR_NAME);
        cy.get(SELECTOR.$CAR_NAME_INPUT).should('have.value', '');
        cy.get(SELECTOR.$CAR_NAME_INPUT).should('have.focus');
      });
  });
});

describe('경기 진행 과정과 경기 결과', () => {
  beforeEach(() => {
    cy.visit('index.html');
  });

  it('자동차 경주 게임의 턴이 진행 될 때마다 1초의 텀을 두고 진행한다.', () => {
    const inputString = '우디,꼬재';
    const racingCount = '3';

    cy.get(SELECTOR.$CAR_NAME_INPUT).type(inputString);
    cy.get(SELECTOR.$CAR_NAME_BUTTON).click();

    cy.get(SELECTOR.$RACING_COUNT_INPUT).type(racingCount);
    cy.get(SELECTOR.$RACING_COUNT_BUTTON).click();

    cy.waitRepeatedly({
      selector: SELECTOR.$SPINNER,
      type: 'be.visible',
      delay: DELAY_TIME.RACING_PROGRESS,
      repeatCount: racingCount,
    });
    cy.get(SELECTOR.$SPINNER).should('not.exist');
  });

  it('자동차 경주 게임이 종료되고, 경주의 우승자가 결정되면 2초 후에 축하의 메시지를 보여준다.', () => {
    const inputString = '꼬재';
    const racingCount = '3';
    const alertStub = createAlertStub();
    const totalDelayTime =
      racingCount * DELAY_TIME.RACING_PROGRESS + DELAY_TIME.WINNER_ALERT;

    cy.get(SELECTOR.$CAR_NAME_INPUT).type(inputString);
    cy.get(SELECTOR.$CAR_NAME_BUTTON).click();

    cy.get(SELECTOR.$RACING_COUNT_INPUT).type(racingCount);
    cy.get(SELECTOR.$RACING_COUNT_BUTTON).click();

    cy.wait(totalDelayTime).then(() => {
      expect(alertStub).to.be.calledWith('꼬재' + WINNER_MESSAGE);
    });
  });
});

import { SELECTOR } from '../../src/js/configs/dom.js';
import {
  ERROR_MESSAGE,
  COMMON_MESSAGE,
} from '../../src/js/configs/constants.js';

function createAlertStub() {
  const alertStub = cy.stub();
  cy.on('window:alert', alertStub);

  return alertStub;
}

describe('1단계 기능 요구사항', () => {
  const testCarNames = ['우디', '꼬재'];
  const inputString = '우디, 꼬재';

  beforeEach(() => {
    cy.visit('index.html');
  });

  it('자동차 이름을 입력하고 확인 버튼을 누르면 레이스를 출력할 때 쉼표로 구분된 자동차 이름들을 볼 수 있어야한다.', () => {
    cy.get(SELECTOR.$CAR_NAME_INPUT).type(inputString);
    cy.get(SELECTOR.$CAR_NAME_BUTTON).click();
    cy.get(SELECTOR.$CAR_NAME).should('have.length', 2);
    cy.get(SELECTOR.$CAR_NAME).each((name, index) => {
      cy.wrap(name).should('have.text', testCarNames[index]);
    });
  });
});

describe('2단계 기능 요구사항', () => {
  const inputString = '우디, 꼬재';
  const racingCount = 2;

  beforeEach(() => {
    cy.clock();
    cy.visit('index.html');
    cy.tick(100);
  });

  it('사용자는 자동차 경주 게임의 턴이 진행 될 때마다 1초의 텀동안 로딩 애니메이션을 볼 수 있어야 한다.', () => {
    cy.get(SELECTOR.$CAR_NAME_INPUT).type(inputString);
    cy.get(SELECTOR.$CAR_NAME_BUTTON).click();
    cy.tick(100);
    cy.get(SELECTOR.$RACING_COUNT_INPUT).type(racingCount);
    cy.get(SELECTOR.$RACING_COUNT_BUTTON)
      .click()
      .then(() => {
        cy.tick(2000);
        cy.get(SELECTOR.$LOADING).should('exist');
        cy.tick(100);
        cy.get(SELECTOR.$LOADING).should('not.exist');
      });
  });

  it('사용자는 게임이 시작되면 다시 시작하기 버튼을 제외한 나머지 버튼을 클릭할 수 없어야 한다.', () => {
    cy.get(SELECTOR.$CAR_NAME_INPUT).type(inputString);
    cy.get(SELECTOR.$CAR_NAME_BUTTON).click();
    cy.tick(100);
    cy.get(SELECTOR.$RACING_COUNT_INPUT).type(racingCount);
    cy.get(SELECTOR.$RACING_COUNT_BUTTON)
      .click()
      .then(() => {
        cy.tick(100);
        cy.get('button').each((button) => {
          cy.get(SELECTOR.$CAR_NAME_BUTTON).should('be.disabled');
          cy.get(SELECTOR.$RACING_COUNT_BUTTON).should('be.disabled');
        });
        cy.tick(2000);
        cy.tick(100);
        cy.get(SELECTOR.$CAR_NAME_BUTTON).should('be.disabled');
        cy.get(SELECTOR.$RACING_COUNT_BUTTON).should('be.disabled');
        cy.get(SELECTOR.$RESTART_BUTTON).should('not.be.disabled');
      });
  });

  it('사용자는 정상적으로 게임의 턴이 다 동작된 후에는 결과와, 2초 후에 축하 메세지를 볼 수 있어야 한다.', () => {
    const alertStub = createAlertStub();

    cy.get(SELECTOR.$CAR_NAME_INPUT).type(inputString);
    cy.get(SELECTOR.$CAR_NAME_BUTTON).click();
    cy.tick(100);
    cy.get(SELECTOR.$RACING_COUNT_INPUT).type(racingCount);
    cy.get(SELECTOR.$RACING_COUNT_BUTTON)
      .click()
      .then(() => {
        cy.tick(2000);
        cy.get(SELECTOR.$WINNERS).should('not.exist');
        cy.tick(100);
        cy.get(SELECTOR.$WINNERS).should('exist');
        cy.tick(2000).then(() => {
          expect(alertStub).to.be.calledWith(COMMON_MESSAGE.CONGRATURATION);
        });
      });
  });
});

describe('예외 상황', () => {
  beforeEach(() => {
    cy.visit('index.html');
  });

  it('5자보다 긴 자동차 이름이 있으면 에러메시지를 볼 수 있어야 한다.', () => {
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

  it('공백으로 이루어진 자동차 이름이 있으면 에러메시지를 볼 수 있어야 한다.', () => {
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

  it('양의 정수가 아닌 레이싱 횟수를 입력하면 에러메시지를 볼 수 있어야 한다.', () => {
    const testCarNames = '우디, 꼬재';
    const racingCount = '-1';
    const alertStub = createAlertStub();

    cy.get(SELECTOR.$CAR_NAME_INPUT).type(testCarNames);
    cy.get(SELECTOR.$CAR_NAME_BUTTON)
      .click()
      .then(() => {
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
  });

  it('10보다 큰 레이싱 횟수를 입력하면 에러메시지를 볼 수 있어야 한다.', () => {
    const testCarNames = '우디, 꼬재';
    const racingCount = '11';
    const alertStub = createAlertStub();

    cy.get(SELECTOR.$CAR_NAME_INPUT).type(testCarNames);
    cy.get(SELECTOR.$CAR_NAME_BUTTON)
      .click()
      .then(() => {
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
  });

  it('입력받은 자동차 이름에 중복이 있으면 에러메시지를 볼 수 있어야 한다.', () => {
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

  it('5개보다 많은 자동차 이름을 입력하면 에러메시지를 볼 수 있어야 한다.', () => {
    const inputString = 'A,B,C,D,E,F';
    const alertStub = createAlertStub();

    cy.get(SELECTOR.$CAR_NAME_INPUT).type(inputString);
    cy.get(SELECTOR.$CAR_NAME_BUTTON)
      .click()
      .then(() => {
        expect(alertStub).to.be.calledWith(
          ERROR_MESSAGE.OUT_OF_NUMBER_OF_CARS_RANGE
        );
        cy.get(SELECTOR.$CAR_NAME_INPUT).should('have.value', '');
        cy.get(SELECTOR.$CAR_NAME_INPUT).should('have.focus');
      });
  });

  it('자동차 이름이 등록되어 있지 않을 때 레이싱 횟수 인풋 필드와 버튼이 disabled되어 있어야 한다.', () => {
    const inputString = '5';
    const alertStub = createAlertStub();

    cy.get(SELECTOR.$RACING_COUNT_INPUT).should('be.disabled');
    cy.get(SELECTOR.$RACING_COUNT_BUTTON).should('be.disabled');
  });
});

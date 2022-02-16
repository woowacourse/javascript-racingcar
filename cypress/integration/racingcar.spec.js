import {
  MESSAGE,
  SELECTOR,
  RACING_COUNT,
  END_MESSAGE_DELAY,
} from '../../src/constants.js';

const availableCarName = '준,포코,공원,제이슨,포비';
const delayTime = 1000;
const milliseconds = 1000;

describe('자동차 이름 입력', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });
  it('자동차 이름은 쉼표(,)를 기준으로 구분한다.', () => {
    // given
    const names = '준,포코,공원';
    // when
    cy.submitCarNames(names);
    cy.submitRacingCount(RACING_COUNT.MIN);
    // then
    names.split(',').forEach(name => {
      cy.get(`[data-name=${name}]`).should('be.visible');
    });
  });
  it('입력된 이름이 1글자 미만일 경우 에러메시지를 확인 할 수 있다.', () => {
    // given
    const name = '준,,';
    // when
    cy.submitCarNames(name);
    // then
    cy.checkAlertMessage(MESSAGE.WRONG_NAME_LENGTH);
  });
  it('입력된 이름이 5글자 초과일 경우 에러메시지를 확인 할 수 있다.', () => {
    // given
    const name = '포비포코공원';
    // when
    cy.submitCarNames(name);
    // then
    cy.checkAlertMessage(MESSAGE.WRONG_NAME_LENGTH);
  });

  it('입력된 이름이 중복될 경우 에러메시지를 확인 할 수 있다.', () => {
    // given
    const name = '공원,공원';
    // when
    cy.submitCarNames(name);
    // then
    cy.checkAlertMessage(MESSAGE.DUPLICATE_NAME);
  });

  it('자동차 이름이 입력되면 자동차 입력을 할 수 없고, 입력 버튼을 누를 수 없다.', () => {
    // when
    cy.submitCarNames(availableCarName);
    // then
    cy.get(SELECTOR.CAR_NAMES_INPUT).should('be.disabled');
    cy.get(SELECTOR.CAR_NAMES_BUTTON).should('be.disabled');
  });

  it('자동차 이름이 입력되면 레이싱 횟수 입력 폼을 확인 할 수 있다.', () => {
    // when
    cy.submitCarNames(availableCarName);
    // then
    cy.get(SELECTOR.RACING_COUNT_INPUT).should('be.visible');
  });
});

describe('레이싱 횟수 입력 테스트', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });
  it('입력된 레이싱 횟수가 1미만일 경우 에러메시지를 확인 할 수 있다.', () => {
    // given
    const lessThenMinimum = RACING_COUNT.MIN - 1;
    // when
    cy.submitCarNames(availableCarName);
    cy.submitRacingCount(lessThenMinimum);
    // then
    cy.checkAlertMessage(MESSAGE.WRONG_COUNT);
  });

  it('입력된 레이싱 횟수가 5초과일 경우 에러메시지를 확인 할 수 있다.', () => {
    // given
    const greaterThanMaximum = RACING_COUNT.MAX + 1;
    // when
    cy.submitCarNames(availableCarName);
    cy.submitRacingCount(greaterThanMaximum);
    // then
    cy.checkAlertMessage(MESSAGE.WRONG_COUNT);
  });

  it('입력된 레이싱 횟수가 소수일 경우 에러메시지를 확인 할 수 있다.', () => {
    // given
    const decimalNumber = 1.5;
    // when
    cy.submitCarNames(availableCarName);
    cy.submitRacingCount(decimalNumber);
    // then
    cy.checkAlertMessage(MESSAGE.NOT_DECIMAL_COUNT);
  });

  it('레이싱 횟수가 입력되면 레이싱 횟수 입력을 할 수 없고, 입력 버튼을 누를 수 없다.', () => {
    // when
    cy.submitCarNames(availableCarName);
    cy.submitRacingCount(RACING_COUNT.MIN);
    // then
    cy.get(SELECTOR.RACING_COUNT_INPUT).should('be.disabled');
    cy.get(SELECTOR.RACING_COUNT_BUTTON).should('be.disabled');
  });
});

describe('최종 우승자 출력', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });

  it('게임을 완료하고 우승자를 확인 할 수 있다.', () => {
    // given
    cy.clock();
    const name = '공원';
    const winners = `🏆최종 우승자: ${name}🏆`;
    // when
    cy.submitCarNames(name);
    cy.submitRacingCount(RACING_COUNT.MIN);
    cy.tick(RACING_COUNT.MIN * milliseconds + delayTime);
    // then
    cy.get(SELECTOR.WINNERS).should('have.text', winners);
  });
});

describe('다시 시작하기 버튼 테스트', () => {
  before(() => {
    cy.visit('/index.html');
  });

  it('다시 시작하기 버튼을 클릭할 경우 게임이 초기화 된다.', () => {
    // given
    cy.clock();
    // when
    cy.submitCarNames(availableCarName);
    cy.submitRacingCount(RACING_COUNT.MIN);
    cy.tick(RACING_COUNT.MIN * milliseconds + delayTime);
    cy.get(SELECTOR.RESTART_BUTTON).click();
    // then
    cy.get(SELECTOR.CAR_NAMES_INPUT).should('have.value', '');
    cy.get(SELECTOR.CAR_NAMES_INPUT).should('not.be.disabled');
    cy.get(SELECTOR.CAR_NAMES_BUTTON).should('not.be.disabled');

    cy.get(SELECTOR.RACING_COUNT_INPUT).should('have.value', '');
    cy.get(SELECTOR.RACING_COUNT_INPUT).should('not.be.disabled');
    cy.get(SELECTOR.RACING_COUNT_BUTTON).should('not.be.disabled');
    cy.get(SELECTOR.RACING_COUNT_CONTAINER).should('not.be.visible');

    cy.get(SELECTOR.RACING_STATUS_CONTAINER).should('be.empty');
    cy.get(SELECTOR.RACING_STATUS_CONTAINER).should('not.be.visible');
    cy.get(SELECTOR.WINNERS_CONTAINER).should('be.empty');
    cy.get(SELECTOR.WINNERS_CONTAINER).should('not.be.visible');
  });
});

describe('예외 사항', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });

  it(' 자동차 이름과 레이싱 횟수 입력 후 Enter 키를 통해 제출 할 수 있다.', () => {
    // given
    cy.clock();
    // when
    cy.get(SELECTOR.CAR_NAMES_INPUT).type(availableCarName).type('{enter}');
    cy.get(SELECTOR.RACING_COUNT_INPUT).type(RACING_COUNT.MIN).type('{enter}');
    cy.tick(RACING_COUNT.MIN * milliseconds + delayTime);
    // then
    cy.get(SELECTOR.WINNERS).then(element => {
      expect(element.text()).to.contain('최종 우승자');
    });
  });
});

describe('자동차 경주 진행 상황  ', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });

  it('정상적으로 게임의 턴이 다 동작된 후에는 결과를 보여주고, 2초 후에 축하 메시지를 확인 할 수 있다.', () => {
    // given
    cy.clock();
    // when
    cy.submitCarNames(availableCarName);
    cy.submitRacingCount(RACING_COUNT.MAX);
    cy.tick(RACING_COUNT.MAX * milliseconds + delayTime);
    cy.tick(END_MESSAGE_DELAY);
    // then
    cy.checkAlertMessage(MESSAGE.GAME_END);
  });
});

import { SELECTOR } from '../src/js/constants/selector.js';
import { RESULT_MESSAGE } from '../src/js/constants/message.js';
import GAME_SETTING from '../src/js/constants/RacingGame/setting.js';

const INPUT_VALUE = Object.freeze({
  CAR_NAME: 'compy, usage',
  ROUND_COUNT: '3',
});

const TEST_SETTING = Object.freeze({
  WINNER_RESULT_DELAY: INPUT_VALUE.ROUND_COUNT * 1000 + GAME_SETTING.WINNER_MESSAGE_INTERVAL,
});

describe('기본 사용 순서 체크 (E2E)', () => {
  before(() => {
    cy.clock();
    cy.visit('./');
  });

  it('1. 자동차의 이름을 입력할 수 있어야한다.', () => {
    cy.formSubmit(INPUT_VALUE.CAR_NAME, SELECTOR.CAR_NAME_INPUT, SELECTOR.CAR_NAME_BUTTON);
    cy.disabledCheck(SELECTOR.CAR_NAME_INPUT, SELECTOR.CAR_NAME_BUTTON);
  });

  it('2. 이동 횟수를 입력할 수 있어야한다.', () => {
    cy.formSubmit(INPUT_VALUE.ROUND_COUNT, SELECTOR.RACE_TIME_INPUT, SELECTOR.RACE_TIME_BUTTON);
    cy.disabledCheck(SELECTOR.RACE_TIME_INPUT, SELECTOR.RACE_TIME_BUTTON);
  });

  it('3. 자동차 이름과 이동 횟수를 입력했다면 게임이 진행되어야 한다.', () => {
    cy.get(SELECTOR.RACE_CONTAINER).invoke('attr', 'data-state').should('eq', 'on');
    cy.get(SELECTOR.PROGRESS);
  });

  it('4. 모든 라운드가 진행된 후 우승자 알림창이 출력되어야 한다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    cy.wait(TEST_SETTING.WINNER_RESULT_DELAY).then(() => {
      expect(alertStub).to.be.calledWith(RESULT_MESSAGE.RACING_GAME_WINNERS);
    });
  });

  it('5. 우승자가 발표된 후 게임을 재시작할 수 있어야 한다.', () => {
    cy.get(SELECTOR.RETRY_BUTTON).click();

    cy.enabledCheck(SELECTOR.CAR_NAME_INPUT, SELECTOR.CAR_NAME_BUTTON);
    cy.enabledCheck(SELECTOR.RACE_TIME_INPUT, SELECTOR.RACE_TIME_BUTTON);

    cy.get(SELECTOR.CAR_NAME_INPUT).should('have.text', '');
    cy.get(SELECTOR.RACE_TIME_INPUT).should('have.text', '');
  });
});

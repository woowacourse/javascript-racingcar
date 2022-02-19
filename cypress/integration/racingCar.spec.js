import { SELECTOR, ERROR_MESSAGE, DELAY_TIME, CELEBRATE_MESSAGE } from '../../src/js/utils/constants.js';

describe('구현 결과가 요구사항과 일치해야 한다.', () => {
  const baseURL = 'index.html';
  const normalName = '안';
  const normalCount = 1;
  const milliseconds = 1000;

  beforeEach(() => {
    cy.visit(baseURL);
  });

  it('자동차 이름을 5자 이상 입력한 경우 해당 에러 메시지가 alert에 호출되어야 한다.', () => {
    const name = '안,우아한테크코스';
    cy.submitCarNames(name);
    cy.checkAlertMessage(ERROR_MESSAGE.NAME_TOO_LONG);
  });

  it('자동차 이름을 공백으로 입력한 경우 해당 에러 메시지가 alert에 호출되어야 한다.', () => {
    const name = ' ';
    cy.submitCarNames(name);
    cy.checkAlertMessage(ERROR_MESSAGE.NAME_CANNOT_BE_BLANK);
  });

  it('자동차 이름이 입력되면 레이싱 횟수 입력 폼을 확인 할 수 있다.', () => {
    cy.submitCarNames(normalName);
    cy.get(SELECTOR.RACING_COUNT_CONTAINER).should('be.visible');
  });

  it('입력된 횟수가 1 보다 작을 경우 해당 에러 메시지가 alert에 호출되어야 한다', () => {
    const count = 0;
    cy.submitCarNames(normalName);
    cy.submitRacingCount(count);
    cy.checkAlertMessage(ERROR_MESSAGE.COUNT_TOO_SMALL);
  });

  it('레이싱 게임을 완료하고, 최종 우승자를 보여준다.', () => {
    cy.clock();
    const winners = `🏆 최종 우승자: ${normalName} 🏆`;
    cy.submitCarNames(normalName);
    cy.submitRacingCount(normalCount);
    cy.tick(normalCount * milliseconds + DELAY_TIME.RACE);
    cy.get(SELECTOR.FINAL_WINNER).should('have.text', winners);
  });

  it('레이싱 게임이 끝나면, 2초 후에 축하 메시지를 확인 할 수 있다.', () => {
    cy.clock();
    cy.submitCarNames(normalName);
    cy.submitRacingCount(normalCount);
    cy.tick(normalCount * milliseconds + DELAY_TIME.RACE);
    cy.tick(DELAY_TIME.ALERT);
    cy.checkAlertMessage(CELEBRATE_MESSAGE);
  });

  it('다시 시도하기 버튼을 클릭하면, 게임이 초기화되어야 한다.', () => {
    cy.clock();
    cy.submitCarNames(normalName);
    cy.submitRacingCount(normalCount);
    cy.tick(normalCount * milliseconds + DELAY_TIME.RACE);
    cy.get(SELECTOR.RESTART_BUTTON).click();

    cy.get(SELECTOR.CAR_NAMES_INPUT).should('have.value', '');
    cy.get(SELECTOR.RACING_COUNT_INPUT).should('have.value', '');
    cy.get(SELECTOR.RACING_COUNT_CONTAINER).should('not.be.disabled');
    cy.get(SELECTOR.RACING_CONTAINER).should('not.be.disabled');
    cy.get(SELECTOR.RESULT_CONTAINER).should('not.be.disabled');
  });
});

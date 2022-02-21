import { ALERT_WINNER_DELAY, DEFAULT_DELAY, ERROR_MESSAGES, WINNER_ALERT_MESSAGE } from '../../src/utils/constants.js';

describe('자동차 경주 구현 기능 테스트', () => {
  beforeEach(() => {
    cy.clock();
    cy.visit('index.html');
  });

  it('레이싱 실행 이후 우승자를 출력할 수 있어야 한다.', () => {
    const carNames = 'east, west, south, north, all';
    const count = 5;

    cy.inputCarNames(carNames);
    cy.inputCount(count);
    cy.tick(count * DEFAULT_DELAY);
    cy.get('.winners-name').should('be.visible');
  });

  it('다시 시작하기 버튼 클릭시 화면이 리셋 돼야 한다.', () => {
    const carNames = 'east, west, south, north, all';
    const count = 5;

    cy.inputCarNames(carNames);
    cy.inputCount(count);
    cy.tick(count * DEFAULT_DELAY);
    cy.tick(ALERT_WINNER_DELAY);

    cy.get('.restart').click();
    cy.get('.count-form').should('not.be.visible');
    cy.get('.race-container').should('not.be.visible');
    cy.get('.restart-container').should('not.be.visible');

    cy.get('.name-input').should('be.enabled');
    cy.get('.count-input').should('be.enabled');
    cy.get('.name-button').should('be.enabled');
    cy.get('.count-button').should('be.enabled');
  });

  it('우승자가 출력되면 2초뒤에 축하 메세지를 확인할 수 있어야 한다.', () => {
    const carNames = 'east, west, south, north, all';
    const count = 5;

    cy.inputCarNames(carNames);
    cy.inputCount(count);
    cy.tick(count * DEFAULT_DELAY);
    cy.tick(ALERT_WINNER_DELAY);
    cy.on('window:alert', text => {
      expect(text).to.contain(WINNER_ALERT_MESSAGE);
    });
  });

  it('게임이 시작되면 이름과 횟수 입력창이 비활성화 된다.', () => {
    const carNames = 'east, west, south, north, all';
    const count = 5;

    cy.inputCarNames(carNames);
    cy.inputCount(count);
    cy.get('.name-input').should('be.disabled');
    cy.get('.count-input').should('be.disabled');
    cy.get('.name-button').should('be.disabled');
    cy.get('.count-button').should('be.disabled');
  });
});

describe('예외 사항 테스트', () => {
  beforeEach(() => {
    cy.visit('index.html');
  });

  it('자동차 이름이 5자 초과면 에러 메세지가 표시된다.', () => {
    const invalidInput = 'aaabbb,ff,gg,hh';

    cy.inputCarNames(invalidInput);
    cy.verifyAlertMessage(ERROR_MESSAGES.INVALID_NAME_LENGTH);
  });

  it('자동차 이름이 공백으로만 이루어지면 에러메세지가 표시된다.', () => {
    const invalidInput = '   ,ff,gg,hh';

    cy.inputCarNames(invalidInput);
    cy.verifyAlertMessage(ERROR_MESSAGES.INVALID_NAME_LENGTH);
  });

  it('중복된 자동차 이름이 있으면 에러메세지가 표시된다.', () => {
    const invalidInput = 'a,a,b,c';

    cy.inputCarNames(invalidInput);
    cy.verifyAlertMessage(ERROR_MESSAGES.DUPLICATED_NAME);
  });

  it('시도할 횟수가 1미만이면 에러메세지가 표시된다.', () => {
    const carNames = 'east, west, south, north, all';
    const invalidInput = '-3';

    cy.inputCarNames(carNames);
    cy.inputCount(invalidInput);
    cy.verifyAlertMessage(ERROR_MESSAGES.INVALID_COUNT);
  });

  it('시도할 횟수가 20자를 초과하면 에러메세지가 표시된다.', () => {
    const carNames = 'east, west, south, north, all';
    const invalidInput = '21';

    cy.inputCarNames(carNames);
    cy.inputCount(invalidInput);
    cy.verifyAlertMessage(ERROR_MESSAGES.INVALID_COUNT);
  });

  it('시도 횟수가 정수가 아닌 경우 유효 메세지가 표시된다.', () => {
    const carNames = 'east, west, south, north, all';
    const invalidInput = '1.1';

    cy.inputCarNames(carNames);
    cy.get('.count-input').type(invalidInput);
    cy.get('.count-input').then($input => {
      expect($input[0].validationMessage).to.eq(
        'Please enter a valid value. The two nearest valid values are 1 and 2.',
      );
    });
  });
});

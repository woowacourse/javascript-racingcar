import { ERROR_MESSAGES } from '../../src/utils/constants.js';

describe('자동차 경주 구현 기능 테스트', () => {
  beforeEach(() => {
    cy.visit('index.html');
  });

  it('레이싱 실행 이후 우승자를 출력할 수 있어야 한다', () => {
    const carNames = 'east, west, south, north, all';
    const count = 5;

    cy.inputCarNames(carNames);
    cy.inputCount(count);
    cy.get('.winners-name').should('be.visible');
  });

  it('다시 시작하기 버튼 클릭시 화면이 리셋 돼야 한다.', () => {
    const carNames = 'east, west, south, north, all';
    const count = 5;

    cy.inputCarNames(carNames);
    cy.inputCount(count);
    cy.get('.restart').click();
    cy.get('.count-form').should('not.be.visible');
    cy.get('.game-result-container').should('not.be.visible');
    cy.get('.restart-container').should('not.be.visible');
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

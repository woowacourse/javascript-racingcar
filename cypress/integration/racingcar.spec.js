import { ERROR_MESSAGES } from '../../src/utils/constants.js';

const inputCarNames = input => {
  cy.get('.name-input').type(input);
  cy.get('.name-button').click();
};

const inputCount = input => {
  cy.get('.count-input').type(input);
  cy.get('.count-button').click();
};

const verifyAlertMessage = message => {
  cy.on('window:alert', text => {
    expect(text).to.equal(message);
  });
};

describe('racingcar Test', () => {
  beforeEach(() => {
    cy.visit('index.html');
  });

  it('레이싱 실행 이후 우승자를 출력할 수 있어야 한다', () => {
    const carNames = 'east, west, south, north, all';
    const count = 5;

    inputCarNames(carNames);
    inputCount(count);

    cy.get('.winners-name').should('be.visible');
  });

  it('다시 시작하기 버튼 클릭시 화면이 리셋 돼야 한다.', () => {
    const carNames = 'east, west, south, north, all';
    const count = 5;

    inputCarNames(carNames);
    inputCount(count);

    cy.get('.restart').click();
    cy.get('.count-form').should('not.be.visible');
    cy.get('.game-result-container').should('not.be.visible');
    cy.get('.restart-container').should('not.be.visible');
  });

  it('자동차 이름이 5자 초과면 에러 메세지가 표시된다.', () => {
    const invalidInput = 'aaabbb,ff,gg,hh';

    inputCarNames(invalidInput);
    verifyAlertMessage(ERROR_MESSAGES.NAME_LENGTH);
  });

  it('자동차 이름이 공백으로만 이루어지면 에러메세지가 표시된다.', () => {
    const invalidInput = '   ,ff,gg,hh';

    inputCarNames(invalidInput);
    verifyAlertMessage(ERROR_MESSAGES.NAME_LENGTH);
  });

  it('중복된 자동차 이름이 있으면 에러메세지가 표시된다.', () => {
    const invalidInput = 'a,a,b,c';

    inputCarNames(invalidInput);
    verifyAlertMessage(ERROR_MESSAGES.DUPLICATED_NAME);
  });

  it('시도할 횟수가 1미만이면 에러메세지가 표시된다.', () => {
    const carNames = 'east, west, south, north, all';
    const invalidInput = '-3';

    inputCarNames(carNames);
    inputCount(invalidInput);
    verifyAlertMessage(ERROR_MESSAGES.MIN_COUNT);
  });
});

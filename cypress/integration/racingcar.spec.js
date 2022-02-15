import { MESSAGE, ID } from '../../src/constants.js';

const checkAlertMessage = message => {
  cy.on('window:alert', str => {
    expect(str).to.equal(message);
  });
};

const inputCarNames = names => {
  cy.get(`#${ID.CAR_NAMES_INPUT}`).type(names);
  cy.get(`#${ID.CAR_NAMES_SUBMIT}`).click();
};

const inputRacingCount = count => {
  cy.get(`#${ID.RACING_COUNT_INPUT}`).type(count);
  cy.get(`#${ID.RACING_COUNT_SUBMIT}`).click();
};

const names = ['june', 'poco'];

describe('자동차 경주 게임', () => {
  before(() => {
    cy.visit('/index.html');
  });
  it('자동차 이름을 입력받는다', () => {
    inputCarNames(names.join(','));
  });

  it('레이싱 횟수를 입력받는다', () => {
    inputRacingCount(2);
  });

  it('자동차 경주 결과를 출력한다', () => {
    names.every(name => {
      cy.get(`[data-name=${name}]`).should('be.visible');
    });
  });

  it('다시 시작하기 버튼을 클릭한다.', () => {
    cy.get(`#${ID.RESTART_BUTTON}`).click();
    cy.get(`#${ID.CAR_COUNTS_INPUT}`).should('have.value', '');
    cy.get(`#${ID.RACING_COUNT_INPUT}`).should('have.value', '');
    cy.get(`#${ID.RACING_STATUS}`).should('be.empty');
    cy.get(`#${ID.RACING_WINNERS}`).should('be.empty');
  });
});

describe('에러 처리를 한다', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });

  it('입력한 이름이 5글자 초과일 경우 alert가 뜬다.', () => {
    inputCarNames('jun,dddddd');
    checkAlertMessage(MESSAGE.WRONG_NAME_LENGTH);
  });

  it('입력한 이름이 중복될 경우 alert가 뜬다.', () => {
    inputCarNames('jun,jun');
    checkAlertMessage(MESSAGE.DUPLICATE_NAME);
  });

  it('입력한 이름이 1글자 미만이면 alert가 뜬다', () => {
    inputCarNames('jun,,');
    checkAlertMessage(MESSAGE.WRONG_NAME_LENGTH);
  });

  it('이름 입력 후 재입력은 불가능하다.', () => {
    inputCarNames('jun,poco');
    inputCarNames('june,poco');
    checkAlertMessage(MESSAGE.REINPUT_NAME);
  });

  it('레이싱 횟수 입력 후 재입력은 불가능하다.', () => {
    inputCarNames('jun,poco');
    inputRacingCount(1);
    inputRacingCount(1);
    checkAlertMessage(MESSAGE.REINPUT_COUNT);
  });

  it('자동차 이름이 입력되지 않았다면 레이싱 횟수를 입력할 수 없다.', () => {
    inputRacingCount(1);
    checkAlertMessage(MESSAGE.NO_CAR);
  });

  it('입력한 레이싱 횟수가 1 미만이면 alert가 뜬다', () => {
    inputCarNames('june, poco');
    inputRacingCount(0);
    checkAlertMessage(MESSAGE.WRONG_COUNT);
  });
});

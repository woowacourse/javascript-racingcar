import { MESSAGE, ID, RACING_COUNT } from '../../src/constants.js';
import {
  LEGAL_CAR_NAME,
  ILLEGAL_LENGTH_NAMES,
  DUPLICATED_NAME,
  SINGLE_NAME,
} from '../utils/index.js';

const checkAlertMessage = message => {
  cy.on('window:alert', str => {
    expect(str).to.equal(message);
  });
};

const submitCarNames = names => {
  cy.get(`#${ID.CAR_NAMES_INPUT}`).type(names);
  return cy.get(`#${ID.CAR_NAMES_BUTTON}`).click();
};
const submitRacingCount = count => {
  cy.get(`#${ID.RACING_COUNT_INPUT}`).type(count);
  return cy.get(`#${ID.RACING_COUNT_BUTTON}`).click();
};

const clearCarNames = () => cy.get(`#${ID.CAR_NAMES_INPUT}`).clear();
const clearRacingCount = () => cy.get(`#${ID.RACING_COUNT_INPUT}`).clear();

describe('자동차 이름 입력 테스트', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });
  it('입력한 이름이 1글자 미만, 5글자 초과일 경우 alert가 뜬다.', () => {
    ILLEGAL_LENGTH_NAMES.forEach(name => {
      submitCarNames(name).then(() => {
        checkAlertMessage(MESSAGE.WRONG_NAME_LENGTH);
      });
      clearCarNames();
    });
  });

  it('입력한 이름이 중복될 경우 alert가 뜬다.', () => {
    submitCarNames(DUPLICATED_NAME).then(() => {
      checkAlertMessage(MESSAGE.DUPLICATE_NAME);
    });
  });

  it('자동차 이름을 입력받고, 경주 결과를 출력한다.', () => {
    submitCarNames(LEGAL_CAR_NAME);
    submitRacingCount(RACING_COUNT.MAX).then(() => {
      LEGAL_CAR_NAME.split(',').every(name => {
        cy.get(`[data-name=${name}]`).should('be.visible');
      });
    });
  });
});

describe('경주 횟수 입력 테스트', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });

  it('자동차 이름이 입력되지 않았다면 레이싱 횟수를 입력할 수 없다.', () => {
    submitRacingCount(1).then(() => {
      checkAlertMessage(MESSAGE.NO_CAR);
    });
  });

  it('입력한 레이싱 횟수가 1 미만이거나, 1000을 초과하면 alert가 뜬다', () => {
    submitCarNames(LEGAL_CAR_NAME);
    submitRacingCount(RACING_COUNT.MIN - 1).then(() => {
      checkAlertMessage(MESSAGE.WRONG_COUNT);
    });
    clearRacingCount();
    submitRacingCount(RACING_COUNT.MAX + 1).then(() => {
      checkAlertMessage(MESSAGE.WRONG_COUNT);
    });
  });

  it('최대 1000번 까지 레이싱 횟수를 입력 하여 결과를 받을 수 있다. ', () => {
    submitCarNames(LEGAL_CAR_NAME);
    submitRacingCount(RACING_COUNT.MAX).then(() => {
      cy.get('#racing-winners')
        .get('h3')
        .contains('최종 우승자')
        .should('be.visible');
    });
  });
});

describe('최종 우승자 출력 테스트', () => {
  beforeEach(() => {
    cy.visit('/index.html');
    submitCarNames(SINGLE_NAME);
    submitRacingCount(RACING_COUNT.MIN);
  });
  it('우승자를 출력한다.', () => {
    cy.get('#racing-winners')
      .get('h3')
      .contains(SINGLE_NAME)
      .should('be.visible');
  });
});

describe('다시 시작하기 버튼 테스트', () => {
  before(() => {
    cy.visit('/index.html');
    submitCarNames(LEGAL_CAR_NAME);
    submitRacingCount(RACING_COUNT.MIN);
  });
  it('다시 시작하기 버튼을 클릭한다.', () => {
    cy.get(`#${ID.RESTART_BUTTON}`).click();
    cy.get(`#${ID.CAR_NAMES_INPUT}`).should('have.value', '');
    cy.get(`#${ID.RACING_COUNT_INPUT}`).should('have.value', '');
    cy.get(`#${ID.RACING_STATUS}`).should('be.empty');
    cy.get(`#${ID.RACING_WINNERS}`).should('be.empty');
  });
});

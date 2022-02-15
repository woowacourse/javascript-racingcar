import { MESSAGE, ID, RACING_COUNT } from '../../src/constants.js';

const availableCarName = '준,포코,공원,제이슨,포비';

describe('최종 우승자 출력 테스트', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });

  it('게임을 완료하고 우승자를 출력한다.', () => {
    const carName = '공원';
    const winners = `🏆최종 우승자: ${carName}🏆`;

    cy.submitCarNames(carName);
    cy.submitRacingCount(RACING_COUNT.MIN).then(() => {
      cy.get(`#${ID.WINNERS}`).should('have.text', winners);
    });
  });
});

describe('자동차 이름 입력 테스트', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });
  it('입력한 이름이 1글자 미만, 5글자 초과일 경우 alert가 뜬다.', () => {
    const wrongLengthNames = ['준,,', '포비,준포코공원제이슨'];

    wrongLengthNames.forEach(name => {
      cy.submitCarNames(name).then(() => {
        cy.checkAlertMessage(MESSAGE.WRONG_NAME_LENGTH);
      });
      cy.clearCarNameInput();
    });
  });

  it('입력한 이름이 중복될 경우 alert가 뜬다.', () => {
    const duplicatedName = '공원,공원';

    cy.submitCarNames(duplicatedName).then(() => {
      cy.checkAlertMessage(MESSAGE.DUPLICATE_NAME);
    });
  });

  it('자동차 이름을 입력받고, 경주 결과를 출력한다.', () => {
    cy.submitCarNames(availableCarName);
    cy.submitRacingCount(RACING_COUNT.MAX).then(() => {
      availableCarName.split(',').every(name => {
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
    cy.submitRacingCount(1).then(() => {
      cy.checkAlertMessage(MESSAGE.NO_CAR);
    });
  });

  it('입력한 레이싱 횟수가 1 미만이거나, 1000을 초과하면 alert가 뜬다', () => {
    cy.submitCarNames(availableCarName);
    cy.submitRacingCount(RACING_COUNT.MIN - 1).then(() => {
      cy.checkAlertMessage(MESSAGE.WRONG_COUNT);
    });
    cy.clearRacingCountInput();

    cy.submitRacingCount(RACING_COUNT.MAX + 1).then(() => {
      cy.checkAlertMessage(MESSAGE.WRONG_COUNT);
    });
  });

  it('입력한 레이싱 횟수가 소수이면 alert가 뜬다.', () => {
    const decimalNumber = 1.5;

    cy.submitCarNames(availableCarName);
    cy.submitRacingCount(decimalNumber).then(() => {
      cy.checkAlertMessage(MESSAGE.NOT_DECIMAL_COUNT);
    });
  });

  it('최대 1000번 까지 레이싱 횟수를 입력 후, 게임을 정상적으로 종료 할 수 있다', () => {
    cy.submitCarNames(availableCarName);
    cy.submitRacingCount(RACING_COUNT.MAX);
    cy.get(`#${ID.WINNERS}`).then(element => {
      expect(element.text()).to.contain('최종 우승자');
    });
  });
});

describe('다시 시작하기 버튼 테스트', () => {
  before(() => {
    cy.visit('/index.html');
  });

  it('다시 시작하기 버튼을 클릭한다.', () => {
    cy.submitCarNames(availableCarName);
    cy.submitRacingCount(RACING_COUNT.MIN);
    cy.get(`#${ID.RESTART_BUTTON}`)
      .click()
      .then(() => {
        cy.get(`#${ID.CAR_NAMES_INPUT}`).should('have.value', '');
        cy.get(`#${ID.RACING_COUNT_INPUT}`).should('have.value', '');
        cy.get(`#${ID.RACING_STATUS}`).should('be.empty');
        cy.get(`#${ID.RACING_WINNERS}`).should('be.empty');
      });
  });
});

describe('Enter를 통해 이름과 레이싱 횟수를 입력 받을 수 있다.', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });

  it('게임 결과를 정상적으로 출력한다.', () => {
    cy.get(`#${ID.CAR_NAMES_INPUT}`).type(availableCarName).type('{enter}');
    cy.get(`#${ID.RACING_COUNT_INPUT}`).type(RACING_COUNT.MAX).type('{enter}');
    cy.get(`#${ID.WINNERS}`).then(element => {
      expect(element.text()).to.contain('최종 우승자');
    });
  });
});

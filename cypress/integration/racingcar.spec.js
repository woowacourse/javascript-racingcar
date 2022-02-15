import { SELECTOR } from '../../src/js/configs/dom.js';
import { ERROR_MESSAGE } from '../../src/js/configs/constants.js';

function createAlertStub() {
  const alertStub = cy.stub();
  cy.on('window:alert', alertStub);

  return alertStub;
}

describe('기능 요구사항', () => {
  const testCarNames = ['우디', '꼬재'];
  const inputString = '우디, 꼬재';
  const racingCount = 4;

  beforeEach(() => {
    cy.visit('index.html');
  });

  it('자동차 이름을 입력하고 확인 버튼을 누르면 레이스를 출력할 때 쉼표로 구분된 자동차 이름들을 같이 출력한다.', () => {
    cy.get(SELECTOR.$CAR_NAME_INPUT).type(inputString); // '우디,꼬재'

    cy.get(SELECTOR.$CAR_NAME_BUTTON).click();
    cy.get(SELECTOR.$CAR_NAME).should('have.length', 2);
    cy.get(SELECTOR.$CAR_NAME).each((name, index) => {
      cy.wrap(name).should('have.text', testCarNames[index]);
    });
  });
});

describe('예외 상황', () => {
  beforeEach(() => {
    cy.visit('index.html');
  });

  it('자동차 이름이 5자보다 크면 alert를 보여준다.', () => {
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

  it('자동차 이름이 공백으로 이루어지면 alert를 보여준다.', () => {
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

  it('양의 정수가 아닌 레이싱 횟수를 입력하면 alert를 보여준다.', () => {
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

  it('10보다 큰 레이싱 횟수를 입력하면 alert를 보여준다.', () => {
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

  it('입력받은 자동차 이름에 중복이 있으면 alert를 보여준다.', () => {
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

  it('자동차 이름이 등록되어 있지 않을 때 레이싱 횟수 버튼이 disabled되어 있어야 한다.', () => {
    const inputString = '5';
    const alertStub = createAlertStub();

    cy.get(SELECTOR.$RACING_COUNT_INPUT).type(inputString);
    cy.get(SELECTOR.$RACING_COUNT_BUTTON).should('be.disabled');
  });
});

import { ALERT_MESSAGE, ELEMENT_CLASS_NAME } from '../../src/js/constants.js';

function typeCarAndClick(carNames = 'east, west, south, north') {
  if (carNames) {
    cy.get(ELEMENT_CLASS_NAME.CAR_NAME_INPUT).type(carNames);
  }
  cy.get(ELEMENT_CLASS_NAME.CAR_NAME_BTN).click();
}

function typeTryCountAndClick(tryCount = 5) {
  if (tryCount) {
    cy.get(ELEMENT_CLASS_NAME.TRY_COUNT_INPUT).type(tryCount);
  }
  cy.get(ELEMENT_CLASS_NAME.TRY_COUNT_BTN).click();
}

function expectAlert(className, alertMessage) {
  const alertStub = cy.stub();
  cy.on('window:alert', alertStub);

  cy.get(className).invoke('val').then(() => {
    expect(alertStub.getCall(0)).to.be.calledWith(alertMessage);
  });
}

function testUIRemoval() {
  cy.get(ELEMENT_CLASS_NAME.CAR_NAME_INPUT).should('have.value', '');
  cy.get(ELEMENT_CLASS_NAME.TRY_COUNT_INPUT).should('have.value', '');
  cy.get(ELEMENT_CLASS_NAME.TRY_COUNT_FORM).should('have.css', 'display', 'none');
  cy.get(ELEMENT_CLASS_NAME.PROGRESS_CONTAINER).should('have.css', 'display', 'none');
  cy.get(ELEMENT_CLASS_NAME.RESULT_CONTAINER).should('have.css', 'display', 'none');
}

describe('자동차 경주', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5501');
  });

  it('처음에 페이지에 접속하면 input이 전부 비워져 있고, result창은 숨겨져 있다.', () => {
    testUIRemoval();
  });

  it('사용자가 자동차 이름을 입력하면 시도 횟수 입력란이 나타난다.', () => {
    typeCarAndClick();
    cy.get(ELEMENT_CLASS_NAME.TRY_COUNT_FORM).should('have.css', 'display', 'block');
  });

  it('자동차 이름은 5자 이하여야 한다.', () => {
    typeCarAndClick('easttt, west, south, north');
    expectAlert(ELEMENT_CLASS_NAME.CAR_NAME_INPUT, ALERT_MESSAGE.CAR_NAME_OVER_FIVE);
  });

  it('자동차 이름에 빈 문자열이 들어가면 안 된다.', () => {
    typeCarAndClick('');
    expectAlert(ELEMENT_CLASS_NAME.CAR_NAME_INPUT, ALERT_MESSAGE.CAR_NAME_EMPTY);
  });

  it('자동차 이름이 중복되면 안 된다.', () => {
    typeCarAndClick('east, west, east, north');
    expectAlert(ELEMENT_CLASS_NAME.CAR_NAME_INPUT, ALERT_MESSAGE.CAR_NAMES_DUPLICATE);
  });

  it('자동차 이름과 시도 횟수 입력 후 확인을 누르면 레이싱 진행 상황이 출력된다.', () => {
    typeCarAndClick();
    typeTryCountAndClick();

    cy.get(ELEMENT_CLASS_NAME.PROGRESS_CONTAINER).should('be.visible');
    cy.get(ELEMENT_CLASS_NAME.CAR_NAME_INPUT).invoke('val').then(carNameInput => {
        cy.get(ELEMENT_CLASS_NAME.CAR_PLAYER).should('have.length', carNameInput.split(',').length);
    });
  });

  it('시도 횟수에 빈 문자열을 입력하면 안 된다.', () => {
    typeCarAndClick();
    typeTryCountAndClick('');
    expectAlert(ELEMENT_CLASS_NAME.TRY_COUNT_INPUT, ALERT_MESSAGE.TRY_COUNT_EMPTY);
  });

  it('시도 횟수는 양수여야 한다.', () => {
    typeCarAndClick();
    typeTryCountAndClick(-1);
    expectAlert(ELEMENT_CLASS_NAME.TRY_COUNT_INPUT, ALERT_MESSAGE.TRY_COUNT_NEGATIVE);
  });

  it('시도 횟수는 정수여야 한다.', () => {
    typeCarAndClick();
    typeTryCountAndClick(0.2);
    expectAlert(ELEMENT_CLASS_NAME.TRY_COUNT_INPUT, ALERT_MESSAGE.TRY_COUNT_NOT_INT);
  });

  it('레이싱 진행 상황과 함께 우승자가 출력된다', () => {
    typeCarAndClick();
    typeTryCountAndClick();

    cy.get(ELEMENT_CLASS_NAME.RESULT_CONTAINER).should('be.visible');

    cy.document().then(doc => {
      const cars = doc.querySelectorAll('.car-player');
      const progresses = [...cars].map(car => car.parentNode.childNodes.length);
      const maxPosition = Math.max(...progresses);
      const winners = [];
      
      cars.forEach(car => {
        if (car.parentNode.childNodes.length === maxPosition) {
          winners.push(car.innerHTML);
        }
      });
      
      const winnerResult = winners.join(', ');
      cy.get(ELEMENT_CLASS_NAME.RESULT_CONTAINER).find('section').find('h2').contains(winnerResult);
    });
  });

  it('다시 시작하기 버튼 클릭 시 게임이 리셋된다', () => {
    typeCarAndClick();
    typeTryCountAndClick();
    cy.get(ELEMENT_CLASS_NAME.RESTART_BTN).click();

    testUIRemoval();
  });
});

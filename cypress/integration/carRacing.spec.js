import alertConstants from '../../src/js/constants/alertConstants.js';

function inputCarNames(carInputs) {
  cy.get('#car-names-input').type(carInputs);
  cy.get('#car-names-submit').click();
}

function inputRacingCount(racingCountInput) {
  cy.get('#racing-count-input').type(racingCountInput);
  cy.get('#racing-count-submit').click();
}

function clickRestartButton() {
  cy.get('#restart-button').click();
}

function checkAlertMessage(alertMessage) {
  cy.on('window:alert', (txt) => {
    expect(txt).to.contains(alertMessage);
  });
}

function checkRacingRound(carNamesInputText) {
  const carNames = carNamesInputText.split(',').map((name) => name.trim());
  const racingCount = 5;

  inputCarNames(carNamesInputText);
  inputRacingCount(racingCount);

  for (let i = 0; i < carNames.length; i++) {
    cy.get('.car-player').contains(carNames[i]).should('have.text', carNames[i]);
  }
}

context('carRacing', () => {
  beforeEach(() => {
    // cy.visit('http://127.0.0.1:5501/javascript-racingcar');
    cy.visit('http://127.0.0.1:5500');
  });

  it('자동차 이름이 비어있는 경우 경고창을 띄운다.', () => {
    cy.get('#car-names-submit').click();
    checkAlertMessage(alertConstants.INVALID_CAR_NAME);
  });

  it('5자 이상의 자동차 이름을 입력받으면 경고창을 띄운다.', () => {
    inputCarNames('car1, car2, car3');
    checkAlertMessage(alertConstants.INVALID_CAR_NAME);
  });

  it('중복된 자동차 이름을 입력받으면 경고창을 띄운다.', () => {
    inputCarNames('car1, car2, car3, car1');
    checkAlertMessage(alertConstants.DUPLICATE_CAR_NAME);
  });

  it('0 이하의 시도할 횟수를 입력받으면 경고창을 띄운다.', () => {
    inputCarNames('car1, car2, car3');
    inputRacingCount(0);
    checkAlertMessage(alertConstants.INVALID_RACING_COUNT);
  });

  it('자동차 이름과 시도 횟수를 입력했을 때, 자동차 이름이 출력되는지 확인한다.', () => {
    checkRacingRound('car1, car2, car3, car4');
  });

  it('다시 시작하기를 눌렀을 때도 정상적으로 게임이 플레이 되는지 확인한다.', () => {
    inputCarNames('car1, car2, car3');
    inputRacingCount(5);
    clickRestartButton();

    checkRacingRound('car1, car2, car3');
  });
});

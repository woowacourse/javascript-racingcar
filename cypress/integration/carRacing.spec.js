import alertConstants from '../../src/js/constants/alertConstants.js';

function inputCarNames(carInputs) {
  cy.get('#car-names-input').type(carInputs);
  return cy.get('#car-names-submit').click();
}

function inputRacingCount(racingCountInput) {
  cy.get('#racing-count-input').type(racingCountInput);
  return cy.get('#racing-count-submit').click();
}

function clickRestartButton() {
  cy.get('#restart-button').click();
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
    cy.visit('http://127.0.0.1:5500');
  });

  it('자동차 이름이 비어있는 경우 경고창을 띄운다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    cy.get('#car-names-submit')
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(alertConstants.INVALID_CAR_NAME);
      });
  });

  it('5자 이상의 자동차 이름을 입력받으면 경고창을 띄운다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    inputCarNames('car1, car2, car3, car100').then(() => {
      expect(alertStub.getCall(0)).to.be.calledWith(alertConstants.INVALID_CAR_NAME);
    });
  });

  it('중복된 자동차 이름을 입력받으면 경고창을 띄운다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    inputCarNames('car1, car2, car3, car1').then(() => {
      expect(alertStub.getCall(0)).to.be.calledWith(alertConstants.DUPLICATE_CAR_NAME);
    });
  });

  it('0 이하의 시도할 횟수를 입력받으면 경고창을 띄운다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    inputCarNames('car1, car2, car3');
    inputRacingCount(0).then(() => {
      expect(alertStub.getCall(0)).to.be.calledWith(alertConstants.INVALID_RACING_COUNT);
    });
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

  it('최종 우승자가 정상적으로 출력되는지 확인한다.', () => {
    inputCarNames('car1, car2, car3');
    inputRacingCount(5);

    const winners = [];
    let maxCount = -1;

    cy.document().then((doc) => {
      const $carContainers = doc.querySelectorAll('.car-container');

      $carContainers.forEach((carContainer) => {
        const childNodesLength = carContainer.childNodes.length;
        if (maxCount < childNodesLength) {
          maxCount = childNodesLength;
        }
      });

      $carContainers.forEach((carContainer) => {
        const childNodesLength = carContainer.childNodes.length;
        if (maxCount === childNodesLength) {
          const carName = carContainer.querySelector('.car-player').innerText;
          winners.push(carName);
        }
      });

      cy.get('.winners-list').should('have.text', winners.join(', '));
    });
  });
});

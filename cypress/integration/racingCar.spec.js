import { INPUT_ERROR } from '../../src/constants/constants';
/* eslint-disable no-undef */
describe('구현 결과가 요구사항과 일치해야 한다.', () => {
  const baseUrl = '../index.html';
  const SELECTOR = {
    CAR_NAMES_INPUT: '#car-names-input',
    CAR_NAMES_SUBMIT_BUTTON: '#car-names-submit',
    RACING_COUNT_INPUT: '#racing-count-input',
    RACING_COUNT_SUBMIT_BUTTON: '#racing-count-submit',
    WINNERS: '#racing-result'
  };

  before(() => {
    Cypress.Commands.add('stubRandomReturns', (returnValues = []) => {
      const randomStub = cy.stub();

      returnValues.forEach((value, index) => {
        randomStub.onCall(index).returns(value);
      });

      cy.visit(baseUrl, {
        onBeforeLoad: (window) => {
          window.MissionUtils = {
            Random: {
              pickNumberInRange: randomStub
            }
          };
        }
      });
    });
  });

  beforeEach(() => {
    cy.stubRandomReturns([5, 1]);
  });

  it('1. 게임을 완료하고 우승자를 확인할 수 있어야 한다.', () => {
    // given
    const carNames = 'poco,park';
    const winner = '🏆 최종 우승자: poco🏆';
    const racingCount = 1;

    // when
    cy.get(SELECTOR.CAR_NAMES_INPUT).type(carNames);
    cy.get(SELECTOR.CAR_NAMES_SUBMIT_BUTTON).click();
    cy.get(SELECTOR.RACING_COUNT_INPUT).type(racingCount);
    cy.get(SELECTOR.RACING_COUNT_SUBMIT_BUTTON).click();

    // then
    cy.get(SELECTOR.WINNERS).should('have.text', winner);
  });

  describe('2. 잘못된 자동차 이름 입력 유효성 검사', () => {
    beforeEach(() => {
      cy.visit(baseUrl);
    });
    it('2-1. 자동차 이름을 5자 이상 입력한 경우 해당 에러 메세지가 alert에 호출되어야 한다.', () => {
      // given
      const invalidInput = 'makerjun';
      const alertStub = cy.stub();
      cy.on('window:alert', alertStub);
      // when
      cy.get(SELECTOR.CAR_NAMES_INPUT).type(invalidInput);

      // then
      cy.get(SELECTOR.CAR_NAMES_SUBMIT_BUTTON)
        .click()
        .then(() => {
          expect(alertStub.getCall(0)).to.be.calledWith(
            INPUT_ERROR.INVALID_LENGTH
          );
        });
    });

    it('2-2. 자동차 이름을 중복되게 입력한 경우 해당 에러 메세지가 alert에 호출되어야 한다.', () => {
      // given
      const invalidInput = 'maker,maker';
      const alertStub = cy.stub();
      cy.on('window:alert', alertStub);
      // when
      cy.get(SELECTOR.CAR_NAMES_INPUT).type(invalidInput);

      // then
      cy.get(SELECTOR.CAR_NAMES_SUBMIT_BUTTON)
        .click()
        .then(() => {
          expect(alertStub.getCall(0)).to.be.calledWith(INPUT_ERROR.DUPLICATED);
        });
    });

    it('2-3. 자동차 이름 안에 공백이 포함되어 입력한 경우 해당 에러 메세지가 alert에 호출되어야 한다.', () => {
      // given
      const invalidInput = 'm un';
      const alertStub = cy.stub();
      cy.on('window:alert', alertStub);
      // when
      cy.get(SELECTOR.CAR_NAMES_INPUT).type(invalidInput);

      // then
      cy.get(SELECTOR.CAR_NAMES_SUBMIT_BUTTON)
        .click()
        .then(() => {
          expect(alertStub.getCall(0)).to.be.calledWith(
            INPUT_ERROR.CONTAINED_BLANK
          );
        });
    });

    it('2-4. 자동차 이름을 공백으로 입력한 경우 해당 에러 메세지가 alert에 호출되어야 한다.', () => {
      // given
      const invalidInput = '     ';
      const alertStub = cy.stub();
      cy.on('window:alert', alertStub);
      // when
      cy.get(SELECTOR.CAR_NAMES_INPUT).type(invalidInput);

      // then
      cy.get(SELECTOR.CAR_NAMES_SUBMIT_BUTTON)
        .click()
        .then(() => {
          expect(alertStub.getCall(0)).to.be.calledWith(INPUT_ERROR.NAME_EMPTY);
        });
    });
  });

  describe('3. 잘못된 시도 횟수를 입력한 경우 alert가 호출되어야 한다.', () => {
    beforeEach(() => {
      cy.visit(baseUrl);

      const name = 'mak,make';

      cy.get(SELECTOR.CAR_NAMES_INPUT).type(name);
      cy.get(SELECTOR.CAR_NAMES_SUBMIT_BUTTON).click();
    });

    it('3-1. 시도 횟수를 공백으로 입력한 경우 해당 에러 메세지가 alert에 호출되어야 한다.', () => {
      // given
      const invalidCountInput = ' ';
      const alertStub = cy.stub();
      cy.on('window:alert', alertStub);

      // when
      cy.get(SELECTOR.RACING_COUNT_INPUT).type(invalidCountInput);

      // then
      cy.get(SELECTOR.RACING_COUNT_SUBMIT_BUTTON)
        .click()
        .then(() => {
          expect(alertStub).to.be.calledWith(INPUT_ERROR.COUNT_EMPTY);
        });
    });

    it('3-2. 시도 횟수를 음수로 입력한 경우 해당 에러 메세지가 alert에 호출되어야 한다.', () => {
      // given
      const invalidCountInput = -1;
      const alertStub = cy.stub();
      cy.on('window:alert', alertStub);

      // when
      cy.get(SELECTOR.RACING_COUNT_INPUT).type(invalidCountInput);

      // then
      cy.get(SELECTOR.RACING_COUNT_SUBMIT_BUTTON)
        .click()
        .then(() => {
          expect(alertStub).to.be.calledWith(INPUT_ERROR.COUNT_NEGATIVE);
        });
    });

    it('3-3. 시도 횟수를 정수가 아닌 수로 입력한 경우 해당 에러 메세지가 alert에 호출되어야 한다.', () => {
      // given
      const invalidCountInput = 2.3;
      const alertStub = cy.stub();
      cy.on('window:alert', alertStub);

      // when
      cy.get(SELECTOR.RACING_COUNT_INPUT).type(invalidCountInput);

      // then
      cy.get(SELECTOR.RACING_COUNT_SUBMIT_BUTTON)
        .click()
        .then(() => {
          expect(alertStub).to.be.calledWith(INPUT_ERROR.COUNT_NOT_NATURAL);
        });
    });
  });
});

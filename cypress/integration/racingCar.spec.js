import { INPUT_ERROR, TIME } from '../../src/constants/constants';
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

  beforeEach(() => {
    cy.stubRandomReturns([5, 1]);
  });

  it('1. 게임을 완료하고 우승자를 확인할 수 있어야 한다.', () => {
    // given
    const carNames = 'poco,park';
    const winner = '🏆 최종 우승자: poco🏆';
    const racingCount = 1;

    // when
    cy.submitCarNames(carNames);
    cy.submitRacingCount(racingCount);
    cy.wait(TIME.DELAY_RACE_RESULT + TIME.DELAY_RACE_TIME * racingCount);
    // then
    cy.get(SELECTOR.WINNERS).should('have.text', winner);
  });

  it('1-1. 게임을 완료하고 우승자가 포함된 축하메세지를 확인할 수 있어야 한다.', () => {
    // given
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    const carNames = 'poco,park';
    const winner = '🏆 최종 우승자: poco🏆';
    const racingCount = 4;

    // when
    cy.submitCarNames(carNames);
    cy.submitRacingCount(racingCount);
    // then
    cy.wait(TIME.DELAY_RACE_RESULT + TIME.DELAY_RACE_TIME * racingCount).then(
      () => {
        expect(alertStub).to.be.calledWith(
          `🎉 축하합니다. 최종 우승자는 poco입니다! 🎉`
        );
      }
    );
    cy.get(SELECTOR.WINNERS).should('have.text', winner);
  });

  describe('2. 잘못된 자동차 이름 입력 유효성 검사', () => {
    beforeEach(() => {
      cy.visit(baseUrl);
    });
    it('2-1. 자동차 이름을 5자 이상 입력한 경우 해당 에러 메세지가 alert에 호출되어야 한다.', () => {
      // given
      const invalidInput = 'makerjun';

      // when
      cy.get(SELECTOR.CAR_NAMES_INPUT).type(invalidInput);

      // then
      cy.checkNamesError(INPUT_ERROR.INVALID_LENGTH);
    });

    it('2-2. 자동차 이름을 중복되게 입력한 경우 해당 에러 메세지가 alert에 호출되어야 한다.', () => {
      // given
      const invalidInput = 'maker,maker';

      // when
      cy.get(SELECTOR.CAR_NAMES_INPUT).type(invalidInput);

      // then
      cy.checkNamesError(INPUT_ERROR.DUPLICATED);
    });

    it('2-3. 자동차 이름 안에 공백이 포함되어 입력한 경우 해당 에러 메세지가 alert에 호출되어야 한다.', () => {
      // given
      const invalidInput = 'm un';

      // when
      cy.get(SELECTOR.CAR_NAMES_INPUT).type(invalidInput);

      // then
      cy.checkNamesError(INPUT_ERROR.CONTAINED_BLANK);
    });

    it('2-4. 자동차 이름을 공백으로 입력한 경우 해당 에러 메세지가 alert에 호출되어야 한다.', () => {
      // given
      const invalidInput = '     ';

      // when
      cy.get(SELECTOR.CAR_NAMES_INPUT).type(invalidInput);

      // then
      cy.checkNamesError(INPUT_ERROR.NULL);
    });
  });

  describe('3. 잘못된 시도 횟수를 입력한 경우 alert가 호출되어야 한다.', () => {
    beforeEach(() => {
      cy.visit(baseUrl);
      const name = 'mak,make';
      cy.submitCarNames(name);
    });

    it('3-1. 시도 횟수를 공백으로 입력한 경우 해당 에러 메세지가 alert에 호출되어야 한다.', () => {
      // given
      const invalidCountInput = ' ';

      // when
      cy.get(SELECTOR.RACING_COUNT_INPUT).type(invalidCountInput);

      // then
      cy.checkCountError(INPUT_ERROR.COUNT_BLANK);
    });

    it('3-2. 시도 횟수를 음수로 입력한 경우 해당 에러 메세지가 alert에 호출되어야 한다.', () => {
      // given
      const invalidCountInput = -1;

      // when
      cy.get(SELECTOR.RACING_COUNT_INPUT).type(invalidCountInput);

      // then
      cy.checkCountError(INPUT_ERROR.COUNT_NOT_IN_RANGE);
    });

    it('3-3. 시도 횟수를 정수가 아닌 수로 입력한 경우 해당 에러 메세지가 alert에 호출되어야 한다.', () => {
      // given
      const invalidCountInput = 2.3;

      // when
      cy.get(SELECTOR.RACING_COUNT_INPUT).type(invalidCountInput);

      // then
      cy.checkCountError(INPUT_ERROR.COUNT_NOT_NATURAL);
    });

    it('3-4. 시도 횟수를 20이 넘어가는 수로 입력한 경우 해당 에러 메세지가 alert에 호출되어야 한다.', () => {
      // given
      const invalidCountInput = 23;

      // when
      cy.get(SELECTOR.RACING_COUNT_INPUT).type(invalidCountInput);

      // then
      cy.checkCountError(INPUT_ERROR.COUNT_NOT_IN_RANGE);
    });
  });
});

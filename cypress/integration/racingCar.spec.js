import { DELAY, INPUT_ERROR, SELECTOR } from '../../src/constants/constants';

/* eslint-disable no-undef */
describe('구현 결과가 요구사항과 일치해야 한다.', () => {
  const baseUrl = '../index.html';

  it('1. 게임을 완료하고 우승자를 확인할 수 있어야 한다.', () => {
    // given
    cy.visit(baseUrl);
    const carNames = 'Marco';
    const winner = '🏆 최종 우승자: Marco🏆';
    const racingCount = 1;

    // when
    cy.get(SELECTOR.ID.CAR_NAMES_INPUT).type(carNames);
    cy.get(SELECTOR.ID.CAR_NAMES_BUTTON).click();
    cy.get(SELECTOR.ID.RACING_COUNT_INPUT).type(racingCount);
    cy.get(SELECTOR.ID.RACING_COUNT_SUBMIT).click();

    // then
    cy.get(SELECTOR.ID.WINNER_SPAN).should('have.text', winner);
  });

  describe('2. 잘못된 자동차 이름 입력 유효성 검사', () => {
    beforeEach(() => {
      cy.visit(baseUrl);
    });
    it('2-1. 자동차 이름을 5자 이상 입력한 경우 해당 에러 메세지가 alert에 호출되어야 한다.', () => {
      cy.nameInputValidator('makerjun', INPUT_ERROR.INVALID_LENGTH);
    });

    it('2-2. 자동차 이름을 중복되게 입력한 경우 해당 에러 메세지가 alert에 호출되어야 한다.', () => {
      cy.nameInputValidator('maker,maker', INPUT_ERROR.DUPLICATED);
    });

    it('2-3. 자동차 이름 안에 공백이 포함되어 입력한 경우 해당 에러 메세지가 alert에 호출되어야 한다.', () => {
      cy.nameInputValidator('na me', INPUT_ERROR.CONTAINED_BLANK);
    });

    it('2-4. 자동차 이름을 공백으로 입력한 경우 해당 에러 메세지가 alert에 호출되어야 한다.', () => {
      cy.nameInputValidator('   ', INPUT_ERROR.NAME_EMPTY);
    });
  });

  describe('3. 잘못된 시도 횟수를 입력한 경우 alert가 호출되어야 한다.', () => {
    beforeEach(() => {
      cy.visit(baseUrl);

      const name = 'mak,make';

      cy.get(SELECTOR.ID.CAR_NAMES_INPUT).type(name);
      cy.get(SELECTOR.ID.CAR_NAMES_BUTTON).click();
    });

    it('3-1. 시도 횟수를 공백으로 입력한 경우 해당 에러 메세지가 alert에 호출되어야 한다.', () => {
      cy.countInputValidator(' ', INPUT_ERROR.COUNT_EMPTY);
    });

    it('3-2. 시도 횟수를 음수로 입력한 경우 해당 에러 메세지가 alert에 호출되어야 한다.', () => {
      cy.countInputValidator('-1', INPUT_ERROR.COUNT_NEGATIVE);
    });

    it('3-3. 시도 횟수를 정수가 아닌 수로 입력한 경우 해당 에러 메세지가 alert에 호출되어야 한다.', () => {
      cy.countInputValidator('2.3', INPUT_ERROR.COUNT_NOT_NATURAL);
    });
  });

  describe('4. 화면 렌더링 확인', () => {
    beforeEach(() => {
      // given
      cy.visit(baseUrl);
      const carNames = 'Marco';
      const racingCount = 3;

      // when
      cy.get(SELECTOR.ID.CAR_NAMES_INPUT).type(carNames);
      cy.get(SELECTOR.ID.CAR_NAMES_BUTTON).click();
      cy.get(SELECTOR.ID.RACING_COUNT_INPUT).type(racingCount);
      cy.get(SELECTOR.ID.RACING_COUNT_SUBMIT).click();
    });

    it('4-1. 시도횟수 동안 1초의 텀을 두고 스피너 로딩 애니메이션이 표시되어야 한다.', () => {
      const racingCount = 3;
      cy.clock();

      for (let i = 0; i < racingCount; i++) {
        cy.tick(DELAY.TURN_BETWEEN_TIME);
        cy.get(SELECTOR.CLASS.CAR_PROGRESS_CONTAINER).each((container) => {
          cy.get(container).find('.loader').should('exist');
        });
      }
    });

    it('4-2. 결과 렌더링 2초 후 우승자 축하 alert를 띄워야 한다.', () => {
      const alertStub = cy.stub();
      cy.on('window:alert', alertStub);

      cy.clock();
      if (cy.get(SELECTOR.ID.WINNER_SPAN)) {
        cy.tick(DELAY.NOTIFY_RESULT_TIME).then(() => {
          cy.expect(alertStub.getCall(0)).to.be.calledWith(
            `우승자는 Marco입니다.`
          );
        });
      }
    });
  });
});

/* eslint-disable no-undef */
import { DELAY, INPUT_ERROR, SELECTOR } from '../../src/constants/constants';

describe('구현 결과가 요구사항과 일치해야 한다.', () => {
  const baseUrl = '../index.html';
  const carName = 'Marco';
  const racingRound = 3;

  it('1. 게임을 완료하고 우승자를 확인할 수 있어야 한다.', () => {
    // given
    cy.visit(baseUrl);
    const winnerSpan = `🏆 최종 우승자: ${carName}🏆`;

    // when
    cy.get(SELECTOR.ID.CAR_NAMES_INPUT).type(carName);
    cy.get(SELECTOR.ID.CAR_NAMES_BUTTON).click();
    cy.get(SELECTOR.ID.RACING_ROUND_INPUT).type(racingRound);
    cy.get(SELECTOR.ID.RACING_ROUND_SUBMIT).click();

    // then
    cy.get(SELECTOR.ID.RACING_RESULT).should('have.text', winnerSpan);
  });

  describe('2. 잘못된 자동차 이름 입력 유효성 검사', () => {
    beforeEach(() => {
      cy.visit(baseUrl);
    });
    it('2-1. 자동차 이름을 5자 이상 입력한 경우 해당 에러 메세지가 alert에 호출되어야 한다.', () => {
      cy.checkNameInputValid('makerjun', INPUT_ERROR.INVALID_LENGTH);
    });

    it('2-2. 자동차 이름을 중복되게 입력한 경우 해당 에러 메세지가 alert에 호출되어야 한다.', () => {
      cy.checkNameInputValid('maker,maker', INPUT_ERROR.DUPLICATED);
    });

    it('2-3. 자동차 이름 안에 공백이 포함되어 입력한 경우 해당 에러 메세지가 alert에 호출되어야 한다.', () => {
      cy.checkNameInputValid('na me', INPUT_ERROR.CONTAINED_BLANK);
    });

    it('2-4. 자동차 이름을 공백으로 입력한 경우 해당 에러 메세지가 alert에 호출되어야 한다.', () => {
      cy.checkNameInputValid('   ', INPUT_ERROR.NAME_EMPTY);
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
      cy.checkRoundInputValid(' ', INPUT_ERROR.ROUND_EMPTY);
    });

    it('3-2. 시도 횟수를 음수로 입력한 경우 해당 에러 메세지가 alert에 호출되어야 한다.', () => {
      cy.checkRoundInputValid('-1', INPUT_ERROR.ROUND_NEGATIVE);
    });

    it('3-3. 시도 횟수를 정수가 아닌 수로 입력한 경우 해당 에러 메세지가 alert에 호출되어야 한다.', () => {
      cy.checkRoundInputValid('2.3', INPUT_ERROR.ROUND_NOT_NATURAL);
    });
  });

  describe('4. 화면 렌더링 확인', () => {
    beforeEach(() => {
      // given
      cy.visit(baseUrl);

      // when
      cy.get(SELECTOR.ID.CAR_NAMES_INPUT).type(carName);
      cy.get(SELECTOR.ID.CAR_NAMES_BUTTON).click();
      cy.get(SELECTOR.ID.RACING_ROUND_INPUT).type(racingRound);
      cy.get(SELECTOR.ID.RACING_ROUND_SUBMIT).click();
    });

    it('4-1. 시도횟수 동안 1초의 텀을 두고 스피너 로딩 애니메이션이 표시되어야 한다.', () => {
      cy.clock();

      for (let i = 0; i < racingRound; i++) {
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
      if (cy.get(SELECTOR.ID.RACING_RESULT)) {
        cy.tick(DELAY.NOTIFY_RESULT_TIME).then(() => {
          cy.expect(alertStub.getCall(0)).to.be.calledWith(
            `우승자는 ${carName}입니다.`
          );
        });
      }
    });

    it('4-3. 다시 시작하기 버튼 클릭 후 입력 폼만 보이고 입력 값을 초기화해야 한다.', () => {
      cy.get(SELECTOR.ID.RESTART_BUTTON)
        .click()
        .then(() => {
          cy.get(SELECTOR.ID.RACING_PROGRESS_CONTAINER)
            .children()
            .should('not.exist');
          cy.get(SELECTOR.ID.RACING_RESULT_CONTAINER)
            .children()
            .should('not.exist');
          cy.get(SELECTOR.ID.CAR_NAMES_INPUT).should('have.value', '');
          cy.get(SELECTOR.ID.RACING_ROUND_INPUT).should('have.value', '');
        });
    });
  });
});

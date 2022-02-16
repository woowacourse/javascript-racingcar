import { SELECTOR } from '../src/js/constants/selector.js';

describe('기본 사용 순서 체크 (E2E)', () => {
  before(() => {
    cy.visit('./');
  });

  it('자동차의 이름을 입력할 수 있어야한다.', () => {
    cy.get(SELECTOR.CAR_NAME_INPUT).type('compy, usage');
    cy.get(SELECTOR.CAR_NAME_BUTTON).click();

    cy.get(SELECTOR.CAR_NAME_INPUT).invoke('attr', 'disabled').should('eq', 'disabled');
    cy.get(SELECTOR.CAR_NAME_BUTTON).invoke('attr', 'disabled').should('eq', 'disabled');
  });

  it('이동 횟수를 입력할 수 있어야한다.', () => {
    cy.get(SELECTOR.RACE_TIME_INPUT).type('5');
    cy.get(SELECTOR.RACE_TIME_BUTTON).click();

    cy.get(SELECTOR.RACE_TIME_INPUT).invoke('attr', 'disabled').should('eq', 'disabled');
    cy.get(SELECTOR.RACE_TIME_BUTTON).invoke('attr', 'disabled').should('eq', 'disabled');
  });

  it('자동차 이름과 이동 횟수를 입력했다면 결과가 출력되어야 한다.', () => {
    cy.get(SELECTOR.RACE_CONTAINER).invoke('attr', 'data-state').should('eq', 'on');

    cy.get(SELECTOR.RESULT_CONTAINER).invoke('attr', 'data-state').should('eq', 'on');

    cy.get(SELECTOR.RACE_ADVANCE).contains('⬇️️');
    cy.get(SELECTOR.WINNERS).contains('최종 우승자');
  });

  it('게임을 재시작할 수 있어야 한다.', () => {
    cy.get(SELECTOR.RETRY_BUTTON).click();

    cy.get(SELECTOR.CAR_NAME_INPUT).invoke('attr', 'disabled').should('eq', undefined);
    cy.get(SELECTOR.CAR_NAME_BUTTON).invoke('attr', 'disabled').should('eq', undefined);

    cy.get(SELECTOR.CAR_NAME_INPUT).should('have.text', '');

    cy.get(SELECTOR.RACE_TIME_INPUT).invoke('attr', 'disabled').should('eq', undefined);
    cy.get(SELECTOR.RACE_TIME_BUTTON).invoke('attr', 'disabled').should('eq', undefined);

    cy.get(SELECTOR.RACE_TIME_INPUT).should('have.text', '');
  });
});

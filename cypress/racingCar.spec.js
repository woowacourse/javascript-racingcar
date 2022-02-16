import { ERROR_MESSAGE } from '../src/js/utils/constants.js';

/* eslint-disable */
describe('구현 결과가 요구사항과 일치해야 한다.', () => {
  const baseURL = 'index.html';

  beforeEach(() => {
    cy.visit(baseURL);
  });

  const CAR_NAMES = '아반떼';
  const TRY_COUNT = 5;

  const playGameCorrectly = () => {
    cy.get('#car-names-input').type(CAR_NAMES);
    cy.get('#car-names-button').click();
    cy.get('#racing-count-input').type(TRY_COUNT);
    cy.get('#racing-count-button').click();
    cy.get('#reset-btn').click();
  };

  it('자동차 이름을 5자 이상 입력한 경우 해당 에러 메시지가 alert에 호출되어야 한다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get('#car-names-input').type('ab,c,zdffddd');
    cy.get('#car-names-button')
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(ERROR_MESSAGE.NAME_TOO_LONG);
      });
  });

  it('자동차 이름을 공백으로 입력한 경우 해당 에러 메시지가 alert에 호출되어야 한다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get('#car-names-input').type(' ');
    cy.get('#car-names-button')
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(ERROR_MESSAGE.NAME_CANNOT_BE_BLANK);
      });
  });

  it('입력된 횟수가 1 보다 작을 경우 해당 에러 메시지가 alert에 호출되어야 한다', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get('#car-names-input').type('a,b,c');
    cy.get('#car-names-button').click();
    cy.get('#racing-count-input').type(0);
    cy.get('#racing-count-button')
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(ERROR_MESSAGE.COUNT_TOO_SMALL);
      });
  });

  it('게임을 완료하고 최종 우승자를 출력한다.', () => {
    const winners = `🏆 최종 우승자: ${CAR_NAMES} 🏆`;
    playGameCorrectly();
    cy.get('#winner-names').should('have.text', winners);
  });

  it('다시 시도하기 버튼을 클릭하면, 게임이 초기화되어야 한다.', () => {
    playGameCorrectly();
    cy.get('#car-names-input').should('have.value', '');
    cy.get('#racing-count-input').should('have.value', '');
    cy.get('#racing-count-form').should('have.css', 'display', 'none');
    cy.get('#result-screen').should('have.css', 'display', 'none');
    cy.get('#final-winner').should('have.css', 'display', 'none');
  });
});

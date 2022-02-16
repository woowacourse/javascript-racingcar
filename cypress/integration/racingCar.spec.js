import { ERROR_MESSAGE, SELECTOR } from '../../src/common/constants.js';

describe('구현 결과가 요구사항과 일치해야 한다.', () => {
  const baseUrl = '../index.html';

  before(() => {
    cy.visit(baseUrl);
  });

  it('잘못된 자동차 이름이 제출되면 에러 메세지를 확인할 수 있어야 한다.', () => {
    const alertStub = cy.stub();
    const invalidInput = 'ab,cde,fghijk';

    cy.on('window:alert', alertStub);

    cy.get(SELECTOR.CAR_NAMES_INPUT).type(invalidInput);

    cy.get(SELECTOR.CAR_NAMES_SUBMIT)
      .click()
      .then(() => {
        expect(alertStub).to.be.calledWith(ERROR_MESSAGE.CAR_NAMES);
      });
  });

  it('잘못된 자동차 이름이 제출되면 자동차 이름을 다시 입력할 수 있어야 한다.', () => {
    cy.get(SELECTOR.CAR_NAMES_INPUT).should('have.value', '');
  });

  it('올바른 자동차 이름이 제출되면 자동차 이름을 확인할 수 있어야 한다.', () => {
    const validInput = 'apple, banan, carro';

    cy.get(SELECTOR.CAR_NAMES_INPUT).type(validInput);
    cy.get(SELECTOR.CAR_NAMES_SUBMIT).click();

    cy.get('#apple').should('be.visible');
    cy.get('#banan').should('be.visible');
    cy.get('#carro').should('be.visible');
  });

  it('올바른 자동차 이름이 제출되면 시도 횟수를 입력할 수 있어야 한다.', () => {
    cy.get(SELECTOR.RACING_COUNT_INPUT).should('be.visible');
    cy.get(SELECTOR.RACING_COUNT_SUBMIT).should('be.visible');
  });

  it('잘못된 시도 횟수가 제출되면 에러 메세지를 확인할 수 있어야 한다.', () => {
    const alertStub = cy.stub();
    const invalidInput = 'e';

    cy.on('window:alert', alertStub);

    cy.get(SELECTOR.RACING_COUNT_INPUT).type(invalidInput);

    cy.get(SELECTOR.RACING_COUNT_SUBMIT)
      .click()
      .then(() => {
        expect(alertStub).to.be.calledWith(ERROR_MESSAGE.RACING_COUNT);
      });
  });

  it('잘못된 시도 횟수가 제출되면 시도 횟수를 다시 입력할 수 있어야 한다.', () => {
    cy.get(SELECTOR.RACING_COUNT_INPUT).should('have.value', '');
  });

  it('올바른 시도 횟수가 제출되면 게임을 다시 시작할 수 있어야 한다.', () => {
    const validInput = 3;

    cy.get(SELECTOR.RACING_COUNT_INPUT).type(validInput);
    cy.get(SELECTOR.RACING_COUNT_SUBMIT).click();

    cy.get(SELECTOR.RESTART).should('be.visible');
  });

  it('게임을 다시 시작하면 자동차 이름 입력만 할 수 있어야 한다.', () => {
    cy.get(SELECTOR.RESTART).click();

    cy.get(SELECTOR.CAR_NAMES_INPUT).should('be.visible');
    cy.get(SELECTOR.CAR_NAMES_SUBMIT).should('be.visible');
    cy.get('#apple').should('not.exist');
    cy.get('#banan').should('not.exist');
    cy.get('#carro').should('not.exist');
    cy.get(SELECTOR.RACING_COUNT_INPUT).should('not.exist');
    cy.get(SELECTOR.RACING_COUNT_SUBMIT).should('not.exist');
    cy.get('#winners').should('not.exist');
    cy.get(SELECTOR.RESTART).should('not.exist');
  });
});

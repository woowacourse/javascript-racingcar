import { SELECTOR } from '../../src/common/constants.js';

describe('구현 결과가 요구사항과 일치해야 한다.', () => {
  const baseUrl = '../index.html';
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('잘못된 자동차 이름이 제출된 경우에 에러 메세지를 확인할 수 있어야 한다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    const invalidInput = 'ab,cde,fghijk';
    cy.get(SELECTOR.CAR_NAMES_INPUT).type(invalidInput);

    cy.get(SELECTOR.CAR_NAMES_SUBMIT)
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it('잘못된 자동차 이름이 제출된 경우에 자동차 이름을 다시 입력할 수 있어야 한다.', () => {
    const invalidInput = 'abcdef';
    cy.get(SELECTOR.CAR_NAMES_INPUT).type(invalidInput);

    cy.get(SELECTOR.CAR_NAMES_SUBMIT).click().type('{enter}');

    cy.get(SELECTOR.CAR_NAMES_INPUT).should('have.value', '');
  });

  it('올바른 자동차 이름이 제출된 경우에 시도할 횟수를 입력할 수 있어야 한다.', () => {
    const validCarNamesInput = 'apple,banan,carro';
    cy.get(SELECTOR.CAR_NAMES_INPUT).type(validCarNamesInput);

    cy.get(SELECTOR.CAR_NAMES_SUBMIT).click();

    cy.get(SELECTOR.RACING_COUNT_INPUT).should('exist');

    cy.get(SELECTOR.RACING_COUNT_SUBMIT).should('exist');
  });

  it('잘못된 시도할 횟수가 제출된 경우에 에러 메세지를 확인할 수 있어야 한다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    const validCarNamesInput = 'apple,banan,carro';
    cy.get(SELECTOR.CAR_NAMES_INPUT).type(validCarNamesInput);

    cy.get(SELECTOR.CAR_NAMES_SUBMIT).click();

    const invalidInput = 'e';
    cy.get(SELECTOR.RACING_COUNT_INPUT).type(invalidInput);

    cy.get(SELECTOR.RACING_COUNT_SUBMIT)
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it('잘못된 시도할 횟수가 제출된 경우에 시도할 횟수를 다시 입력할 수 있어야 한다.', () => {
    const validCarNamesInput = 'apple,banan,carro';
    cy.get(SELECTOR.CAR_NAMES_INPUT).type(validCarNamesInput);

    cy.get(SELECTOR.CAR_NAMES_SUBMIT).click();

    const invalidInput = '-123';
    cy.get(SELECTOR.RACING_COUNT_INPUT).type(invalidInput);

    cy.get(SELECTOR.RACING_COUNT_SUBMIT).click().type('{enter}');

    cy.get(SELECTOR.RACING_COUNT_INPUT).should('have.value', '');
  });
});

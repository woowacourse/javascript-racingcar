import { SELECTOR } from '../../src/common/constants.js';

const baseUrl = '../index.html';

describe('정상적으로 프로그램이 실행되는 지 테스트한다', () => {
  before(() => {
    cy.visit(baseUrl);
  });

  it('자동차 이름을 입력할 수 있어야한다', () => {});

  it('자동차 이름이 입력이 되면 순서에 맞게 자동차 이름들이 보여야한다.', () => {});

  it('자동차 이름이 입력이 되면 시도할 횟수를 입력할 수 있어야 한다.', () => {
    const validCarNamesInput = 'apple,banan,carro';

    cy.get(SELECTOR.CAR_NAMES_INPUT).type(validCarNamesInput);

    cy.get(SELECTOR.CAR_NAMES_SUBMIT).click();

    cy.get(SELECTOR.RACING_COUNT_INPUT).should('exist');
    cy.get(SELECTOR.RACING_COUNT_SUBMIT).should('exist');
  });

  it('자동차 이름과 시도할 횟수를 입력하면, 최종 우승자가 보여야한다.', () => {});

  it('자동차 이름과 시도할 횟수를 입력하면, 다시 시작하기 버튼이 보여야한다.', () => {});

  it('다시 시작하기 버튼을 클릭하면, 게임이 초기화된다.', () => {});
});

describe('예외 사항', () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  context('입력값이 잘못된 경우 사용자들이 알 수 있게 해준다', () => {
    it('5자를 초과하는 자동차 이름이 제출된 경우에 alert을 이용해 메시지를 보여준다.', () => {
      const invalidInput = 'ab,cde,fghijk';

      cy.get(SELECTOR.CAR_NAMES_INPUT).type(invalidInput);

      cy.checkAlert(SELECTOR.CAR_NAMES_SUBMIT);
    });

    it('공백으로만 이루어진 자동차 이름이 제출된 경우에 alert를 이용해 메시지를 보여준다', () => {
      const invalidInput = ' , , ';

      cy.get(SELECTOR.CAR_NAMES_INPUT).type(invalidInput);

      cy.checkAlert(SELECTOR.CAR_NAMES_SUBMIT);
    });

    it('중복된 자동차 이름이 제출된 경우에 alert를 이용해 메시지를 보여준다', () => {
      const invalidInput = 'abc,abc,abcd';

      cy.get(SELECTOR.CAR_NAMES_INPUT).type(invalidInput);

      cy.checkAlert(SELECTOR.CAR_NAMES_SUBMIT);
    });

    it('제출된 시도할 횟수가 양의 정수가 아닌 경우에 alert을 이용해 메시지를 보여준다.', () => {
      const invalidInput = 'e';
      const validCarNamesInput = 'apple,banan,carro';

      cy.get(SELECTOR.CAR_NAMES_INPUT).type(validCarNamesInput);

      cy.get(SELECTOR.CAR_NAMES_SUBMIT).click();

      cy.get(SELECTOR.RACING_COUNT_INPUT).type(invalidInput);

      cy.checkAlert(SELECTOR.RACING_COUNT_SUBMIT);
    });
  });

  context('입력값이 잘못된 경우 사용자들이 다시 입력할 수 있게 해준다', () => {
    it('5자를 초과하는 자동차 이름이 제출된 경우에 다시 입력할 수 있게 한다.', () => {
      const invalidInput = 'abcdef';

      cy.get(SELECTOR.CAR_NAMES_INPUT).type(invalidInput);

      cy.get(SELECTOR.CAR_NAMES_SUBMIT).click().type('{enter}');

      cy.get(SELECTOR.CAR_NAMES_INPUT).should('have.value', '');
    });

    it('공백으로만 이루어진 자동차 이름이 제출된 경우에 다시 입력할 수 있게 한다.', () => {
      const invalidInput = ' , , ';

      cy.get(SELECTOR.CAR_NAMES_INPUT).type(invalidInput);

      cy.get(SELECTOR.CAR_NAMES_SUBMIT).click().type('{enter}');

      cy.get(SELECTOR.CAR_NAMES_INPUT).should('have.value', '');
    });

    it('중복된 자동차 이름이 제출된 경우 다시 입력할 수 있게 한다.', () => {
      const invalidInput = 'abc,abc,abcd';

      cy.get(SELECTOR.CAR_NAMES_INPUT).type(invalidInput);

      cy.get(SELECTOR.CAR_NAMES_SUBMIT).click().type('{enter}');

      cy.get(SELECTOR.CAR_NAMES_INPUT).should('have.value', '');
    });

    it('제출된 시도할 횟수가 양의 정수가 아닌 경우에 다시 입력할 수 있게 한다.', () => {
      const invalidInput = '-123';

      const validCarNamesInput = 'apple,banan,carro';

      cy.get(SELECTOR.CAR_NAMES_INPUT).type(validCarNamesInput);

      cy.get(SELECTOR.CAR_NAMES_SUBMIT).click();

      cy.get(SELECTOR.RACING_COUNT_INPUT).type(invalidInput);

      cy.get(SELECTOR.RACING_COUNT_SUBMIT).click();

      cy.get(SELECTOR.RACING_COUNT_INPUT).should('have.value', '');
    });
  });
});

import { SELECTOR } from '../../src/common/constants.js';

const baseUrl = '../index.html';

describe('자동차 게임 테스트', () => {
  before(() => {
    cy.visit(baseUrl);
    const validCarNamesInput = 'apple,banan,carro';

    cy.get(SELECTOR.CAR_NAMES_INPUT).type(validCarNamesInput);
    cy.get(SELECTOR.CAR_NAMES_SUBMIT).click();
  });

  context('자동차 이름이 입력된 후, 시도할 횟수 입력창과 자동차 이름들이 보이는 지 테스트', () => {
    it('시도 횟수 입력창을 보여준다.', () => {
      cy.get(SELECTOR.RACING_COUNT_INPUT).should('be.visible');
      cy.get(SELECTOR.RACING_COUNT_SUBMIT).should('be.visible');
    });

    it('자동차 이름들을 보여준다.', () => {
      cy.get(SELECTOR.CARS_CONTAINER).contains('apple');
      cy.get(SELECTOR.CARS_CONTAINER).contains('banan');
      cy.get(SELECTOR.CARS_CONTAINER).contains('carro');
    });
  });

  context(
    '시도할 횟수가 입력된 후, 최종 우승자와 다시 시작하기 버튼, 축하 메시지가 보이는 지 테스트',
    () => {
      before(() => {
        const validRacingCountInput = 2;

        cy.get(SELECTOR.RACING_COUNT_INPUT).type(validRacingCountInput);
        cy.get(SELECTOR.RACING_COUNT_SUBMIT).click();
      });

      it('결과가 나온 후 2초 후에 축하 메시지가 보여야한다.', () => {
        const alertStub = cy.stub();
        cy.on('window:alert', alertStub);
        cy.clock();

        cy.get(SELECTOR.RESTART)
          .tick(2000)
          .then(() => {
            expect(alertStub).to.be.called;
          });
      });

      it('최종 우승자가 보여야한다.', () => {
        cy.get(SELECTOR.WINNERS).should('be.visible');
      });

      it('다시 시작하기 버튼이 보여야한다.', () => {
        cy.get(SELECTOR.RESTART).should('be.visible');
      });
    }
  );

  context('다시 시작하기 버튼을 클릭하면, 리셋되는 지 테스트', () => {
    before(() => {
      cy.get(SELECTOR.RESTART).click();
    });

    it('다시 시작하기 버튼이 사라진다.', () => {
      cy.get(SELECTOR.RESTART).should('not.exist');
    });

    it('자동차 이름 입력값이 사라진다.', () => {
      cy.get(SELECTOR.CAR_NAMES_INPUT).should('have.value', '');
    });

    it('시도할 횟수 입력창이 사라진다.', () => {
      cy.get(SELECTOR.RACING_COUNT_INPUT).should('not.exist');
    });
  });
});

describe('예외 사항', () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  context('입력값이 잘못된 경우 메시지 테스트', () => {
    it('5자를 초과하는 자동차 이름이 제출된 경우에 alert을 이용해 메시지를 보여준다.', () => {
      const invalidInput = 'ab,cde,fghijk';

      cy.get(SELECTOR.CAR_NAMES_INPUT).type(invalidInput);

      cy.clickCheckAlert(SELECTOR.CAR_NAMES_SUBMIT);
    });

    it('공백으로만 이루어진 자동차 이름이 제출된 경우에 alert를 이용해 메시지를 보여준다', () => {
      const invalidInput = ' , , ';

      cy.get(SELECTOR.CAR_NAMES_INPUT).type(invalidInput);

      cy.clickCheckAlert(SELECTOR.CAR_NAMES_SUBMIT);
    });

    it('중복된 자동차 이름이 제출된 경우에 alert를 이용해 메시지를 보여준다', () => {
      const invalidInput = 'abc,abc,abcd';

      cy.get(SELECTOR.CAR_NAMES_INPUT).type(invalidInput);

      cy.clickCheckAlert(SELECTOR.CAR_NAMES_SUBMIT);
    });

    it('제출된 시도할 횟수가 양의 정수가 아닌 경우에 alert을 이용해 메시지를 보여준다.', () => {
      const invalidInput = 'e';
      const validCarNamesInput = 'apple,banan,carro';

      cy.get(SELECTOR.CAR_NAMES_INPUT).type(validCarNamesInput);

      cy.get(SELECTOR.CAR_NAMES_SUBMIT).click();

      cy.get(SELECTOR.RACING_COUNT_INPUT).type(invalidInput);

      cy.clickCheckAlert(SELECTOR.RACING_COUNT_SUBMIT);
    });
  });

  context('입력값이 잘못된 경우 리셋 기능 테스트', () => {
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
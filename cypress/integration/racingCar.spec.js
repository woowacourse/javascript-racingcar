describe('구현 결과가 요구사항과 일치해야 한다.', () => {
  const baseUrl = '../index.html';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  const SELECTOR = {
    CAR_NAMES_INPUT: '#car-names-input',
    CAR_NAMES_SUBMIT: '#car-names-submit',
    RACING_COUNT_INPUT: '#racing-count-input',
    RACING_COUNT_SUBMIT: '#racing-count-submit',
  };

  it('5자를 초과하는 자동차 이름이 제출된 경우에 alert을 이용해 메시지를 보여준다.', () => {
    const alertStub = cy.stub();
    const invalidInput = 'ab,cde,fghijk';

    cy.on('window:alert', alertStub);

    cy.get(SELECTOR.CAR_NAMES_INPUT).type(invalidInput);

    cy.get(SELECTOR.CAR_NAMES_SUBMIT)
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it('5자를 초과하는 자동차 이름이 제출된 경우에 다시 입력할 수 있게 한다.', () => {
    const invalidInput = 'abcdef';

    cy.get(SELECTOR.CAR_NAMES_INPUT).type(invalidInput);

    cy.get(SELECTOR.CAR_NAMES_SUBMIT).click().type('{enter}');

    cy.get(SELECTOR.CAR_NAMES_INPUT).should('have.value', '');
  });

  it('공백으로만 이루어진 자동차 이름이 제출된 경우에 alert를 이용해 메시지를 보여준다', () => {
    const alertStub = cy.stub();
    const invalidInput = ' , , ';

    cy.on('window:alert', alertStub);

    cy.get(SELECTOR.CAR_NAMES_INPUT).type(invalidInput);

    cy.get(SELECTOR.CAR_NAMES_SUBMIT)
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it('공백으로만 이루어진 자동차 이름이 제출된 경우에 다시 입력할 수 있게 한다.', () => {
    const invalidInput = ' , , ';

    cy.get(SELECTOR.CAR_NAMES_INPUT).type(invalidInput);

    cy.get(SELECTOR.CAR_NAMES_SUBMIT).click().type('{enter}');

    cy.get(SELECTOR.CAR_NAMES_INPUT).should('have.value', '');
  });

  it('중복된 자동차 이름이 제출된 경우에 alert를 이용해 메시지를 보여준다', () => {
    const alertStub = cy.stub();
    const invalidInput = 'abc,abc,abcd';

    cy.on('window:alert', alertStub);

    cy.get(SELECTOR.CAR_NAMES_INPUT).type(invalidInput);

    cy.get(SELECTOR.CAR_NAMES_SUBMIT)
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it('중복된 자동차 이름이 제출된 경우 다시 입력할 수 있게 한다.', () => {
    const invalidInput = 'abc,abc,abcd';

    cy.get(SELECTOR.CAR_NAMES_INPUT).type(invalidInput);

    cy.get(SELECTOR.CAR_NAMES_SUBMIT).click().type('{enter}');

    cy.get(SELECTOR.CAR_NAMES_INPUT).should('have.value', '');
  });

  it('사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.', () => {
    const validCarNamesInput = 'apple,banan,carro';

    cy.get(SELECTOR.CAR_NAMES_INPUT).type(validCarNamesInput);

    cy.get(SELECTOR.CAR_NAMES_SUBMIT).click();

    cy.get(SELECTOR.RACING_COUNT_INPUT).should('exist');
    cy.get(SELECTOR.RACING_COUNT_SUBMIT).should('exist');
  });

  it('제출된 시도할 횟수가 양의 정수가 아닌 경우에 alert을 이용해 메시지를 보여준다.', () => {
    const alertStub = cy.stub();
    const invalidInput = 'e';
    const validCarNamesInput = 'apple,banan,carro';

    cy.on('window:alert', alertStub);

    cy.get(SELECTOR.CAR_NAMES_INPUT).type(validCarNamesInput);

    cy.get(SELECTOR.CAR_NAMES_SUBMIT).click();

    cy.get(SELECTOR.RACING_COUNT_INPUT).type(invalidInput);

    cy.get(SELECTOR.RACING_COUNT_SUBMIT)
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
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

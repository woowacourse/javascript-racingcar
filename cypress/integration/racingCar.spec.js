// - [ ] 자동차에 이름을 부여할 수 있다.
// - [ ] 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
// - [ ] 사용자가 잘못된 입력 값을 작성한 경우 alert을 이용해 메시지를 보여주고, 다시 입력할 수 있게 한다.
//    - [ ] 자동차 이름
//    - [ ] 시도할 횟수

// - [ ] 주어진 횟수 동안 n 대의 자동차는 전진 또는 멈출 수 있다.
// - [ ] 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
// - [ ] 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
// - [ ] 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.

describe('구현 결과가 요구사항과 일치해야 한다.', () => {
  const baseUrl = '../index.html';

  const SELECTOR = {
    CAR_NAMES_INPUT: '#car-names-input',
    CAR_NAMES_SUBMIT_BUTTON: '#car-names-submit',
    RACING_COUNT_INPUT: '#racing-count-input',
    RACING_COUNT_SUBMIT: '#racing-count-submit',
  };

  it('자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.', () => {
    cy.visit(baseUrl);

    const alertStub = cy.stub();
    const invalidInput = 'ab,cde,fghijk';

    cy.on('window:alert', alertStub);

    cy.get(SELECTOR.CAR_NAMES_INPUT).type(invalidInput);

    cy.get(SELECTOR.CAR_NAMES_SUBMIT_BUTTON)
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it('사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.', () => {
    cy.visit(baseUrl);

    const validCarNamesInput = 'apple,banan,carro';

    cy.get(SELECTOR.CAR_NAMES_INPUT).type(validCarNamesInput);

    cy.get(SELECTOR.CAR_NAMES_SUBMIT_BUTTON).click();

    cy.get(SELECTOR.RACING_COUNT_INPUT).should('exist');
    cy.get(SELECTOR.RACING_COUNT_SUBMIT).should('exist');
  });
});

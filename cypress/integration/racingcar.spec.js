import { SELECTOR } from '../../js/utils/constants.js';

describe('자동차 경주 게임', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
  });

  it('자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.', () => {
    const alertStub = cy.stub();
    cy.get(SELECTOR.CAR_NAMES_INPUT).type('easteee,west');
    cy.get(SELECTOR.CAR_NAMES_BUTTON).click();
    cy.on(SELECTOR.WINDOW_ALERT, alertStub);
  });

  it('자동차 이름이 빈칸이면 alert을 띄운다.', () => {
    const alertStub = cy.stub();
    cy.on(SELECTOR.WINDOW_ALERT, alertStub);

    cy.get(SELECTOR.CAR_NAMES_INPUT).type(',b,c');
    cy.get(SELECTOR.CAR_NAMES_BUTTON)
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it('시도할 횟수가 음수이면 alert을 띄운다.', () => {
    const alertStub = cy.stub();
    cy.on(SELECTOR.WINDOW_ALERT, alertStub);

    cy.get(SELECTOR.CAR_NAMES_INPUT).type('a,b,c');
    cy.get(SELECTOR.CAR_NAMES_BUTTON).click();
    cy.get(SELECTOR.CAR_RACING_COUNT_INPUT).type(-3);
    cy.get(SELECTOR.CAR_RACING_COUNT_BUTTON)
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it('사용자가 몇 번의 이동을 할 것인지를 정상적으로 입력하면 다시 시작하기 버튼이 보여야 한다.', () => {
    cy.get(SELECTOR.CAR_NAMES_INPUT).type('east,west');
    cy.get(SELECTOR.CAR_NAMES_BUTTON).click();
    cy.get(SELECTOR.CAR_RACING_COUNT_INPUT).type(5);
    cy.get(SELECTOR.CAR_RACING_COUNT_BUTTON).click();
    cy.contains('다시 시작하기').should('be.visible');
  });

  it('자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.', () => {
    cy.get(SELECTOR.CAR_NAMES_INPUT).type('east,west');
    cy.get(SELECTOR.CAR_NAMES_BUTTON).click();
    cy.get(SELECTOR.CAR_RACING_COUNT_INPUT).type(5);
    cy.get(SELECTOR.CAR_RACING_COUNT_BUTTON).click();
    cy.get(SELECTOR.CAR_NAMES).should('have.text', 'eastwest');
  });

  it('주어진 횟수 동안 n 대의 자동차는 전진 또는 멈출 수 있다.', () => {
    cy.get(SELECTOR.CAR_NAMES_INPUT).type('east,west,south,north');
    cy.get(SELECTOR.CAR_NAMES_BUTTON).click();
    cy.get(SELECTOR.CAR_RACING_COUNT_INPUT).type(40);
    cy.get(SELECTOR.CAR_RACING_COUNT_BUTTON).click();
    cy.get(SELECTOR.CAR_PROGRESS).contains('⬇️️');
  });

  it('최종 우승자를 출력할 수 있다.', () => {
    cy.get(SELECTOR.CAR_NAMES_INPUT).type('east,west,south,north');
    cy.get(SELECTOR.CAR_NAMES_BUTTON).click();
    cy.get(SELECTOR.CAR_RACING_COUNT_INPUT).type(5);
    cy.get(SELECTOR.CAR_RACING_COUNT_BUTTON).click();
    cy.get(SELECTOR.CAR_RACING_WINNER).contains('최종 우승자');
  });
});

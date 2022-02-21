import { SELECTOR, ERROR_MESSAGE } from '../../js/utils/constants.js';

describe('예외 처리 테스트', () => {
  before(() => {
    cy.visit('http://localhost:5500/');
  });

  it('자동차 이름은 1자 이상 입력해야 한다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    cy.get(SELECTOR.CAR_NAMES_INPUT).type(',west,north');
    cy.get(SELECTOR.CAR_NAMES_SUBMIT_BUTTON)
      .click()
      .then(() => {
        expect(alertStub).to.be.calledWith(ERROR_MESSAGE.INVALID_NAME_LENGTH);
      });
  });

  it('자동차 이름은 5자 이하로 입력해야 한다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    cy.get(SELECTOR.CAR_NAMES_INPUT).clear();
    cy.get(SELECTOR.CAR_NAMES_INPUT).type('east,west,northh');
    cy.get(SELECTOR.CAR_NAMES_SUBMIT_BUTTON)
      .click()
      .then(() => {
        expect(alertStub).to.be.calledWith(ERROR_MESSAGE.INVALID_NAME_LENGTH);
      });
  });

  it('시도할 횟수로 음수를 입력할 수 없다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    cy.get(SELECTOR.CAR_NAMES_INPUT).clear();
    cy.get(SELECTOR.CAR_NAMES_INPUT).type('east,west,north');
    cy.get(SELECTOR.CAR_NAMES_SUBMIT_BUTTON).click();

    cy.get(SELECTOR.CAR_RACING_COUNT_INPUT).type(-3);
    cy.get(SELECTOR.CAR_RACING_COUNT_SUBMIT_BUTTON)
      .click()
      .then(() => {
        expect(alertStub).to.be.calledWith(ERROR_MESSAGE.INVALID_RACING_COUNT);
      });
  });
});

describe('기능 테스트', () => {
  before(() => {
    cy.visit('http://localhost:5500/');
  });

  it('자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.', () => {
    cy.get(SELECTOR.CAR_NAMES_INPUT).type('east,west');
    cy.get(SELECTOR.CAR_NAMES_SUBMIT_BUTTON).click();
    cy.get(SELECTOR.CAR_RACING_COUNT_INPUT).type(3);
    cy.get(SELECTOR.CAR_RACING_COUNT_SUBMIT_BUTTON).click();
    cy.get(SELECTOR.CAR_NAMES).should('have.text', 'eastwest');
  });

  it('턴이 진행되는 사이에 로딩 애니메이션이 표시된다.', () => {
    cy.get(SELECTOR.LOADER).should('be.visible');
  });

  it('주어진 횟수 동안 n 대의 자동차는 전진 또는 멈출 수 있다.', () => {
    cy.get(SELECTOR.CAR_PROGRESS).contains('⬇️️');
  });

  it('게임이 종료되면 이름을 최종 우승자 이름을 보여준다.', () => {
    cy.get(SELECTOR.CAR_RACING_WINNER).contains('최종 우승자');
  });

  it('게임 종료 2초 후 축하 메시지를 보여준다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    cy.wait(2000).then(() => {
      expect(alertStub).to.be.called;
    });
  });
});

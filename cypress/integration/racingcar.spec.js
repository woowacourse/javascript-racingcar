/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import { ID, CLASS, ERROR_MESSAGES } from '../../src/constants/index';

const VISIT_URL = 'http://localhost:5500/';
const VALID_CAR_NAMES = 'east, west, south, north, all';
const VALID_RACING_COUNT = 10;
const GAME_WAITING_TIME = 10000;
const CONGRATUATION_WAITING_TIME = 2000;

Cypress.Commands.add('submitCarName', () => {
  cy.get(`#${ID.CAR_NAMES_INPUT}`).type(VALID_CAR_NAMES);
  cy.get(`.${CLASS.INPUT_BTN}`).eq(0).click();
});

Cypress.Commands.add('submitRacingCount', () => {
  cy.get(`#${ID.RACING_COUNT_INPUT}`).type(VALID_RACING_COUNT);
  cy.get(`.${CLASS.INPUT_BTN}`).eq(1).click();
});

describe('자동차 이름 입력 기능 테스트', () => {
  beforeEach(() => {
    cy.visit(VISIT_URL);
  });

  it('자동차 이름을 올바르게 입력하면 시도할 횟수 입력 폼을 확인할 수 있어야 한다.', () => {
    cy.get(`#${ID.CAR_NAMES_INPUT}`).type('east, west, south, north, all');

    const spy = cy.spy(window, 'alert');

    cy.get(`.${CLASS.INPUT_BTN}`)
      .eq(0)
      .click()
      .wait(1000)
      .then(() => {
        expect(spy).to.not.be.called;
      });

    cy.get(`#${ID.RACING_COUNT_FORM}`).should('be.visible');
  });

  it('입력한 자동차 이름 중 공백이 포함되어 있으면 에러 메시지를 확인할 수 있어야 한다.', () => {
    cy.get(`#${ID.CAR_NAMES_INPUT}`).type('east, , south, north, all');

    const stub = cy.stub();

    cy.on('window:alert', stub);
    cy.get(`.${CLASS.INPUT_BTN}`)
      .eq(0)
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith(ERROR_MESSAGES.EMPTY_CAR_NAME);
      });
  });

  it('입력한 자동차 이름 중 5자가 초과된 이름이 있으면 에러 메시지를 확인할 수 있어야 한다.', () => {
    cy.get(`#${ID.CAR_NAMES_INPUT}`).type('woowacourse, west, south, north, all');

    const stub = cy.stub();

    cy.on('window:alert', stub);
    cy.get(`.${CLASS.INPUT_BTN}`)
      .eq(0)
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith(ERROR_MESSAGES.EXCEED_CAR_NAME_LENGTH);
      });
  });
});

describe('시도할 횟수 입력 기능 테스트', () => {
  const submitCarName = () => {
    cy.get(`#${ID.CAR_NAMES_INPUT}`).type('east, west, south, north, all');
    cy.get(`.${CLASS.INPUT_BTN}`).eq(0).click();
  };

  beforeEach(() => {
    cy.visit(VISIT_URL);
    submitCarName();
  });

  it('시도할 횟수를 올바르게 입력하면 입력한 자동차의 목록을 확인할 수 있어야 한다.', () => {
    cy.get(`#${ID.RACING_COUNT_INPUT}`).type(10);

    const spy = cy.spy(window, 'alert');

    cy.get(`.${CLASS.INPUT_BTN}`)
      .eq(1)
      .click()
      .wait(1000)
      .then(() => {
        expect(spy).to.not.be.called;
      });

    cy.get(`.${CLASS.RACING_CAR_NAME}`).eq(0).should('have.text', 'east');
    cy.get(`.${CLASS.RACING_CAR_NAME}`).eq(1).should('have.text', 'west');
    cy.get(`.${CLASS.RACING_CAR_NAME}`).eq(2).should('have.text', 'south');
    cy.get(`.${CLASS.RACING_CAR_NAME}`).eq(3).should('have.text', 'north');
    cy.get(`.${CLASS.RACING_CAR_NAME}`).eq(4).should('have.text', 'all');
  });

  it('시도할 횟수로 공백을 입력하면 에러 메시지를 확인할 수 있어야 한다.', () => {
    const stub = cy.stub();

    cy.on('window:alert', stub);
    cy.get(`.${CLASS.INPUT_BTN}`)
      .eq(1)
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith(ERROR_MESSAGES.BLANK_RACING_COUNT);
      });
  });

  it('시도할 횟수로 자연수가 아닌 수를 입력하면 에러 메시지를 확인할 수 있어야 한다.', () => {
    cy.get(`#${ID.RACING_COUNT_INPUT}`).type(-1);
    const stub = cy.stub();

    cy.on('window:alert', stub);
    cy.get(`.${CLASS.INPUT_BTN}`)
      .eq(1)
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith(ERROR_MESSAGES.NOT_NATURAL_NUMBER);
      });
  });
});

describe('게임 진행 테스트', () => {
  beforeEach(() => {
    cy.visit(VISIT_URL);
    cy.submitCarName();
    cy.submitRacingCount();
  });

  it('자동차 이름과 시도할 횟수를 올바르게 입력한 후 로딩 애니메이션을 확인할 수 있으며 레이싱이 종료된 후 로딩 애니메이션은 사라져야 한다.', () => {
    cy.get(`.${CLASS.SPINNER}`).eq(0).should('exist');
    cy.get(`.${CLASS.SPINNER}`).eq(1).should('exist');
    cy.get(`.${CLASS.SPINNER}`).eq(2).should('exist');
    cy.get(`.${CLASS.SPINNER}`).eq(3).should('exist');
    cy.get(`.${CLASS.SPINNER}`).eq(4).should('exist');

    cy.wait(GAME_WAITING_TIME);

    cy.get(`.${CLASS.SPINNER}`).should('not.exist');
  });

  it('최종 우승자가 출력되고 2초 후에 축하 메시지를 확인할 수 있어야 한다.', () => {
    const stub = cy.stub();

    cy.on('window:alert', stub);

    cy.wait(GAME_WAITING_TIME);

    cy.get(`#${ID.FINAL_WINNER_RESULT}`).wait(CONGRATUATION_WAITING_TIME);

    expect(stub).to.be.calledWith('축하메시지~~~');
  });
});

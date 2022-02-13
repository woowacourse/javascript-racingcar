/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import { ID, CLASS, ERROR_MESSAGES } from '../../src/constants/index';

const VISIT_URL = 'http://localhost:5500/';

describe('자동차 이름 입력 기능 테스트', () => {
  beforeEach(() => {
    cy.visit(VISIT_URL);
  });

  it('자동차 이름을 올바르게 입력한다.', () => {
    cy.get(`#${ID.CAR_NAMES_INPUT}`).type('east, west, south, north, all');

    const spy = cy.spy(window, 'alert');

    cy.get(`.${CLASS.INPUT_BTN}`)
      .eq(0)
      .click()
      .wait(1000)
      .then(() => {
        expect(spy).to.not.be.called;
      });

    cy.get(`#${ID.RACING_COUNT_FORM}`).should('have.css', 'display', 'block');
  });

  it('자동차 이름은 최소 1개 이상 입력해야 한다.', () => {
    const stub = cy.stub();

    cy.on('window:alert', stub);
    cy.get(`.${CLASS.INPUT_BTN}`)
      .eq(0)
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith(ERROR_MESSAGES.EMPTY_CAR_NAME);
      });
  });

  it('자동차 이름은 5자 이하만 가능하다.', () => {
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

  it('자동차 이름은 공백을 입력할 수 없다.', () => {
    cy.get(`#${ID.CAR_NAMES_INPUT}`).type('east, , south, north, all');

    const stub = cy.stub();

    cy.on('window:alert', stub);
    cy.get(`.${CLASS.INPUT_BTN}`)
      .eq(0)
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith(ERROR_MESSAGES.BLANK_CAR_NAME);
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

  it('시도할 횟수를 올바르게 입력한다.', () => {
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

  it('시도할 횟수는 공백을 입력할 수 없다.', () => {
    const stub = cy.stub();

    cy.on('window:alert', stub);
    cy.get(`.${CLASS.INPUT_BTN}`)
      .eq(1)
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith(ERROR_MESSAGES.BLANK_RACING_COUNT);
      });
  });

  it('시도할 횟수는 자연수만 입력한다.', () => {
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

/* eslint-disable */

import { SELECTORS } from '../src/js/constants/constants.js';

describe("구현 결과가 요구사항과 일치해야 한다.", () => {
  beforeEach(() => {
    cy.visit("index.html");
  });

  it('입력된 자동차 이름이 5자 초과이면, alert 메세지를 띄운다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get(SELECTORS.CAR_NAMES_INPUT).type('ab,c,zdffddd');
    cy.get(SELECTORS.CAR_NAMES_BUTTON)
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it('입력된 자동차 이름이 공백이면, alert 메세지를 띄운다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get(SELECTORS.CAR_NAMES_INPUT).type(' ');
    cy.get(SELECTORS.CAR_NAMES_BUTTON)
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it('입력된 횟수가 1보다 작으면, alert 메세지를 띄운다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    // 자동차 이름을 입력해야 횟수창이 보이므로 이름을 먼저 추가한다
    cy.get(SELECTORS.CAR_NAMES_INPUT).type('a,b,c');
    cy.get(SELECTORS.CAR_NAMES_BUTTON).click();
    cy.get(SELECTORS.RACING_COUNT_INPUT).type(0);
    cy.get(SELECTORS.RACING_COUNT_BUTTON)
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

});

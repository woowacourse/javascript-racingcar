/// <reference types="Cypress" />

import { ERROR_MESSAGE } from '../../src/js/util/message.js';

describe('Racing Car 게임 : INPUT 검증 테스트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
  });

  it('car-name-input에 아무것도 입력하지 않고, 확인 버튼을 클릭한 경우, 에러 메시지를 alert 한다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get('[data-test=car-name-button]')
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(
          ERROR_MESSAGE.EMPTY_CAR_NAME_INPUT,
        );
      });
  });

  it('car-name-input에 1대의 자동차 이름만 입력한 후, 확인 버튼을 클릭한 경우 에러 메시지를 alert 한다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get('[data-test=car-name-input]').type('자동차1');
    cy.get('[data-test=car-name-button]')
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(
          ERROR_MESSAGE.ONE_CAR_NAME_INPUT,
        );
      });
  });

  it('car-name-input에 콤마(,)로 구분된 자동차 이름 중 빈 값을 입력한 후, 확인 버튼을 클릭한 경우 에러 메시지를 alert 한다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get('[data-test=car-name-input]').type('자동차1, ,자동차3');
    cy.get('[data-test=car-name-button]')
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(
          ERROR_MESSAGE.EMPTY_STRING_CAR_NAME_INPUT,
        );
      });
  });

  it('car-name-input에 중복된 자동차 이름을 입력한 후, 확인 버튼을 클릭한 경우 에러 메시지를 alert 한다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get('[data-test=car-name-input]').type('자동차1, 자동차1, 자동차2');
    cy.get('[data-test=car-name-button]')
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(
          ERROR_MESSAGE.DUPLICATED_CAR_NAME_INPUT,
        );
      });
  });

  it('car-name-input에 자동차 이름 중 5자를 초과하도록 입력한 후, 확인 버튼을 클릭한 경우 에러 메시지를 alert 한다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get('[data-test=car-name-input]').type('자동차자동차, 자동차');
    cy.get('[data-test=car-name-button]')
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(
          ERROR_MESSAGE.OVER_MAX_LENGTH_CAR_NAME_INPUT,
        );
      });
  });

  it('car-name-input에 자동차 이름을 정상적으로 입력한 후, 확인 버튼을 클릭한 경우 입력과 버튼 태그는 비활성화 된다.', () => {
    cy.get('[data-test=car-name-input]').type(
      '자동차1, 자동차2, 자동차3, 자동차4',
    );
    cy.get('[data-test=car-name-button]').click();
    cy.get('[data-test=car-name-input]').should('be.disabled');
    cy.get('[data-test=car-name-button]').should('be.disabled');
  });

  it('try-count-input에 자연수가 아닌 수(0, 음수, 양/음의 소수)를 입력한 후, 확인 버튼을 클릭한 경우 에러 메시지를 alert한다.', () => {
    const tryCountTestCases = [0, -1, 1.1, -1.1, 'a'];
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    tryCountTestCases.forEach(testCase => {
      cy.get('[data-test=try-count-input]').type(testCase);
      cy.get('[data-test=try-count-button]')
        .click()
        .then(() => {
          expect(alertStub.getCall(0)).to.be.calledWith(
            ERROR_MESSAGE.NOT_NATURAL_NUMBER,
          );
        });
    });
  });

  it('try-count-input에 자연수를 입력한 후, 확인 버튼을 클릭한 경우 에러 메시지를 alert한다.', () => {
    cy.get('[data-test=try-count-input]').type('4');
    cy.get('[data-test=try-count-button]').click();
    cy.get('[data-test=try-count-input]').should('be.disabled');
    cy.get('[data-test=try-count-button]').should('be.disabled');
  });
});

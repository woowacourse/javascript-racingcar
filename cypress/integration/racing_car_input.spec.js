import { ERROR_MESSAGE } from '../../src/js/util/errorMessage.js';

describe('Racing Car 게임', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
  });

  it('자동차 이름을 입력하지 않고 확인 버튼을 클릭한 경우 alert을 띄움', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get('[data-test=car-name-button]')
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(ERROR_MESSAGE.EMPTY_CAR_NAME_INPUT);
      });
  });

  it('자동차 이름을 1개만 입력한 경우 alert을 띄움', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get('[data-test=car-name-input]').type('자동차1');
    cy.get('[data-test=car-name-button]')
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(ERROR_MESSAGE.ONE_CAR_NAME_INPUT);
      });
  });

  it('입력된 자동차 이름 중 빈 문자가 있는 경우 alert을 띄움', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get('[data-test=car-name-input]').type('자동차1, ,자동차3');
    cy.get('[data-test=car-name-button]')
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(ERROR_MESSAGE.EMPTY_STRING_CAR_NAME_INPUT);
      });
  });

  it('입력된 자동차 이름 중 중복된 이름이 있는 경우 alert을 띄움', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get('[data-test=car-name-input]').type('자동차1, 자동차1, 자동차2');
    cy.get('[data-test=car-name-button]')
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(ERROR_MESSAGE.DUPLICATED_CAR_NAME_INPUT);
      });
  });

  it('입력된 자동차 이름 중 5자를 넘어가는 이름이 존재하는 경우 alert을 띄움', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get('[data-test=car-name-input]').type('자동차자동차, 자동차');
    cy.get('[data-test=car-name-button]')
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(ERROR_MESSAGE.OVER_MAX_LENGTH_CAR_NAME_INPUT);
      });
  });

  it('자동차 이름이 정상적으로 입력된 경우 입력창을 비활성화 함', () => {
    cy.get('[data-test=car-name-input]').type('자동차1, 자동차2, 자동차3, 자동차4');
    cy.get('[data-test=car-name-button]').click();
    cy.get('[data-test=car-name-input]').should('be.disabled');
    cy.get('[data-test=car-name-button]').should('be.disabled');
  });

  it('시도 횟수를 입력하지 않고 확인버튼을 클린한 경우 alert을 띄움', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get('[data-test=try-count-button]')
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(ERROR_MESSAGE.NOT_NATURAL_NUMBER);
      });
  });

  it('입력된 시도 횟수가 자연수가 아닌 경우 alert을 띄움', () => {
    const tryCountTestCases = [0, -1, 1.1, -1.1, 'a'];
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    tryCountTestCases.forEach((testCase) => {
      cy.get('[data-test=try-count-input]').type(testCase);
      cy.get('[data-test=try-count-button]')
        .click()
        .then(() => {
          expect(alertStub.getCall(0)).to.be.calledWith(ERROR_MESSAGE.NOT_NATURAL_NUMBER);
        });
    });
  });

  it('입력된 시도 횟수가 정상적으로 입력된 경우 입력창을 비활성화 함', () => {
    cy.get('[data-test=try-count-input]').type('4').should('have.value', '4');
    cy.get('[data-test=try-count-button]').click();
    cy.get('[data-test=try-count-input]').should('be.disabled');
    cy.get('[data-test=try-count-button]').should('be.disabled');
  });
});

import { ERROR_MESSAGE } from '../../src/js/util/errorMessage.js';

describe('Racing Car 게임', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
  });

  it('아무것도 입력하지 않고 확인 버튼을 클릭한 경우', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get('[data-test=car-name-button]')
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(ERROR_MESSAGE.EMPTY_CAR_NAME_INPUT);
      });
  });

  it('자동차 이름을 1개만 입력한 경우', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get('[data-test=car-name-input]').type('자동차1');
    cy.get('[data-test=car-name-button]')
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(ERROR_MESSAGE.ONE_CAR_NAME_INPUT);
      });
  });

  it('입력된 이름 중 빈 문자가 있는 경우', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get('[data-test=car-name-input]').type('자동차1, ,자동차3');
    cy.get('[data-test=car-name-button]')
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(ERROR_MESSAGE.EMPTY_STRING_CAR_NAME_INPUT);
      });
  });

  it('입력된 자동차 이름 중 같은 이름이 2대 이상인 경우', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get('[data-test=car-name-input]').type('자동차1, 자동차1, 자동차2');
    cy.get('[data-test=car-name-button]')
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(ERROR_MESSAGE.DUPLICATED_CAR_NAME_INPUT);
      });
  });

  it('입력된 각 자동차 이름 중 5자를 넘어가는 이름이 존재하는 경우', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get('[data-test=car-name-input]').type('자동차자동차, 자동차');
    cy.get('[data-test=car-name-button]')
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(ERROR_MESSAGE.OVER_MAX_LENGTH_CAR_NAME_INPUT);
      });
  });
});

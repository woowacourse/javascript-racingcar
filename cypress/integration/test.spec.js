import { ERROR_MESSAGES } from '../../src/js/constants.js';
import testid from '../support/utils/test-id.js';

describe('입력된 자동차 이름에 대한 유효성 검사가 실패하는 경우', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });

  const alertTestOnSubmitCarNames = (invalidCarNames, errorMessage) => {
    cy.formSubmit('car-names-input', 'car-names-submit-button', invalidCarNames, (txt) => {
      expect(txt).to.contains(errorMessage);
    });
  };

  it('자동차 이름이 비어있으면, alert메세지를 띄운다', () => {
    const invalidCarNames = '';
    alertTestOnSubmitCarNames(invalidCarNames, ERROR_MESSAGES.EMPTY_CAR_NAME);
  });

  it('입력된 자동차 이름이 5자를 초과하면, alert 메세지를 띄운다.', () => {
    const invalidCarNames = 'aaaaaa,bbb';
    alertTestOnSubmitCarNames(invalidCarNames, ERROR_MESSAGES.BEYOND_MAX_CAR_NAME_LENGTH);
  });

  it('입력된 자동차 이름들 중 중복된 이름이 있는 경우, alert 메세지를 띄운다.', () => {
    const invalidCarNames = 'aa,bb,aa';
    alertTestOnSubmitCarNames(invalidCarNames, ERROR_MESSAGES.DUPLICATED_CAR_NAME);
  });
});

describe('유효한 자동차 이름을 입력한 경우', () => {
  it('시도 횟수를 입력하는 fieldset을 보여준다', () => {
    const validCarNames = 'aa,bb,cc,dd';
    cy.formSubmit('car-names-input', 'car-names-submit-button', validCarNames);
    cy.get(testid`racing-count-fieldset`).should('be.visible');
  });
});

/* eslint-disable func-names */
import {
  CAR_NAMES_INPUT_PLACEHOLDER,
  CELEBRATE_MESSAGE,
  ERROR_MESSAGES,
  RACING_COUNT_INPUT_PLACEHOLDER,
} from '../../src/js/constants.js';
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
    cy.visit('/index.html');
    const validCarNames = 'aa,bb,cc,dd';
    cy.formSubmit('car-names-input', 'car-names-submit-button', validCarNames);
    cy.get(testid`racing-count-fieldset`).should('be.visible');
  });
});

describe('입력된 시도 횟수에 대한 유효성 검사가 실패하는 경우', () => {
  beforeEach(() => {
    cy.visit('/index.html');
    // 먼저 자동차 이름을 입력해야 시도 횟수를 입력할 수 있다
    const validCarNames = 'aa,bb,cc,dd,ee';
    cy.formSubmit('car-names-input', 'car-names-submit-button', validCarNames);
  });

  const alertTestOnSubmitRaciingCount = (invalidCarNames, errorMessage) => {
    cy.formSubmit('racing-count-input', 'racing-count-submit-button', invalidCarNames, (txt) => {
      expect(txt).to.contains(errorMessage);
    });
  };

  it('시도 횟수가 비어있으면, alert메세지를 띄운다', () => {
    const invalidRacingCount = '';
    alertTestOnSubmitRaciingCount(invalidRacingCount, ERROR_MESSAGES.EMPTY_RACING_COUNT);
  });

  it('시도 횟수에 숫자가 아닌 문자가 들어가면, alert메세지를 띄운다', () => {
    const invalidRacingCount = 'a12ab';
    alertTestOnSubmitRaciingCount(invalidRacingCount, ERROR_MESSAGES.TYPE_MISMATCH_OF_RACING_COUNT);
  });

  it('시도 횟수가 100회를 초과하면, alert 메세지를 띄운다.', () => {
    const invalidRacingCount = 101;
    alertTestOnSubmitRaciingCount(invalidRacingCount, ERROR_MESSAGES.BEYOND_MAX_RACING_COUNT);
  });

  it('시도 횟수가 1미만이면, alert 메세지를 띄운다.', () => {
    const invalidCarNames = 0;
    alertTestOnSubmitRaciingCount(invalidCarNames, ERROR_MESSAGES.FALL_SHORT_OF_MIN_RACING_COUNT);
  });
});

describe('스크린에서 경기가 진행중인 경우', () => {
  beforeEach(() => {
    cy.visit('/index.html');
    cy.startRacing('aa,bb,cc,dd', 10);
  });

  // 주의: this를 사용하기 위해서는 arrow function을 사용하면 안된다.
  it('자동차가 달릴 lane이 자동차 갯수만큼 그려진다', function () {
    cy.get(testid`car-lane`).should('have.length', this.carNameList.length);
  });

  it('자동차 이름을 입력한 순서대로 lane이 그려진다', function () {
    cy.get(testid`car-lane`).each(($carLane, i) => {
      cy.wrap($carLane)
        .find(testid`car-name`)
        .should('have.text', this.carNameList[i]);
    });
  });
});

describe('경기가 끝난 경우', () => {
  beforeEach(() => {
    cy.clock();
    cy.visit('/index.html');
    cy.startRacing('aa,bb,cc,dd', 10);
    cy.tick(10 * 1000); // 10초 기다린다
  });

  it('이동거리가 가장 긴 자동차가 최종 우승자가 된다', function () {
    const cars = [];
    cy.get(testid`car-lane`)
      .each(($carLane, i) => {
        const $distance = $carLane.find(testid`distance`);
        const distance = parseInt($distance.attr('data-current-distance'), 10);
        cars.push({ name: this.carNameList[i], distance });
      })
      .then(() => {
        const maxDistance = cars.reduce((acc, { distance }) => Math.max(acc, distance), 0);
        const winners = cars
          .filter(({ distance }) => distance === maxDistance)
          .map(({ name }) => name)
          .join(', ')
          .trim();
        cy.get(testid`winners`).should('have.text', winners);
      });
  });

  it('경기가 끝나고 2초후 축하 메세지를 띄운다', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.tick(2 * 1000).then(() => {
      expect(alertStub).to.be.calledWith(CELEBRATE_MESSAGE);
    });
  });

  it('다시 시작하기 버튼을 누르면 모든 상태가 초기화된다', () => {
    cy.tick(2 * 1000).then(() => {
      cy.get(testid`restart-btn`).click();
      cy.get(testid`car-names-input`).should('have.value', '');
      cy.get(testid`car-names-input`).should('have.attr', 'placeholder', CAR_NAMES_INPUT_PLACEHOLDER);
      cy.get(testid`racing-count-input`).should('have.value', '');
      cy.get(testid`racing-count-input`).should('have.attr', 'placeholder', RACING_COUNT_INPUT_PLACEHOLDER);
      cy.get(testid`racing-screen`).should('not.be.visible');
      cy.get(testid`racing-result`).should('not.be.visible');
    });
  });
});

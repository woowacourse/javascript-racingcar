/* eslint-disable func-names */
import {
  CAR_MOVE_DELAY,
  CELEBRATE_MESSAGE,
  CELEBRATE_MESSAGE_SHOW_DELAY,
  ERROR_MESSAGES,
  SUBMITTED_CLASS_NAME,
} from '../../src/js/constants.js';
import { TEST_IDS, DEFAULT_CAR_NAMES, DEFAULT_RACING_COUNT } from '../support/constants.js';
import testid from '../support/utils/test-id.js';

describe('입력된 자동차 이름에 대한 유효성 검사가 실패하는 경우', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });

  const alertTestOnSubmitCarNames = (invalidCarNames, errorMessage) => {
    cy.formSubmit(TEST_IDS.CAR_NAMES_INPUT, TEST_IDS.CAR_NAMES_SUBMIT_BUTTON, invalidCarNames, (txt) => {
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

  it('자동차 이름을 입력하는 필드의 배경색을 원래대로(하얀색) 돌려놔야한다', () => {
    const invalidCarNames = 'aaaaaaa';
    cy.formSubmit(TEST_IDS.CAR_NAMES_INPUT, TEST_IDS.CAR_NAMES_SUBMIT_BUTTON, invalidCarNames);
    cy.get(testid(TEST_IDS.CAR_NAMES_INPUT)).should('not.have.class', SUBMITTED_CLASS_NAME);
  });
});

describe('유효한 자동차 이름을 입력한 경우', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });

  it('한글자만 입력해도 문제없다', () => {
    const validCarNames = 'a';
    cy.formSubmit(TEST_IDS.CAR_NAMES_INPUT, TEST_IDS.CAR_NAMES_SUBMIT_BUTTON, validCarNames);
    cy.get(testid(TEST_IDS.RACING_COUNT_FIELDSET)).should('be.visible');
  });

  it('자동차 이름에 공백이 껴있어도 문제없다', () => {
    const validCarNames = 'a a, bb, c  d';
    cy.formSubmit(TEST_IDS.CAR_NAMES_INPUT, TEST_IDS.CAR_NAMES_SUBMIT_BUTTON, validCarNames);
    cy.get(testid(TEST_IDS.RACING_COUNT_FIELDSET)).should('be.visible');
  });

  it('자동차 이름을 입력하는 필드의 배경색이 어두워야한다', () => {
    cy.formSubmit(TEST_IDS.CAR_NAMES_INPUT, TEST_IDS.CAR_NAMES_SUBMIT_BUTTON, DEFAULT_CAR_NAMES);
    cy.get(testid(TEST_IDS.CAR_NAMES_INPUT)).should('have.class', SUBMITTED_CLASS_NAME);
  });
});

describe('입력된 시도 횟수에 대한 유효성 검사가 실패하는 경우', () => {
  beforeEach(() => {
    cy.visit('/index.html');
    // 먼저 자동차 이름을 입력해야 시도 횟수를 입력할 수 있다
    const validCarNames = 'aa,bb,cc,dd,ee';
    cy.formSubmit(TEST_IDS.CAR_NAMES_INPUT, TEST_IDS.CAR_NAMES_SUBMIT_BUTTON, validCarNames);
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

  it('시도 횟수를 입력하는 필드의 배경색을 원래대로(하얀색) 돌려놔야한다', () => {
    const invalidRacingCount = 0;
    cy.formSubmit(TEST_IDS.RACING_COUNT_INPUT, TEST_IDS.RACING_COUNT_SUBMIT_BUTTON, invalidRacingCount);
    cy.get(testid(TEST_IDS.RACING_COUNT_INPUT)).should('not.have.class', SUBMITTED_CLASS_NAME);
  });
});

describe('유효한 시도횟수를 입력한 경우', () => {
  beforeEach(() => {
    cy.visit('/index.html');
    // 먼저 자동차 이름을 입력해야 시도 횟수를 입력할 수 있다
    const validCarNames = 'aa,bb,cc,dd,ee';
    cy.formSubmit(TEST_IDS.CAR_NAMES_INPUT, TEST_IDS.CAR_NAMES_SUBMIT_BUTTON, validCarNames);
  });

  it('경주 스크린이 보여야한다', () => {
    const validRacingCount = 10;
    cy.formSubmit('racing-count-input', 'racing-count-submit-button', validRacingCount);
    cy.get(testid(TEST_IDS.RACING_SCREEN)).should('be.visible');
  });

  it('시도횟수를 입력하는 필드의 배경색이 어두워야한다', () => {
    cy.formSubmit(TEST_IDS.RACING_COUNT_INPUT, TEST_IDS.RACING_COUNT_SUBMIT_BUTTON, DEFAULT_RACING_COUNT);
    cy.get(testid(TEST_IDS.RACING_COUNT_INPUT)).should('have.class', SUBMITTED_CLASS_NAME);
  });
});

describe('스크린에서 경기가 진행중인 경우', () => {
  beforeEach(() => {
    cy.clock();
    cy.visit('/index.html');
    cy.startRacing(DEFAULT_CAR_NAMES, DEFAULT_RACING_COUNT);
  });

  // 주의: this를 사용하기 위해서는 arrow function을 사용하면 안된다.
  it('자동차가 달릴 lane이 자동차 갯수만큼 그려진다', function () {
    cy.get(testid(TEST_IDS.CAR_LANE)).should('have.length', this.carNameList.length);
  });

  it('자동차 이름을 입력한 순서대로 lane이 그려진다', function () {
    cy.get(testid(TEST_IDS.CAR_LANE)).each(($carLane, i) => {
      cy.wrap($carLane).find(testid(TEST_IDS.CAR_NAME)).should('have.text', this.carNameList[i]);
    });
  });

  it('자동차의 이동거리가 화면에 표시되야한다', function () {
    for (let i = 0; i < DEFAULT_RACING_COUNT; i += 1) {
      cy.tick(CAR_MOVE_DELAY);
      cy.get(testid(TEST_IDS.CAR_LANE)).each(($carLane) => {
        const $distance = $carLane.find(testid(TEST_IDS.DISTANCE));
        const distance = parseInt($distance.attr('data-current-distance'), 10);
        cy.wrap($distance.children()).should('have.length', distance);
      });
    }
  });

  it('자동차가 이동하는 사이사이에 스피너가 표시되어야한다', function () {
    for (let i = 0; i < DEFAULT_RACING_COUNT; i += 1) {
      cy.tick(500);
      cy.get(testid(TEST_IDS.CAR_LANE)).each(($carLane) => {
        const $spinner = $carLane.find(testid(TEST_IDS.SPINNER));
        cy.wrap($spinner).should('be.visible');
      });
    }
  });
});

describe('경기가 끝난 경우', () => {
  beforeEach(() => {
    cy.clock();
    cy.visit('/index.html');
    cy.startRacing(DEFAULT_CAR_NAMES, DEFAULT_RACING_COUNT);
    cy.tick(DEFAULT_RACING_COUNT * 1000); // 10초 기다린다
  });

  it('이동거리가 가장 긴 자동차가 최종 우승자가 된다', function () {
    const { CAR_LANE, DISTANCE, WINNERS } = TEST_IDS;
    const cars = [];
    cy.get(testid(CAR_LANE))
      .each(($carLane, i) => {
        const $distance = $carLane.find(testid(DISTANCE));
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
        cy.get(testid(WINNERS)).should('have.text', winners);
      });
  });

  it('경기가 끝나고 2초후 축하 메세지를 띄운다', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.tick(CELEBRATE_MESSAGE_SHOW_DELAY).then(() => {
      expect(alertStub).to.be.calledWith(CELEBRATE_MESSAGE);
    });
  });

  it('다시 시작하기 버튼을 누르면 모든 상태가 초기화된다', () => {
    const { RESTART_BUTTON, CAR_NAMES_INPUT, RACING_COUNT_INPUT, RACING_SCREEN, RACING_RESULT } = TEST_IDS;
    cy.tick(CELEBRATE_MESSAGE_SHOW_DELAY).then(() => {
      cy.get(testid(RESTART_BUTTON)).click();
      cy.get(testid(CAR_NAMES_INPUT)).should('have.value', '');
      cy.get(testid(CAR_NAMES_INPUT)).should('not.have.class', SUBMITTED_CLASS_NAME);
      cy.get(testid(RACING_COUNT_INPUT)).should('have.value', '');
      cy.get(testid(RACING_COUNT_INPUT)).should('not.have.value', SUBMITTED_CLASS_NAME);
      cy.get(testid(RACING_SCREEN)).should('not.be.visible');
      cy.get(testid(RACING_RESULT)).should('not.be.visible');
    });
  });
});

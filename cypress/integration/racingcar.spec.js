import { ID } from '../../src/constants.js';
import { convertToId } from '../../src/utils/index.js';

const milliseconds = 1000;
const racingCount = 10;
const bufferTime = 1000;
const names = ['june', 'poco', 'park'];

describe('자동차 이름, 레이싱 횟수 입력', () => {
  before(() => {
    cy.visit('/index.html');
  });

  it('자동차 이름을 입력받는다', () => {
    cy.submitCarNames(names.join(','));
  });

  it('레이싱 횟수를 입력받는다', () => {
    cy.submitRacingCount(racingCount);
  });
});

describe('결과 출력', () => {
  it('자동차 경주 결과를 출력한다', () => {
    cy.clock();
    cy.visit('/index.html');
    cy.submitCarNames(names.join(','));
    cy.submitRacingCount(racingCount);
    names.every(name => {
      cy.get(`[data-name=${name}]`).should('be.visible');
    });
    cy.tick(racingCount * milliseconds + bufferTime);
    cy.get('h3').should('be.visible');
  });
});

describe('결과 메시지', () => {
  it('게임이 정상적으로 동작된 2초후, 결과 메시지를 확인할 수 있다', () => {
    cy.clock();
    cy.visit('/index.html');
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.submitCarNames(names.join(','));
    cy.submitRacingCount(racingCount);
    cy.tick(racingCount * milliseconds + bufferTime);
    cy.tick(2 * milliseconds + bufferTime).then(() => {
      expect(alertStub).to.be.called;
    });
  });
});

describe('다시 시작하기', () => {
  it('결과 출력 2초 후 다시 시작하기 버튼을 누르면 게임을 다시 시작할 수 있다.', () => {
    cy.clock();
    cy.visit('/index.html');
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.submitCarNames(names.join(','));
    cy.submitRacingCount(racingCount);
    cy.tick(racingCount * milliseconds + bufferTime);
    cy.tick(2 * milliseconds + bufferTime).then(() => {
      cy.get(convertToId(ID.RESTART_BUTTON)).click();
      cy.get(convertToId(ID.CAR_COUNTS_INPUT)).should('have.value', '');
      cy.get(convertToId(ID.RACING_COUNT_INPUT)).should('have.value', '');
      cy.get(convertToId(ID.RACING_STATUS)).should('be.empty');
      cy.get(convertToId(ID.RACING_WINNERS)).should('be.empty');
    });
  });
});

describe('에러 처리', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });

  it('입력한 이름이 5글자 초과 1글자 미만일 수 없다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get(convertToId(ID.CAR_NAMES_INPUT)).type('jun,dddddd');
    cy.checkAlert(convertToId(ID.CAR_NAMES_SUBMIT));
    cy.get(convertToId(ID.CAR_NAMES_INPUT)).type('jun,,');
    cy.checkAlert(convertToId(ID.CAR_NAMES_SUBMIT));
  });

  it('중복된 이름은 입력이 불가능하다', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get(convertToId(ID.CAR_NAMES_INPUT)).type('jun,jun');
    cy.checkAlert(convertToId(ID.CAR_NAMES_SUBMIT));
  });

  it('자동차 이름이 입력되지 않았다면 레이싱 횟수를 입력할 수 없다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get(convertToId(ID.RACING_COUNT_INPUT)).type(5);
    cy.checkAlert(convertToId(ID.RACING_COUNT_SUBMIT));
  });

  it('입력한 레이싱 횟수가 1 미만일 수 없다.', () => {
    cy.submitCarNames(names.join(','));
    cy.get(convertToId(ID.RACING_COUNT_INPUT)).type(0);
    cy.checkAlert(convertToId(ID.RACING_COUNT_SUBMIT));
  });
});

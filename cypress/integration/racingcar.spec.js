import { ERROR } from '../../src/util/constants.js';

const ENTRY = 'index.html';
const SELECTOR = {
  NAME_INPUT: '.name-input',
  NAME_BUTTON: '.name-button',
  COUNT_INPUT: '.count-input',
  COUNT_BUTTON: '.count-button',
  WINNERS_NAME: '.winners-name',
  RESTART: '.restart',
  COUNT_FORM: '.count-form',
  RESULT_CONTAINER: '.game-result-container',
  RESTART_CONTAINER: '.restart-container',
};

describe('valid racingcar Test', () => {
  beforeEach(() => {
    const carNames = 'east, west, south, north, all';
    const count = 5;

    cy.visit(ENTRY);

    cy.get(SELECTOR.NAME_INPUT).type(carNames);
    cy.get(SELECTOR.NAME_BUTTON).click();

    cy.get(SELECTOR.COUNT_INPUT).type(count);
    cy.get(SELECTOR.COUNT_BUTTON).click();
  });

  it('레이싱 실행 이후 우승자를 출력할 수 있어야 한다', () => {
    cy.get(SELECTOR.WINNERS_NAME).should('be.visible');
  });

  it('다시 시작하기 버튼 클릭시 화면이 리셋 돼야 한다.', () => {
    cy.get(SELECTOR.RESTART).click();

    cy.get(SELECTOR.COUNT_FORM).should('not.be.visible');
    cy.get(SELECTOR.RESULT_CONTAINER).should('not.be.visible');
    cy.get(SELECTOR.RESTART_CONTAINER).should('not.be.visible');
  });
});

describe('exception racingcar Test', () => {
  beforeEach(() => {
    cy.visit(ENTRY);
  });

  it('자동차 이름이 5자 초과면 에러 메세지가 뜬다.', () => {
    const longerThanFiveName = 'aaabbb,ff,gg,hh';

    cy.get(SELECTOR.NAME_INPUT).type(longerThanFiveName);
    cy.get(SELECTOR.NAME_BUTTON).click();

    cy.on('window:alert', text => {
      expect(text).to.equal(ERROR.LONGER_THAN_FIVE);
    });
  });

  it('자동차 이름이 공백으로만 이루어지면 에러메세지가 뜬다.', () => {
    const blankName = '   ,ff,gg,hh';

    cy.get(SELECTOR.NAME_INPUT).type(blankName);
    cy.get(SELECTOR.NAME_BUTTON).click();

    cy.on('window:alert', text => {
      expect(text).to.equal(ERROR.IS_BLANK);
    });
  });

  it('반복할 횟수가 1미만이면 에러메세지가 뜬다.', () => {
    const carNames = 'east, west, south, north, all';
    const invalidCount = '-3';

    cy.get(SELECTOR.NAME_INPUT).type(carNames);
    cy.get(SELECTOR.NAME_BUTTON).click();
    cy.get(SELECTOR.COUNT_INPUT).type(invalidCount);
    cy.get(SELECTOR.COUNT_BUTTON).click();

    cy.on('window:alert', text => {
      expect(text).to.equal(ERROR.MIN_COUNT);
    });
  });
});

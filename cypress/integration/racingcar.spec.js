import { ERROR_MESSAGES } from '../../src/util/constants.js';

describe('racingcar Test', () => {
  beforeEach(() => {
    cy.visit('index.html');
  });

  it('레이싱 실행 이후 우승자를 출력할 수 있어야 한다', () => {
    const carNames = 'east, west, south, north, all';
    const count = 5;

    cy.get('.name-input').type(carNames);
    cy.get('.name-button').click();

    cy.get('.count-input').type(count);
    cy.get('.count-button').click();

    cy.get('.winners-name').should('be.visible');
  });

  it('다시 시작하기 버튼 클릭시 화면이 리셋 돼야 한다.', () => {
    const carNames = 'east, west, south, north, all';
    const count = 5;

    cy.get('.name-input').type(carNames);
    cy.get('.name-button').click();

    cy.get('.count-input').type(count);
    cy.get('.count-button').click();

    cy.get('.restart').click();

    cy.get('.count-form').should('not.be.visible');
    cy.get('.game-result-container').should('not.be.visible');
    cy.get('.restart-container').should('not.be.visible');
  });

  it('자동차 이름이 5자 초과면 에러 메세지가 뜬다.', () => {
    const invalid = 'aaabbb,ff,gg,hh';

    cy.get('.name-input').type(invalid);
    cy.get('.name-button').click();

    cy.on('window:alert', text => {
      expect(text).to.equal(ERROR_MESSAGES.LONGER_THAN_FIVE);
    });
  });

  it('자동차 이름이 공백으로만 이루어지면 에러메세지가 뜬다.', () => {
    const invalid = '   ,ff,gg,hh';

    cy.get('.name-input').type(invalid);
    cy.get('.name-button').click();

    cy.on('window:alert', text => {
      expect(text).to.equal(ERROR_MESSAGES.IS_BLANK);
    });
  });

  it('반복할 횟수가 1미만이면 에러메세지가 뜬다.', () => {
    const carNames = 'east, west, south, north, all';
    const invalid = '-3';

    cy.get('.name-input').type(carNames);
    cy.get('.name-button').click();
    cy.get('.count-input').type(invalid);
    cy.get('.count-button').click();

    cy.on('window:alert', text => {
      expect(text).to.equal(ERROR_MESSAGES.MIN_COUNT);
    });
  });
});

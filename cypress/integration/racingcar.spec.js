import { ERROR_MESSAGES } from '../../src/utils/constants.js';

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

  it('자동차 이름이 5자 초과면 에러 메세지가 표시된다.', () => {
    const invalidInput = 'aaabbb,ff,gg,hh';

    cy.get('.name-input').type(invalidInput);
    cy.get('.name-button').click();

    cy.on('window:alert', text => {
      expect(text).to.equal(ERROR_MESSAGES.NAME_LENGTH);
    });
  });

  it('자동차 이름이 공백으로만 이루어지면 에러메세지가 표시된다.', () => {
    const invalidInput = '   ,ff,gg,hh';

    cy.get('.name-input').type(invalidInput);
    cy.get('.name-button').click();

    cy.on('window:alert', text => {
      expect(text).to.equal(ERROR_MESSAGES.NAME_LENGTH);
    });
  });

  it('중복된 자동차 이름이 있으면 에러메세지가 표시된다.', () => {
    const invalidInput = 'a,a,b,c';

    cy.get('.name-input').type(invalidInput);
    cy.get('.name-button').click();

    cy.on('window:alert', text => {
      expect(text).to.equal(ERROR_MESSAGES.DUPLICATED_NAME);
    });
  });

  it('시도할 횟수가 1미만이면 에러메세지가 표시된다.', () => {
    const carNames = 'east, west, south, north, all';
    const invalidInput = '-3';

    cy.get('.name-input').type(carNames);
    cy.get('.name-button').click();
    cy.get('.count-input').type(invalidInput);
    cy.get('.count-button').click();

    cy.on('window:alert', text => {
      expect(text).to.equal(ERROR_MESSAGES.MIN_COUNT);
    });
  });
});

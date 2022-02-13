import { ERROR } from '../../src/util/constants.js';

describe('자동차 경주 게임을 진행할 수 있다.', () => {
  beforeEach(() => {
    const carNames = 'east, west, south, north, all';
    const count = 5;

    cy.visit('index.html');

    cy.get('.name-input').type(carNames);
    cy.get('.name-button').click();

    cy.get('.count-input').type(count);
    cy.get('.count-button').click();
  });

  it('레이싱 실행 이후 우승자를 출력할 수 있어야 한다', () => {
    cy.get('.winners-name').should('be.visible');
  });

  it('다시 시작하기 버튼 클릭시 화면이 리셋 돼야 한다.', () => {
    cy.get('.restart').click();
    cy.get('.count-form').should('not.be.visible');
    cy.get('.game-result-container').should('not.be.visible');
    cy.get('.restart-container').should('not.be.visible');
  });
});

describe('예외 상황에서 적절한 에러메시지를 출력한다.', () => {
  beforeEach(() => {
    cy.visit('index.html');
  });

  it('자동차 이름이 5자 초과면 에러 메세지가 뜬다.', () => {
    const invalidInput = 'abcdef,g,h';

    cy.get('.name-input').type(invalidInput);
    cy.get('.name-button').click();

    cy.on('window:alert', text => {
      expect(text).to.equal(ERROR.LONGER_THAN_FIVE);
    });
  });

  it('자동차 이름이 공백으로만 이루어지면 에러메세지가 뜬다.', () => {
    const invalidInput = 'a, ,b,c';

    cy.get('.name-input').type(invalidInput);
    cy.get('.name-button').click();

    cy.on('window:alert', text => {
      expect(text).to.equal(ERROR.IS_BLANK);
    });
  });

  it('반복할 횟수가 1미만이면 에러메세지가 뜬다.', () => {
    const carNames = 'east, west, south, north, all';
    const invalidInput = '-3';

    cy.get('.name-input').type(carNames);
    cy.get('.name-button').click();
    cy.get('.count-input').type(invalidInput);
    cy.get('.count-button').click();

    cy.on('window:alert', text => {
      expect(text).to.equal(ERROR.MIN_COUNT);
    });
  });
});

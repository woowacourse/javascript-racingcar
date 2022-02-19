import { ERROR_MESSAGE } from '../../src/util/constants.js';

describe('자동차 경주 게임을 진행할 수 있다.', () => {
  beforeEach(() => {
    const carNames = 'east, west, south';
    const count = 3;

    cy.visit('index.html');

    cy.get('.name-input').type(carNames);
    cy.get('.name-button').click();

    cy.get('.count-input').type(count);
    cy.get('.count-button').click();
  });

  it('레이싱 실행 이후 우승자를 확인할 수 있다.', () => {
    cy.get('.winners-name').should('be.visible');
  });

  it('다시 시작하기 버튼 클릭시 화면이 리셋 돼야 한다.', () => {
    cy.get('.restart').click({ force: true });
    cy.get('.count-form').should('not.be.visible');
    cy.get('.game-result-container').should('not.be.visible');
    cy.get('.restart-container').should('not.be.visible');
  });
});

describe('게임이 끝난 후, 우승자를 확인할 수 있어야한다.', () => {
  it('게임이 끝난 후, 우승자를 알림창으로 확인할 수 있어야한다.', () => {
    cy.visit('index.html');
    const invalidInput = '위니';

    cy.get('.name-input').type(invalidInput);
    cy.get('.name-button').click();

    cy.on('window:alert', text => {
      expect(text).to.equal('우승자는 위니 입니다. 🥳');
    });
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
      expect(text).to.equal(ERROR_MESSAGE.LONGER_THAN_FIVE);
    });
  });

  it('자동차 이름이 공백으로만 이루어지면 에러메세지가 뜬다.', () => {
    const invalidInput = 'a, ,b,c';

    cy.get('.name-input').type(invalidInput);
    cy.get('.name-button').click();

    cy.on('window:alert', text => {
      expect(text).to.equal(ERROR_MESSAGE.NAME_IS_BLANK);
    });
  });
});

import { getRandomNumber } from '../../src/js/utils/getRandomNumber.js';
import { isEffectiveScore } from '../../src/js/game/isEffectiveScore.js';
import { GAME } from '../../src/js/utils/constant.js';

describe('racing-game', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
  });

  const carNames = ['EAST', 'WEST', 'SOUTH', 'NORTH'];

  const typeCarNameAndSubmit = (
    carNames = ['EAST', 'WEST', 'SOUTH', 'NORTH'],
  ) => {
    cy.get('#car-name-input').type(carNames.join(','));
    cy.get('#car-name-submit').click();
    cy.get('#car-name-submit').click();
    return cy.get('#car-name-submit').click();
  };

  const typeRacingCountAndSubmit = (racingCount = 4) => {
    cy.get('#racing-count-input').type(racingCount);
    return cy.get('#racing-count-submit').click();
  };

  it('"EAST, WEST, SOUTH, NORTH"를 입력하면 화면에 시도횟수 입력창을 표시하는지 테스트 한다.', () => {
    typeCarNameAndSubmit();
    cy.get('#racing-count-section').should('be.visible');
  });

  it('올바르지 않은 자동차 이름을 입력한 경우 경고메세지를 출력하는지 테스트 한다.', () => {
    const longCarName = ['YUJOYOONHO'];
    const blankCarName = ['   '];
    const alertStub = cy.stub();

    cy.on('window:alert', alertStub);
    typeCarNameAndSubmit(longCarName).then(() => {
      expect(alertStub.getCall(0)).to.be.calledWith(
        '이름은 5글자 이하로 입력해 주세요.',
      );
      cy.get('#car-name-input').should('have.text', '');
    });

    typeCarNameAndSubmit(blankCarName).then(() => {
      expect(alertStub.getCall(1)).to.be.calledWith(
        '공백만으로는 이름을 구성할 수 없습니다.',
      );
      cy.get('#car-name-input').should('have.text', '');
    });

    cy.get('#car-name-submit')
      .click()
      .then(() => {
        expect(alertStub.getCall(2)).to.be.calledWith(
          '공백만으로는 이름을 구성할 수 없습니다.',
        );
        cy.get('#car-name-input').should('have.text', '');
      });
  });

  it('양의 정수만을 시도횟수로 입력할 수 있는지 테스트 한다.', () => {
    const negativeRacingCount = -7;
    const alertStub = cy.stub();

    cy.on('window:alert', alertStub);
    typeCarNameAndSubmit();
    typeRacingCountAndSubmit(negativeRacingCount).then(() => {
      expect(alertStub.getCall(0)).to.be.calledWith(
        '1 이상의 숫자를 입력해주세요.',
      );
      cy.get('#racing-count-input').should('have.text', '');
    });

    cy.get('#racing-count-submit')
      .click()
      .then(() => {
        expect(alertStub.getCall(1)).to.be.calledWith(
          '1 이상의 숫자를 입력해주세요.',
        );
        cy.get('#racing-count-input').should('have.text', '');
      });
  });

  it('시도횟수가 올바르게 입력된 경우 자동차경주 화면이 보이는지 테스트 한다.', () => {
    typeCarNameAndSubmit();
    typeRacingCountAndSubmit();
    cy.get('.car-player')
      .should('have.length', carNames.length)
      .each(($div, index) => cy.get($div).should('have.text', carNames[index]));
    cy.get('#game-process-section').should('be.visible');
  });

  it('랜덤 함수가 정상적으로 동작하는지 테스트 한다.', () => {
    const possibleScores = Array.from({
      length: GAME.MAX_SCORE - GAME.MIN_SCORE + 1,
    }).map((v, i) => i);

    for (let i = 0; i < 100; i++) {
      expect(possibleScores).to.include(getRandomNumber());
    }
  });

  it('자동차가 정상적으로 전진, 멈춤하는지 테스트한다.', () => {
    for (let i = GAME.MAX_SCORE; i < GAME.MAX_SCORE; i++) {
      if (i < GAME.EFFECTIVE_SCORE) {
        return expect(isEffectiveScore(i)).to.equal(false);
      }
      return expect(isEffectiveScore(i)).to.equal(true);
    }
  });

  it('자동차 경주가 정상적으로 진행되는지 테스트 한다.', () => {
    typeCarNameAndSubmit();
    typeRacingCountAndSubmit();
    cy.get('.car-player').each(($div, index) => {
      cy.get($div)
        .should('have.text', carNames[index])
        .parent()
        .children('div')
        .its('length')
        .then((childrenNum) => {
          cy.get($div).should('have.data', 'forwardCount', childrenNum - 1);
        });
    });
  });

  it('자동차 경주를 마쳤을 때 우승자를 정상적으로 출력하는지 테스트 한다.', () => {
    typeCarNameAndSubmit();
    typeRacingCountAndSubmit();

    cy.get('.car').then(($cars) => {
      const counts = [...$cars].map(($car) => {
        return $car.querySelectorAll('.forward-icon').length;
      });
      const maxScore = Math.max(...counts);
      const winners = [];

      counts.forEach((carCount, index) => {
        if (carCount === maxScore) {
          winners.push(carNames[index]);
        }
      });

      cy.get('#game-result-text').should(
        'have.text',
        `🏆 최종 우승자: ${winners.join(', ')} 🏆`,
      );
    });
  });

  it('다시 시작버튼을 누르면 초기 화면을 출력해서 게임을 정상적으로 다시 시작하는지 테스트한다.', () => {
    typeCarNameAndSubmit();
    typeRacingCountAndSubmit();
    cy.get('#game-restart-button').click();
    cy.get('#racing-count-section').should('not.be.visible');
    cy.get('#game-process-section').should('not.be.visible');
    cy.get('#game-result-section').should('not.be.visible');
    cy.get('#game-process-screen').should('have.text', '');
    cy.get('#car-name-input').should('have.text', '');
    cy.get('#racing-count-input').should('have.text', '');
  });
});

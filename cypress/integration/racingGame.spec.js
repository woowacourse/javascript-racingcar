import { getRandomNumber } from '../../src/js/utils/getRandomNumber.js';
import { isEffectiveScore } from '../../src/js/game/isEffectiveScore.js';
import { GAME } from '../../src/js/utils/constant.js';

describe('racing-game', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
  });

  const carNames = ['EAST', 'WEST', 'SOUTH', 'NORTH'];

  const typeCarNameAndClickToSubmitButton = (
    carNames = ['EAST', 'WEST', 'SOUTH', 'NORTH'],
  ) => {
    cy.get('#car-name-input').type(carNames.join(','));
    return cy.get('#car-name-submit').click();
  };

  const typeRacingCountAndClickToSubmitButton = (racingCount = 5) => {
    cy.get('#racing-count-input').type(racingCount);
    return cy.get('#racing-count-submit').click();
  };

  it('자동차 이름 입력 시, 화면에 시도 횟수 입력창이 표시되는지 테스트 한다.', () => {
    typeCarNameAndClickToSubmitButton();
    cy.get('#racing-count-section').should('be.visible');
  });

  it('올바르지 않은 자동차 이름을 입력 시, 경고메세지가 출력되는지 테스트 한다.', () => {
    const longCarName = ['YUJOYOONHO'];
    const blankCarName = ['   '];
    const alertStub = cy.stub();

    cy.on('window:alert', alertStub);
    typeCarNameAndClickToSubmitButton(longCarName).then(() => {
      expect(alertStub.getCall(0)).to.be.calledWith(
        '이름은 5글자 이하로 입력해 주세요.',
      );
      cy.get('#car-name-input').should('have.text', '');
    });

    typeCarNameAndClickToSubmitButton(blankCarName).then(() => {
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

  it('음수와 공백을 시도 횟수로 입력 시, 경고메세지가 출력되는지 테스트 한다.', () => {
    const negativeRacingCount = -7;
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    typeCarNameAndClickToSubmitButton();
    typeRacingCountAndClickToSubmitButton(negativeRacingCount).then(() => {
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

  it('올바른 시도 횟수 입력 시, 화면에 자동차 경주 섹션이 표시되는지 테스트 한다.', () => {
    typeCarNameAndClickToSubmitButton();
    typeRacingCountAndClickToSubmitButton();

    cy.get('.car-player')
      .should('have.length', carNames.length)
      .each(($div, index) => cy.get($div).should('have.text', carNames[index]));
    cy.get('#game-process-section').should('be.visible');
  });

  it('랜덤 함수가 정상적으로 동작하는지 테스트 한다.', () => {
    const randomNumbers = [...Array(100)]
      .map(() => getRandomNumber(GAME.MIN_SCORE, GAME.MAX_SCORE))
      .filter((num) => GAME.MIN_SCORE <= num && num <= GAME.MAX_SCORE);

    expect(randomNumbers.length).to.equal(100);
  });

  it('자동차가 정상적으로 전진, 멈춤하는지 테스트한다.', () => {
    for (let i = GAME.MAX_SCORE; i <= GAME.MAX_SCORE; i++) {
      if (i < GAME.EFFECTIVE_SCORE) {
        return expect(isEffectiveScore(i)).to.equal(false);
      }
      return expect(isEffectiveScore(i)).to.equal(true);
    }
  });

  it('자동차 경주 진행 중 턴마다 1초의 지연시간이 생기는지 테스트 한다.', () => {
    cy.clock();

    // 첫번째 경기 진행시간 1000ms
    typeCarNameAndClickToSubmitButton();
    typeRacingCountAndClickToSubmitButton(1);

    cy.tick(500);
    cy.get('#game-result-section').should('not.be.visible');
    cy.tick(500);
    cy.get('#game-result-section').should('be.visible');

    // 두번째 경기 진행시간 3000ms
    cy.get('#game-restart-button').click();
    typeCarNameAndClickToSubmitButton();
    typeRacingCountAndClickToSubmitButton(3);

    cy.tick(1500);
    cy.get('#game-result-section').should('not.be.visible');
    cy.tick(1500);
    cy.get('#game-result-section').should('be.visible');
  });

  it('자동차 경주 진행 중 지연시간마다 Anmiation이 출력되는지 테스트 한다.', () => {
    typeCarNameAndClickToSubmitButton();
    typeRacingCountAndClickToSubmitButton();

    cy.clock();

    // 경주 진행시간 5000ms
    cy.get('.spinner-container').should('be.visible');
    cy.wait(2000);
    cy.get('.spinner-container').should('be.visible');
    cy.wait(2000);
    cy.get('.spinner-container').should('be.visible');
    cy.wait(1000);
    cy.get('.spinner-container').should('not.be.visible');
  });

  it('자동차 경주가 정상적으로 진행되는지 테스트 한다.', () => {
    typeCarNameAndClickToSubmitButton();
    typeRacingCountAndClickToSubmitButton();

    cy.clock();
    cy.wait(5000);

    cy.get('.car-player').each(($div, index) => {
      cy.get($div)
        .should('have.text', carNames[index])
        .parent()
        .children('div')
        .its('length')
        .then((childrenNum) => {
          cy.get($div).should('have.data', 'forwardCount', childrenNum - 2);
        });
    });
  });

  it('자동차 경주가 끝났을 때 우승자가 정상적으로 출력되는지 테스트 한다.', () => {
    typeCarNameAndClickToSubmitButton();
    typeRacingCountAndClickToSubmitButton();

    cy.clock();
    cy.wait(5000);

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

  it('자동차 경주가 모두 끝났을 때, 2초 후 축하의 alert메세지가 출력되는지 테스트 한다.', () => {
    cy.clock();

    typeCarNameAndClickToSubmitButton(['yujo']);
    typeRacingCountAndClickToSubmitButton();

    // 자동차 경주 진행시간 5000ms + alert 출력 대기시간 2000ms
    cy.tick(7000);

    cy.on('window:alert', (txt) => {
      expect(txt).to.equal('🎉 축하드립니다! 우승자는 yujo입니다! 🎉');
    });
  });

  it('다시 시작버튼을 눌렀을 때 화면이 초기화 되는지 테스트한다.', () => {
    typeCarNameAndClickToSubmitButton();
    typeRacingCountAndClickToSubmitButton();

    cy.clock();
    cy.wait(5000);

    cy.get('#game-restart-button').click();
    cy.get('#racing-count-section').should('not.be.visible');
    cy.get('#game-process-section').should('not.be.visible');
    cy.get('#game-result-section').should('not.be.visible');
    cy.get('#game-process-screen').should('have.text', '');
    cy.get('#car-name-input').should('have.text', '');
    cy.get('#racing-count-input').should('have.text', '');
  });
});

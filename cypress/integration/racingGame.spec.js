import { getRandomNumber } from '../../src/js/utils/getRandomNumber.js';
import { isEffectiveScore } from '../../src/js/utils/isEffectiveScore.js';

describe('racing-game', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
  });

  const defaultCarNames = ['EAST', 'WEST', 'SOUTH', 'NORTH'];

  const typeCarNameAndSubmit = (carNames = defaultCarNames) => {
    cy.get('#car-name-input').type(carNames.join(','));
    cy.get('#car-name-submit').click();
    cy.get('#car-name-submit').click();
    return cy.get('#car-name-submit').click();
  };

  const typeRacingCountAndSubmit = (racingCount = 4) => {
    cy.get('#racing-count-input').type(racingCount);
    return cy.get('#racing-count-submit').click();
  };

  it('정상적인 자동차이름을 입력하면 화면에 시도횟수 입력창을 표시하는지 테스트 한다.', () => {
    typeCarNameAndSubmit();
    cy.get('#racing-count-section').should('be.visible');
  });

  it('5글자 초과 자동차 이름이 입력된 경우 경고메세지를 출력하고 입력창을 초기화 하는지 테스트를 한다.', () => {
    const longCarName = ['YUJO_YOONHO'];
    const alertStub = cy.stub();

    cy.on('window:alert', alertStub);
    typeCarNameAndSubmit(longCarName).then(() => {
      expect(alertStub.getCall(0)).to.be.calledWith(
        '이름은 5글자 이하로 입력해 주세요.',
      );
      cy.get('#car-name-input').should('have.text', '');
    });
  });

  it('자동차 이름에 공백이 입력된 경우 경고메세지를 출력하고 입력창을 초기화 하는지 테스트를 한다.', () => {
    const blankCarName = ['   '];
    const alertStub = cy.stub();

    cy.on('window:alert', alertStub);
    typeCarNameAndSubmit(blankCarName).then(() => {
      expect(alertStub.getCall(0)).to.be.calledWith(
        '공백만으로는 이름을 구성할 수 없습니다.',
      );
      cy.get('#car-name-input').should('have.text', '');
    });
    cy.get('#car-name-submit')
      .click()
      .then(() => {
        expect(alertStub.getCall(1)).to.be.calledWith(
          '공백만으로는 이름을 구성할 수 없습니다.',
        );
        cy.get('#car-name-input').should('have.text', '');
      });
  });

  it('음수의 시도횟수가 입력된 경우 경고메세지를 출력하고 입력창을 초기화 하는지 테스트를 한다.', () => {
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
  });

  it('시도횟수에 공백이 입력된 경우 경고메세지를 출력하고 입력창을 초기화 하는지 테스트를 한다.', () => {
    const alertStub = cy.stub();

    cy.on('window:alert', alertStub);
    typeCarNameAndSubmit();
    cy.get('#racing-count-submit')
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(
          '1 이상의 숫자를 입력해주세요.',
        );
        cy.get('#racing-count-input').should('have.text', '');
      });
  });

  it('올바른 시도횟수가 입력된 경우 게임진행 화면에 정상적으로 표시되는지 테스트를 한다.', () => {
    typeCarNameAndSubmit();
    typeRacingCountAndSubmit();
    cy.get('#game-process-section').should('be.visible');
  });

  it('게임진행 화면에 표시된 자동차 대수와 입력된 자동차 대수가 일치하는지 테스트를 한다.', () => {
    typeCarNameAndSubmit();
    typeRacingCountAndSubmit();
    cy.get('.car-player').should('have.length', defaultCarNames.length);
    cy.get('#game-process-section').should('be.visible');
  });

  it('게임진행 화면에 표시된 자동차 이름과 입력된 자동차 이름이 일치하는지 테스트를 한다.', () => {
    typeCarNameAndSubmit();
    typeRacingCountAndSubmit();
    cy.get('.car-player').each(($div, index) =>
      cy.get($div).should('have.text', defaultCarNames[index]),
    );
  });

  it('난수를 생성하는 함수가 0 ~ 9 사이의 정수를 반환하는지 확인하는 테스트한다.', () => {
    const possibleScores = Array.from({ length: 10 }).map((v, i) => i);

    for (let i = 0; i < 10; i++) {
      expect(possibleScores).to.include(getRandomNumber());
    }
  });

  it('전진횟수를 결정하는 함수가 "[1, 3, 3, 7]"을 입력받았을 때 "1"을 반환하는지 확인하는 테스트한다.', () => {
    expect(isEffectiveScore(3)).to.equal(false);
    expect(isEffectiveScore(4)).to.equal(true);
  });

  it('게임진행 결과에 따라 각 자동차에 화살표 갯수가 제대로 표시되는지 테스트한다.', () => {
    typeCarNameAndSubmit();
    typeRacingCountAndSubmit();
    cy.get('.car-player').each(($div, index) => {
      cy.get($div)
        .should('have.text', defaultCarNames[index])
        .parent()
        .children('div')
        .its('length')
        .then((childrenNum) => {
          cy.get($div).should('have.data', 'forwardCount', childrenNum - 1);
        });
    });
  });

  it('최종 우승자가 정상적으로 출력되는지 테스트한다.', () => {
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
          winners.push(defaultCarNames[index]);
        }
      });
      cy.get('#game-result-text').should(
        'have.text',
        `🏆 최종 우승자: ${winners.join(', ')} 🏆`,
      );
    });
  });

  it('시도횟수 입력창, 게임진행 화면, 게임 결과 화면이 모두 보이지 않는 상태인지 테스트한다.', () => {
    typeCarNameAndSubmit();
    typeRacingCountAndSubmit();
    cy.get('#game-restart-button').click();
    cy.get('#racing-count-section').should('not.be.visible');
    cy.get('#game-process-section').should('not.be.visible');
    cy.get('#game-result-section').should('not.be.visible');
  });

  it('게임 진행 내용을 초기화 되었는지 테스트한다.', () => {
    typeCarNameAndSubmit();
    typeRacingCountAndSubmit();
    cy.get('#game-restart-button').click();
    cy.get('#game-process-screen').should('have.text', '');
  });

  it('자동차이름 입력창과 시도횟수 입력창이 초기화 되었는지 테스트한다.', () => {
    typeCarNameAndSubmit();
    typeRacingCountAndSubmit();
    cy.get('#car-name-input').should('have.text', '');
    cy.get('#racing-count-input').should('have.text', '');
  });
});

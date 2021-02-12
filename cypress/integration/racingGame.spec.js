import { getRandomNumber } from '../../src/js/util-model/getRandomNumber.js';
import { getWinners } from '../../src/js/util-model/getWinners.js';
import { Car } from '../../src/js/class/Car.js';

describe('racing-game', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
  });

  const defaultCarNames = ['EAST', 'WEST', 'SOUTH', 'NORTH'];

  const submitCarnames = (carNames = defaultCarNames) => {
    cy.get('#car-name-input').type(carNames.join(','));
    return cy.get('#car-name-submit').click();
  };

  const submitRacingCount = (racingCount = 4) => {
    cy.get('#racing-count-input').type(racingCount);
    return cy.get('#racing-count-submit').click();
  };

  it('정상적인 자동차이름을 입력하면 화면에 시도횟수 입력창을 표시한다.', () => {
    submitCarnames();
    cy.get('#racing-count-section').should('be.visible');
  });

  it('5글자 초과 자동차 이름이 입력된 경우 경고메세지를 출력하고 입력창을 초기화한다.', () => {
    const longCarName = ['YUJO_YOONHO'];
    const alertStub = cy.stub();

    cy.on('window:alert', alertStub);
    submitCarnames(longCarName).then(() => {
      expect(alertStub.getCall(0)).to.be.calledWith(
        '이름은 5글자 이하로 입력해 주세요.',
      );
      cy.get('#car-name-input').should('have.text', '');
    });
  });

  it('자동차 이름에 공백이 입력된 경우 경고메세지를 출력하고 입력창을 초기화한다.', () => {
    const blankCarName = ['   '];
    const alertStub = cy.stub();

    cy.on('window:alert', alertStub);
    submitCarnames(blankCarName).then(() => {
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

  it('음수의 시도횟수가 입력된 경우 경고메세지를 출력하고 입력창을 초기화한다.', () => {
    const negativeRacingCount = -7;
    const alertStub = cy.stub();

    cy.on('window:alert', alertStub);
    submitCarnames();
    submitRacingCount(negativeRacingCount).then(() => {
      expect(alertStub.getCall(0)).to.be.calledWith(
        '1 이상의 숫자를 입력해주세요.',
      );
      cy.get('#racing-count-input').should('have.text', '');
    });
  });

  it('시도횟수에 공백이 입력된 경우 경고메세지를 출력하고 입력창을 초기화한다.', () => {
    const alertStub = cy.stub();

    cy.on('window:alert', alertStub);
    submitCarnames();
    cy.get('#racing-count-submit')
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(
          '1 이상의 숫자를 입력해주세요.',
        );
        cy.get('#racing-count-input').should('have.text', '');
      });
  });

  it('올바른 시도횟수가 입력된 경우 게임진행 화면에 정상적으로 표시한다.', () => {
    submitCarnames();
    submitRacingCount();
    cy.get('#game-process-section').should('be.visible');
  });

  it('게임진행 화면에 표시된 자동차 대수와 입력된 자동차 대수가 일치한다.', () => {
    submitCarnames();
    submitRacingCount();
    cy.get('.car-player').should('have.length', defaultCarNames.length);
    cy.get('#game-process-section').should('be.visible');
  });

  it('게임진행 화면에 표시된 자동차 이름과 입력된 자동차 이름이 일치한다.', () => {
    submitCarnames();
    submitRacingCount();
    cy.get('.car-player').each(($div, index) =>
      cy.get($div).should('have.text', defaultCarNames[index]),
    );
  });

  it('난수를 생성하는 함수가 0 ~ 9 사이의 정수를 반환한다.', () => {
    const possibleScores = Array.from({ length: 10 }).map((v, i) => i);

    for (let i = 0; i < 10; i++) {
      expect(possibleScores).to.include(getRandomNumber());
    }
  });

  it('전진여부를 결정하는 함수가 3 이하를 입력받았을 때 거짓을 4 이상을 입력 받았을 때 참을 반환한다.', () => {
    const car = new Car();

    expect(car.isMovingForward(3)).to.equal(false);
    expect(car.isMovingForward(4)).to.equal(true);
  });

  it('우승자를 결정하는 함수는 forwardCount가 가장 큰 Car들의 이름을 ","로 이어 반환한다.', () => {
    const cars = defaultCarNames.map((carName) => new Car(carName));

    cars.forEach((car, i) => (car.forwardCount = (i + 2) % 3)); // [2, 0, 1, 2]
    expect(getWinners(cars)).to.equal('EAST, NORTH');
  });

  it('각 자동차의 이름을 순서대로 알맞게 표시한다.', () => {
    submitCarnames();
    submitRacingCount();
    cy.get('.car-player').each(($div, index) => {
      cy.get($div).should('have.text', defaultCarNames[index]);
    });
  });

  it('게임 한 판 시작 시 로더를 화면에 표시했다가 1초 후 로더 표시를 없앤다.', () => {
    const carNames = ['피카츄', '라이츄', '파이리'];
    const racingCount = 3;
    const turnDuration = 1000;

    cy.clock();
    submitCarnames(carNames);
    submitRacingCount(racingCount);
    for (let i = 0; i < racingCount; i++) {
      cy.tick(turnDuration / 2);
      cy.get('.spinner-container').should('be.visible');
      cy.tick(turnDuration / 2);
      cy.get('spinner-container').should('not.be.visible');
    }
  });

  it('게임완료 2초 후 축하 alert 메세지를 표시한다.', () => {
    const carName = ['피카츄'];
    const racingCount = 3;
    const turnDuration = 1000;
    const gameOverNoticeDelay = 2000;
    const totalDelay = turnDuration * racingCount + gameOverNoticeDelay;
    const alertStub = cy.stub();

    cy.clock();
    cy.on('window:alert', alertStub);
    submitCarnames(carName);
    submitRacingCount(racingCount);
    cy.tick(totalDelay).then(() => {
      expect(alertStub.getCall(0)).to.be.calledWith(
        `${carName} 님의 우승을 축하드립니다! (୨୧ ❛ᴗ❛)✧🎉'`,
      );
    });
  });

  it('다시시작 버튼을 누르면 시도횟수 입력창, 게임진행 화면, 게임 결과 화면이 모두 사용자에게 보이지 않는 상태가 된다.', () => {
    submitCarnames();
    submitRacingCount();
    cy.get('#game-restart-button').click();
    cy.get('#racing-count-section').should('not.be.visible');
    cy.get('#game-process-section').should('not.be.visible');
    cy.get('#game-result-section').should('not.be.visible');
  });

  it('다시시작 버튼을 누르면 게임진행 내용을 초기화한다.', () => {
    submitCarnames();
    submitRacingCount();
    cy.get('#game-restart-button').click();
    cy.get('#game-process-screen').should('have.text', '');
  });

  it('다시시작 버튼을 누르면 자동차이름 입력창과 시도횟수 입력창이 초기화한다.', () => {
    submitCarnames();
    submitRacingCount();
    cy.get('#game-restart-button').click();
    cy.get('#car-name-input').should('have.text', '');
    cy.get('#racing-count-input').should('have.text', '');
  });
});

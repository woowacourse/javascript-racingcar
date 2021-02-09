import RacingCarGameModel from '../../src/scripts/RacingCarGame/RacingCarGameModel.js';
import {
  MAX_CAR_NAME_EXCEEDED,
  CAR_NAME_EMPTY,
  SHOULD_BE_INTEGER,
  SHOULD_GREATER_THAN_ZERO,
  SHOULD_REGISTER_CAR_FIRST,
  CAR_MOVE_STANDARD_NUMBER,
} from '../../src/scripts/constants.js';

describe('step1', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5501/');
  });

  it('자동차를 이름과 함께 등록한다.', () => {
    cy.registerCarNames('chris, beuc');
    cy.checkResultContain('chris');
    cy.checkResultContain('beuc');
  });

  it('자동차 이름을 5자까지만 허용된다.', () => {
    cy.registerCarNames('chris, beuccol');
    cy.checkAlertIs(MAX_CAR_NAME_EXCEEDED);
    cy.checkResultIs('');
  });

  it('자동차 이름을 넣을 때 이름 양쪽 공백을 자동으로 제거해서 등록한다.', () => {
    cy.registerCarNames('chris,   beuc  ');
    cy.checkResultContain('chris');
    cy.checkResultContain('beuc');
    cy.checkResultNotContain('   beuc  ');
  });

  it('자동차 이름에는 빈 문자열을 넣을 수 없다.', () => {
    cy.registerCarNames(',chris,');
    cy.checkAlertIs(CAR_NAME_EMPTY);
    /* 스냅샷 테스트 추가 필요 */
  });

  it('수행 횟수는 소수점을 포함할 수 없다.', () => {
    cy.typeTryCount('1.5');
    cy.playRacingGame();
    cy.checkAlertIs(SHOULD_BE_INTEGER);
    /* 스냅샷 테스트 추가 필요 */
  });

  it('자동차가 등록되지 않으면 수행횟수를 등록할 수 없다.', () => {
    cy.typeTryCount('5');
    cy.playRacingGame();
    cy.checkAlertIs(SHOULD_REGISTER_CAR_FIRST);
    /* 스냅샷 테스트 추가 필요 */
  });

  it('수행 횟수는 0 이 될 수 없다.', () => {
    cy.registerCarNames('chris, beuc');
    cy.typeTryCount('0');
    cy.playRacingGame();
    cy.checkAlertIs(SHOULD_GREATER_THAN_ZERO);
    /* 스냅샷 테스트 추가 필요 */
  });

  it('수행 횟수는 음수가 될 수 없다.', () => {
    cy.registerCarNames('chris, beuc');
    cy.typeTryCount('-1');
    cy.playRacingGame();
    cy.checkAlertIs(SHOULD_GREATER_THAN_ZERO);
    /* 스냅샷 테스트 추가 필요 */
  });

  it(`랜덤한 숫자가 ${CAR_MOVE_STANDARD_NUMBER}이상 일 때 전진한다.`, () => {
    const racingCarGameModel = new RacingCarGameModel();
    racingCarGameModel.registerCars(['beuc']);
    const car = racingCarGameModel.carList[0];
    racingCarGameModel.moveCarForward(car, CAR_MOVE_STANDARD_NUMBER);
    expect(car.record).to.equal(1);
  });

  it(`랜덤한 숫자가 ${
    CAR_MOVE_STANDARD_NUMBER - 1
  }이하 일 때 전진하지 않는다`, () => {
    const racingCarGameModel = new RacingCarGameModel();
    racingCarGameModel.registerCars(['chris']);
    const car = racingCarGameModel.carList[0];
    racingCarGameModel.moveCarForward(car, CAR_MOVE_STANDARD_NUMBER - 1);
    expect(car.record).to.equal(0);
  });

  /* 리팩토링 필요함 */
  it('우승자를 제대로 가려냈는지 확인한다.', () => {
    cy.registerCarNames('chris, beuc');
    cy.typeTryCount('10');
    for (let i = 0; i < 100; i += 1) {
      cy.playRacingGame();
      cy.get('#result-area div').then((results) => {
        const record = [];
        Array.from(results).forEach((element) => {
          if (element.classList.contains('car-player')) {
            record.push(0);
          } else if (element.classList.contains('forward-icon')) {
            record[record.length - 1]++;
          }
        });

        if (record[0] === record[1]) {
          cy.get('#winners').should(
            'have.text',
            '🏆 최종 우승자: chris, beuc 🏆'
          );
        } else if (record[0] > record[1]) {
          cy.get('#winners').should('have.text', '🏆 최종 우승자: chris 🏆');
        } else {
          cy.get('#winners').should('have.text', '🏆 최종 우승자: beuc 🏆');
        }
      });
    }
  });
});

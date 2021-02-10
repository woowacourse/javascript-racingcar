import RacingCarGameModel from '../../src/scripts/RacingCarGame/RacingCarGameModel.js';
import { 
  MAX_CAR_NAME_EXCEEDED, 
  CAR_NAME_EMPTY, 
  SHOULD_BE_INTEGER, 
  SHOULD_GREATER_THAN_ZERO,
  CAR_MOVE_STANDARD_NUMBER
} from '../../src/scripts/constants.js';

describe('step1', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5501/');
  });

  it('자동차를 이름과 함께 등록한다.', () => {
    cy.get('#car-name-input').type('chris, beuc');
    cy.get('#car-name-submit').click();
    cy.get('#result-area').should('contain', 'chris');
    cy.get('#result-area').should('contain', 'beuc');
  });

  it('자동차 이름을 5자까지만 허용된다.', () => {
    cy.get('#car-name-input').type('chris, beuccol');
    cy.get('#car-name-submit').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains(MAX_CAR_NAME_EXCEEDED);
    });
    cy.get('#result-area').should('have.text', '');
  });

  it('자동차 이름을 넣을 때 이름 양쪽 공백을 자동으로 제거해서 등록한다.', () => {
    cy.get('#car-name-input').type('chris,  beuc  ');
    cy.get('#car-name-submit').click();
    cy.get('#result-area').should('contain', 'chris');
    cy.get('#result-area').should('not.contain', '  beuc  ');
  });
  
  it('자동차 이름에는 빈 문자열을 넣을 수 없다.', () => {
    cy.get('#car-name-input').type(',chris,');
    cy.get('#car-name-submit').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains(CAR_NAME_EMPTY);
    });
    cy.get('#result-area').should('have.text', '');
  });

  it('수행 횟수는 소수점을 포함할 수 없다.', () => {
    cy.get('#try-count-input').type('1.5');
    cy.get('#play-game-button').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains(SHOULD_BE_INTEGER);
    });
    cy.get('#try-count-input').should('have.value', '');
  });

  it('수행 횟수는 0 이 될 수 없다.', () => {
    cy.get('#car-name-input').type('chris, beuc');
    cy.get('#car-name-submit').click();
    cy.get('#try-count-input').type('0')
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains(SHOULD_GREATER_THAN_ZERO);
    });
  });

  it('수행 횟수는 음수가 될 수 없다.', () => {
    cy.get('#car-name-input').type('chris, beuc');
    cy.get('#car-name-submit').click();
    cy.get('#try-count-input').type('-1')
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains(SHOULD_GREATER_THAN_ZERO);
    });
  });

  it(`랜덤한 숫자가 ${CAR_MOVE_STANDARD_NUMBER}이상 일 때 전진한다.`, () => {
    const racingCarGameModel = new RacingCarGameModel();
    racingCarGameModel.registerCars(['beuc']);
    const car = racingCarGameModel.carList[0];
    racingCarGameModel.moveCarForward(car, CAR_MOVE_STANDARD_NUMBER);
    expect(car.record).to.equal(1);
  });

  it(`랜덤한 숫자가 ${CAR_MOVE_STANDARD_NUMBER - 1}이하 일 때 전진하지 않는다`, () => {
    const racingCarGameModel = new RacingCarGameModel();
    racingCarGameModel.registerCars(['chris']);
    const car = racingCarGameModel.carList[0]
    racingCarGameModel.moveCarForward(car, CAR_MOVE_STANDARD_NUMBER - 1);
    expect(car.record).to.equal(0)    
  })
  
  it('우승자를 제대로 가려냈는지 확인한다.', () => {
    cy.get('#car-name-input').type('chris, beuc');
    cy.get('#car-name-submit').click();
    cy.get('#try-count-input').type('10');
    cy.get('#play-game-button').click();
    cy.get('#result-area > div').then((results) => {
      const chrisResult = Array.from(results)[0].children.length;
      const beucResult = Array.from(results)[1].children.length;

      if (chrisResult === beucResult) {
        cy.get('#winners').should('have.text', '🏆 최종 우승자: chris, beuc 🏆');
      } else if (chrisResult > beucResult[1]) {
        cy.get('#winners').should('have.text', '🏆 최종 우승자: chris 🏆');
      } else {
        cy.get('#winners').should('have.text', '🏆 최종 우승자: beuc 🏆');
      }
    });
  });
});

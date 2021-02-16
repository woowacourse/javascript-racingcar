/* eslint-disable max-lines-per-function */
/* eslint-disable no-undef */
import { getRandomNumber } from '../../src/library/utils/random.js';
import Car from '../../src/library/models/Car';
import { GAME_SETTING, USER_MESSAGE } from '../../src/library/utils/constant.js'
/* 랜덤으로 0~9 사이의 값만 출력되는지는
 100번 정도의 테스트면 충분할 것으로 생각 */
const RANDOM_TEST_TRY = 100;

describe('레이싱 게임 입력 테스트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500');
  });

  it('자동차 이름을 부여하면 시도할 횟수 입력창이 노출된다.', () => {
    submitCarNames('aaa,bbb,ccc');
    cy.get('#section-race-times').should('be.visible');
  });

  it('이름은 1자이상, 5자 이하만 가능합니다.', () => {
    submitCarNames(',bbbbbb,aaa');
    cy.get('#section-race-times').should('not.to.be.visible');
  });

  it('이름은 공백일 수 없다', () => {
    submitCarNames('             ');
    cy.get('#section-race-times').should('not.to.be.visible');
  });

  it('사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.', () => {
    submitRacingGameInfo('aaa,bbb,ccc', 2);
    cy.get('#game-process-component > section').should('exist');
  });

  it('사용자가 입력한 레이싱 횟수는 1 이상이어야 한다.', () => {
    submitRacingGameInfo('aaa,bbb,ccc', 0);
    cy.get('#game-process-component > section').should('not.exist');
  });

  it('입력이 완료된 정보는 다시 입력할 수 없다.', () => {
    submitCarNames('aaa,bbb,ccc');
    cy.get('#submit-car-name').should('have.attr', 'disabled');
    submitRacingTimes(10);
    cy.get('#submit-race-times').should('have.attr', 'disabled');
  });

});

describe('레이싱 게임 기능 테스트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500');
  });

  it('자동차는 값이 4 이상일 경우 전진하고, 3 이하의 값이면 멈춘다.', () => {
    const testCar = new Car('test');
    testCar.go(4);
    expect(testCar.position).to.equal(1);
    testCar.go(3);
    expect(testCar.position).to.equal(1);
  });

  it('자동차는 전진의 조건으로 0에서 9 사이에서 랜덤값을 받는다.', () => {
    for (let i = 1; i < RANDOM_TEST_TRY; i++) {
      const randomNumber = getRandomNumber(0, i);
      expect(randomNumber >= 0 && randomNumber < i).be.equal(true);
    }
  });

  it('주어진 횟수 동안 진행한 n대의 자동차의 레이싱 상태를 표시한다.', () => {
    submitRacingGameInfo('aaa,bbb,ccc,ddd,eee,fff,ggg,hhh,iii,jjj,kkk', 5);
    cy.get('.forward-icon').should('exist');
  });

  it('자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.', () => {
    const racingTimes = 5;
    submitRacingGameInfo('aaa,bbb', racingTimes);
    waitForResult(racingTimes);
    cy.get('.car').then($cars => {
      const $carAaa = $cars[0];
      const $carBbb = $cars[1];
      let aaaPosition = $carAaa.querySelectorAll('.forward-icon').length;
      let bbbPosition = $carBbb.querySelectorAll('.forward-icon').length;

      if (aaaPosition >= bbbPosition) {
        cy.get('#winners')
          .then(element => element[0].innerText.includes('aaa'))
          .should('is.true');
      } else {
        cy.get('#winners').should('have.text', 'bbb');
      }
    });
  });

  it('우승자가 여러 명일 경우 `,`를 이용하여 구분한다.', () => {
    for (let i = 0; i < 10; i++) {
      const racingTimes = 1;
      submitRacingGameInfo('aaa,bbb', racingTimes);
      waitForResult(racingTimes);
      cy.get('.car').then($cars => {
        const $carAaa = $cars[0];
        const $carBbb = $cars[1];
        let aaaPosition = $carAaa.querySelectorAll('.forward-icon').length;
        let bbbPosition = $carBbb.querySelectorAll('.forward-icon').length;

        if (aaaPosition === bbbPosition) {
          cy.get('#winners')
            .then(element => element[0].innerText.includes('aaa, bbb'))
            .should('is.true');
        }
      });

      cy.get('#retry').click();
    }
  });

  it('사용자는 자동차 경주 게임을 다시 시작할 수 있다.', () => {
    const racingTimes = 1;
    submitRacingGameInfo('aaa', racingTimes);
    waitForResult(racingTimes)
    cy.get('#retry').click();
    cy.get('#game-result-component > section').should('not.exist');
  });

  it('자동차 경주 게임의 턴이 진행 될 때마다 1초의 텀(progressive 재생)을 두고 진행한다.', () => {
    const racingTimes = 3;
    submitRacingGameInfo("aaa,bbb", racingTimes);
    testProgressiveTerm({
      term: 1000,
      //1000ms의 허용오차는 100ms 정도면 충분할 것으로 생각
      tolerance: 100,
      racingTimes: racingTimes,
    });
  });

  it('정상적으로 게임의 턴이 다 동작된 후에는 결과를 보여주고, 2초 후에 축하의 alert 메세지를 띄운다.', () => {
    const alertStub = cy.stub();
    const carNameInput = 'aaa';
    const racingTimes = 5;

    submitRacingGameInfo(carNameInput, racingTimes);
    waitForResult(racingTimes);
    cy.get("#winners").should("be.visible");
    cy.on("window:alert", alertStub);
    cy.wait(GAME_SETTING.RENDER_RESULT_TERM).then(() => {
      expect(alertStub.getCall(0)).to.be.calledWith(
        `레이싱 게임의 우승자 ${carNameInput}님! 축하드립니다 🎊`
      );
    });
  });

});

function testProgressiveTerm({ term, tolerance, racingTimes }) {
  let times = 0;
  cy.get('#game-process-component').then((element) => {
    const target = element[0];
    let startTime = new Date().getTime();
    const observer = new MutationObserver((mutations) => {
      const currentTime = new Date().getTime();
      const takenTime = currentTime - startTime;
      expect(takenTime > term - tolerance && takenTime < term + tolerance).to.equal(true);
      startTime = currentTime;
      times++;
      if (times === racingTimes) {
        observer.disconnect();
      }
    });
    const option = {
      childList: true,
    };
    observer.observe(target, option);
  });
  cy.wait((term + tolerance) * racingTimes).then(() => {
    expect(times === racingTimes).to.equal(true);
  });
}

function submitRacingGameInfo(carNameInput, racingTimes) {
  submitCarNames(carNameInput);
  submitRacingTimes(racingTimes);
}

function submitCarNames(carNameInput) {
  cy.get('#input-car-name').type(carNameInput);
  cy.get('#submit-car-name').click();
}

function submitRacingTimes(racingTimes) {
  cy.get('#input-race-times').type(`${racingTimes}`);
  cy.get('#submit-race-times').click();
}

function waitForResult(racingTimes) {
  cy.wait(racingTimes * GAME_SETTING.PROCESS_TERM);
}
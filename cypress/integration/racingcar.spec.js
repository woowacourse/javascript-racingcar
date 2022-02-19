import { RULES, DELAY, CONGRATS_MESSAGE, SELECTOR } from '../../src/constants/index.js';

const URL = '../index.html';
const VALID_CAR_NAMES = 'east,west,south,north,all';
const VALID_RACING_COUNT = 5;

const createAlertStub = () => {
  const alertStub = cy.stub();

  cy.on('window:alert', alertStub);

  return alertStub;
};

describe('자동차 이름 입력 기능 테스트', () => {
  beforeEach(() => {
    cy.visit(URL);
  });

  it('자동차 이름을 올바르게 입력한다.', () => {
    //given
    const alertStub = createAlertStub();

    //when
    cy.inputCarName(VALID_CAR_NAMES);

    //then
    cy.get(`#${SELECTOR.CAR_NAMES_BUTTON}`)
      .click()
      .then(() => {
        expect(alertStub).to.not.be.called;
      });

    cy.get(`#${SELECTOR.RACING_COUNT_FORM}`).should('be.visible');
  });

  it('자동차 이름은 최소 1개 이상 입력해야 한다.', () => {
    //given
    const alertStub = createAlertStub();

    //when - input element의 default value가 ''이다.

    //then
    cy.get(`#${SELECTOR.CAR_NAMES_BUTTON}`)
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it('자동차 이름은 5자 이하만 가능하다.', () => {
    //given
    const alertStub = createAlertStub();

    //when
    cy.inputCarName('woowacourse, west, south, north, all');

    //then
    cy.get(`#${SELECTOR.CAR_NAMES_BUTTON}`)
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it('자동차 이름은 공백을 입력할 수 없다.', () => {
    //given
    const alertStub = createAlertStub();

    //when
    cy.inputCarName('east, , south, north, all');

    //then
    cy.get(`#${SELECTOR.CAR_NAMES_BUTTON}`)
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });
});

describe('시도할 횟수 입력 기능 테스트', () => {
  beforeEach(() => {
    cy.visit(URL);
    cy.submitValidCarName(VALID_CAR_NAMES);
  });

  it('시도할 횟수를 올바르게 입력한다.', () => {
    //given
    const alertStub = createAlertStub();

    //when
    cy.inputRacingCount(VALID_RACING_COUNT);

    //then
    cy.get(`#${SELECTOR.RACING_COUNT_BUTTON}`)
      .click()
      .then(() => {
        expect(alertStub).to.not.be.called;
      });
  });

  it('시도할 횟수는 공백을 입력할 수 없다.', () => {
    //given
    const alertStub = createAlertStub();

    //when - input element의 default value가 ''이다.

    //then
    cy.get(`#${SELECTOR.RACING_COUNT_BUTTON}`)
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it('시도할 횟수는 자연수만 입력한다.', () => {
    //given
    const alertStub = createAlertStub();

    //when
    cy.inputRacingCount(-1);

    //then
    cy.get(`#${SELECTOR.RACING_COUNT_BUTTON}`)
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });
});

describe('자동차 경주 진행 상황 기능 테스트', () => {
  beforeEach(() => {
    cy.visit(URL);
    cy.submitValidCarName(VALID_CAR_NAMES);
    cy.submitValidRacingCount(VALID_RACING_COUNT);
    cy.delay(VALID_RACING_COUNT);
  });

  it('자동차 이름이 올바르게 렌더링되는지 확인한다.', () => {
    const carNameList = VALID_CAR_NAMES.split(',');

    //then
    cy.get(`.${SELECTOR.RACING_CAR_NAME}`).each((carName, index) => {
      expect(carName.text()).to.equal(carNameList[index]);
    });
  });

  it('자동차 경주 최종 우승자가 올바르게 출력되는지 확인한다.', () => {
    const winnerList = [];
    let maxDistance = -1;

    //then
    cy.get(`.${SELECTOR.RACING_CAR_PROGRESS}`)
      .each((progress) => {
        maxDistance = Math.max(maxDistance, progress.children().length);
      })
      .then(() => {
        cy.get(`.${SELECTOR.RACING_CAR_ITEM}`).each((item) => {
          const progressList = item.find(`.${SELECTOR.RACING_CAR_PROGRESS}`).children();

          if (progressList.length === maxDistance) {
            const carName = item.find(`.${SELECTOR.RACING_CAR_NAME}`).text();
            winnerList.push(carName);
          }
        });
      })
      .then(() => {
        const result = winnerList.join(RULES.WINNER_LIST_SEPERATOR);
        cy.get(`#${SELECTOR.FINAL_WINNER_RESULT}`).should('have.text', result);
      });
  });
});

describe('자동차 경주 우승자 축하 메세지 출력 테스트', () => {
  beforeEach(() => {
    cy.visit(URL);
    cy.submitValidCarName(VALID_CAR_NAMES);
    cy.submitValidRacingCount(VALID_RACING_COUNT);
  });

  it('자동차 게임의 턴인 정상적으로 다 동작된 후, 2초 후에 경고창이 발생한다.', () => {
    //given
    const alertStub = createAlertStub();
    const totalDelayTime = VALID_RACING_COUNT * DELAY.RACE_TIME + DELAY.RESULT_TIME;

    //when
    cy.wait(totalDelayTime).then(() => {
      //then
      expect(alertStub.getCall(0)).to.be.calledWith(CONGRATS_MESSAGE);
    });
  });
});

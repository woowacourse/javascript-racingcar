import { ID, CLASS, RULES, DELAY, CONGRATS_MESSAGE } from '../../src/constants/index.js';

const URL = 'http://localhost:61005/';
const CAR_NAMES = 'east,west,south,north,all';
const RACING_COUNT = 5;

const inputCarName = (carName) => {
  cy.get(`#${ID.CAR_NAMES_INPUT}`).type(carName);
};

const inputRacingCount = (racingCount) => {
  cy.get(`#${ID.RACING_COUNT_INPUT}`).type(racingCount);
};

const triggerCarNameSubmitEvent = () => {
  inputCarName(CAR_NAMES);
  cy.get(`.${CLASS.INPUT_BTN}`).eq(0).click();
};

const triggerRacingCountSubmitEvent = () => {
  inputRacingCount(RACING_COUNT);
  cy.get(`.${CLASS.INPUT_BTN}`).eq(1).click();
};

const delay = () => {
  const miliSecond = (RACING_COUNT + 1) * DELAY.RACE_TIME;
  cy.wait(miliSecond);
};

describe('자동차 이름 입력 기능 테스트', () => {
  beforeEach(() => {
    cy.visit(URL);
  });

  it('자동차 이름을 올바르게 입력한다.', () => {
    inputCarName('east,west,south,north,all');

    const stub = cy.stub();

    cy.on('window:alert', stub);

    cy.get(`.${CLASS.INPUT_BTN}`)
      .eq(0)
      .click()
      .then(() => {
        expect(stub).to.not.be.called;
      });

    cy.get(`#${ID.RACING_COUNT_FORM}`).should('be.visible');
  });

  it('자동차 이름은 최소 1개 이상 입력해야 한다.', () => {
    const stub = cy.stub();

    cy.on('window:alert', stub);

    cy.get(`.${CLASS.INPUT_BTN}`)
      .eq(0)
      .click()
      .then(() => {
        expect(stub).to.be.called;
      });
  });

  it('자동차 이름은 5자 이하만 가능하다.', () => {
    inputCarName('woowacourse, west, south, north, all');

    const stub = cy.stub();

    cy.on('window:alert', stub);

    cy.get(`.${CLASS.INPUT_BTN}`)
      .eq(0)
      .click()
      .then(() => {
        expect(stub).to.be.called;
      });
  });

  it('자동차 이름은 공백을 입력할 수 없다.', () => {
    inputCarName('east, , south, north, all');

    const stub = cy.stub();

    cy.on('window:alert', stub);

    cy.get(`.${CLASS.INPUT_BTN}`)
      .eq(0)
      .click()
      .then(() => {
        expect(stub).to.be.called;
      });
  });
});

describe('시도할 횟수 입력 기능 테스트', () => {
  beforeEach(() => {
    cy.visit(URL);
    triggerCarNameSubmitEvent();
  });

  it('시도할 횟수를 올바르게 입력한다.', () => {
    inputRacingCount(10);

    const stub = cy.stub();

    cy.on('window:alert', stub);

    cy.get(`.${CLASS.INPUT_BTN}`)
      .eq(1)
      .click()
      .then(() => {
        expect(stub).to.not.be.called;
      });
  });

  it('시도할 횟수는 공백을 입력할 수 없다.', () => {
    const stub = cy.stub();

    cy.on('window:alert', stub);

    cy.get(`.${CLASS.INPUT_BTN}`)
      .eq(1)
      .click()
      .then(() => {
        expect(stub).to.be.called;
      });
  });

  it('시도할 횟수는 자연수만 입력한다.', () => {
    inputRacingCount(-1);

    const stub = cy.stub();

    cy.on('window:alert', stub);

    cy.get(`.${CLASS.INPUT_BTN}`)
      .eq(1)
      .click()
      .then(() => {
        expect(stub).to.be.called;
      });
  });
});

describe('자동차 경주 진행 상황 기능 테스트', () => {
  beforeEach(() => {
    cy.visit(URL);
    triggerCarNameSubmitEvent();
    triggerRacingCountSubmitEvent();
    delay();
  });

  it('자동차 이름이 올바르게 렌더링되는지 확인한다.', () => {
    const carNameList = CAR_NAMES.split(',');

    cy.get(`.${CLASS.RACING_CAR_NAME}`).each((carName, index) => {
      expect(carName.text()).to.equal(carNameList[index]);
    });
  });

  it('자동차 경주 최종 우승자가 올바르게 출력되는지 확인한다.', () => {
    const finalWinner = [];
    let maxDistance = -1;

    cy.get(`.${CLASS.RACING_CAR_PROGRESS}`)
      .each((progress) => {
        maxDistance = Math.max(maxDistance, progress.children().length);
      })
      .then(() => {
        cy.get(`.${CLASS.RACING_CAR_ITEM}`).each((item) => {
          const progressList = item.find(`.${CLASS.RACING_CAR_PROGRESS}`).children();

          if (progressList.length === maxDistance) {
            finalWinner.push(item.find(`.${CLASS.RACING_CAR_NAME}`).text());
          }
        });
      })
      .then(() => {
        const result = finalWinner.join(RULES.WINNER_LIST_SEPERATOR);
        cy.get(`#${ID.FINAL_WINNER_RESULT}`).should('have.text', result);
      });
  });
});

describe('자동차 경주 우승자 축하 메세지 출력 테스트', () => {
  beforeEach(() => {
    cy.visit(URL);
    triggerCarNameSubmitEvent();
    triggerRacingCountSubmitEvent();
  });

  it('자동차 게임의 턴인 정상적으로 다 동작된 후, 2초 후에 경고창이 발생한다.', () => {
    const totalDelayTime = RACING_COUNT * DELAY.RACE_TIME + DELAY.RESULT_TIME;

    const stub = cy.stub();

    cy.on('window:alert', stub);

    cy.wait(totalDelayTime).then(() => {
      expect(stub.getCall(0)).to.be.calledWith(CONGRATS_MESSAGE);
    });
  });
});

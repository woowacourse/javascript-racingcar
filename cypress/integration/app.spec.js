<<<<<<< HEAD
import { ID, CLASS, winnerMesssage } from "../../src/js/utils/constants.js";

const invalidInputNames = "east,west,south,north,jasmin";
const inputNames = "east,west,south,north";
=======
import {
  ID,
  CLASS,
  WINNER_TEMPLATE,
  GAME_NUMBERS,
} from '../../src/js/utils/constants.js';

const invalidInputNames = 'east,west,south,north,jasmin';
const inputNames = 'east,west,south,north';
>>>>>>> step2-kwannee
const racingCount = 5;

const inputCarName = (name) => {
  cy.get(`#${ID.CAR_NAME_INPUT}`).type(name);
};
const clickCarName = () => {
  cy.get(`#${ID.CAR_NAME_BUTTON}`).click();
};
const submitCarName = (name) => {
  inputCarName(name);
  clickCarName();
};

const inputRacingCount = (count) => {
  cy.get(`#${ID.RACING_COUNT_INPUT}`).type(count);
};

const clickRacingCount = () => {
  cy.get(`#${ID.RACING_COUNT_BUTTON}`).click();
};

const submitRacingCount = (count) => {
  inputRacingCount(count);
  clickRacingCount();
};

<<<<<<< HEAD
describe("자동차 이름", () => {
  beforeEach(() => {
    cy.visit("index.html");
  });

  it("자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.", () => {
    const alertStub = cy.stub();
    cy.on("window:alert", alertStub);
=======
describe('자동차 이름', () => {
  beforeEach(() => {
    cy.visit('index.html');
  });

  it('자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
>>>>>>> step2-kwannee
    inputCarName(invalidInputNames);
    cy.get(`#${ID.CAR_NAME_BUTTON}`)
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

<<<<<<< HEAD
  it("자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.", () => {
    const splitedNames = inputNames.split(",");
=======
  it('자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.', () => {
    const splitedNames = inputNames.split(',');
>>>>>>> step2-kwannee
    submitCarName(inputNames);
    submitRacingCount(racingCount);
    cy.get(`.${CLASS.CAR_NAME}`).each((racingResult, idx) => {
      expect(racingResult.text()).to.equal(splitedNames[idx]);
    });
  });
});

<<<<<<< HEAD
describe("시도 횟수", () => {
  beforeEach(() => {
    cy.visit("index.html");
  });

  it("사용자는 몇번의 이동을 할것인지 입력할수 있어야 한다", () => {
    submitCarName(inputNames);
    submitRacingCount(racingCount);
    cy.get(`.${CLASS.RACING_RESULT}`).should("exist");
  });

  it("자동차 경주 횟수를 아무것도 입력하지 않은 경우 경고창을 띄운다.", () => {
    const alertStub = cy.stub();
    cy.on("window:alert", alertStub);
=======
describe('시도 횟수', () => {
  beforeEach(() => {
    cy.visit('index.html');
  });

  it('사용자는 몇번의 이동을 할것인지 입력할수 있어야 한다', () => {
    submitCarName(inputNames);
    submitRacingCount(racingCount);
    cy.get(`.${CLASS.RACING_RESULTS}`).should('exist');
  });

  it('자동차 경주 횟수를 아무것도 입력하지 않은 경우 경고창을 띄운다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
>>>>>>> step2-kwannee
    submitCarName(inputNames);
    cy.get(`#${ID.RACING_COUNT_BUTTON}`)
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });
});

<<<<<<< HEAD
describe("우승자 출력 테스트", () => {
  beforeEach(() => {
    cy.visit("index.html");
  });

  it("자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다, 우승자가 2명이상인 경우 , 로 구분한다", () => {
    submitCarName(inputNames);
    submitRacingCount(racingCount);

    let max = -1;
    cy.get(`.${CLASS.RACING_RESULT}`).each((racingResult) => {
=======
describe('우승자 출력 테스트', () => {
  beforeEach(() => {
    cy.visit('index.html');
  });

  it('자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다, 우승자가 2명이상인 경우 , 로 구분한다', () => {
    submitCarName(inputNames);
    submitRacingCount(racingCount);

    cy.wait(racingCount * GAME_NUMBERS.DELAY_PER_RACE);

    let max = -1;
    cy.get(`.${CLASS.RACING_INFO}`).each((racingResult) => {
>>>>>>> step2-kwannee
      max = Math.max(max, racingResult.children().length);
    });

    const winners = [];
<<<<<<< HEAD
    cy.get(`.${CLASS.RACING_RESULT}`)
      .each((racingResult) => {
        if (max === racingResult.children().length) {
          winners.push(racingResult.find(".car-name").text());
=======
    cy.get(`.${CLASS.RACING_INFO}`)
      .each((racingResult) => {
        if (max === racingResult.children().length) {
          winners.push(racingResult.find(`.${CLASS.CAR_NAME}`).text());
>>>>>>> step2-kwannee
        }
      })
      .then(() => {
        cy.get(`.${CLASS.WINNERS}`).should(
<<<<<<< HEAD
          "have.text",
          `${winnerMesssage(winners.join(", "))}`
        );
      });
  });
=======
          'have.text',
          `${WINNER_TEMPLATE(winners.join(', '))}`,
        );
      });
  });

  it('자동차 경주 게임을 완료하고 2초 뒤 축하 메세지를 띄운다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    submitCarName(inputNames);
    submitRacingCount(racingCount);

    cy.wait(racingCount * GAME_NUMBERS.DELAY_PER_RACE);
    cy.wait(2 * GAME_NUMBERS.DELAY_PER_RACE).then(() => {
      expect(alertStub).to.be.called;
    });
  });
>>>>>>> step2-kwannee
});

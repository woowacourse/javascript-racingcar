const baseUrl = "../../index.html";
const SELECTOR = {
  CAR_NAMES_INPUT: "#car-names-input",
  CAR_NAMES_SUBMIT: "#car-names-submit",
  RACING_COUNT_INPUT: "#racing-count-input",
  RACING_COUNT_SUBMIT: "#racing-count-submit",
  RACING_RESULT: "#racing-result",
  RACING_WINNER: "#racing-winner",
  RESTART_BUTTON: "#restart-button",
};

const submitCarNames = carNames => {
  const { CAR_NAMES_INPUT, CAR_NAMES_SUBMIT } = SELECTOR;

  cy.get(CAR_NAMES_INPUT).type(carNames);
  cy.get(CAR_NAMES_SUBMIT).click();
  cy.get(CAR_NAMES_INPUT).should("have.attr", "readonly", "readonly");
  cy.get(CAR_NAMES_SUBMIT).should("have.attr", "disabled", "disabled");
};

const submitRacingCount = racingCnt => {
  const { RACING_COUNT_INPUT, RACING_COUNT_SUBMIT } = SELECTOR;

  cy.get(RACING_COUNT_INPUT).type(racingCnt);
  cy.get(RACING_COUNT_SUBMIT).click();
  cy.get(RACING_COUNT_INPUT).should("have.attr", "readonly", "readonly");
  cy.get(RACING_COUNT_SUBMIT).should("have.attr", "disabled", "disabled");
};

const submitCarNamesAlert = () => {
  const alertStub = cy.stub();

  cy.on("window:alert", alertStub);
  cy.get(SELECTOR.CAR_NAMES_SUBMIT)
    .click()
    .then(() => {
      expect(alertStub).to.be.called;
    });
};

const submitRacingCountAlert = () => {
  const alertStub = cy.stub();

  cy.on("window:alert", alertStub);
  cy.get(SELECTOR.RACING_COUNT_SUBMIT)
    .click()
    .then(() => {
      expect(alertStub).to.be.called;
    });
};

const countAdvance = carName => {
  let count = [];

  cy.get(`#${carName}-container`)
    .find(".position-arrow")
    .then(position => {
      count.push(Cypress.$(position).length);
    });

  cy.log(count[0]);

  return count[0];
};

const getRacingResult = carNamesArray => {
  const results = [];

  carNamesArray.forEach(car => {
    cy.get(`#${car}-container`)
      .find(".position-arrow")
      .then(position => {
        results.push({
          name: car,
          location: Cypress.$(position).length,
        });
      });
  });

  return results;
};

const getWinnerScore = results => {
  let winnerScore = 0;

  for (let index = 0; index < results.length; index++) {
    if (winnerScore < car.location) {
      winnerScore = results[index].location;
    }
  }

  return winnerScore;
};

describe("정상 시나리오에 대해 만족해야 한다.", () => {
  beforeEach(() => {
    cy.visit(baseUrl);
    cy.clock();
  });

  afterEach(() => {
    cy.clock().then(clock => {
      clock.restore();
    });
    cy.reload();
  });

  it("사용자가 자동차 이름을 쉼표로 구분하여 5자 이하로 알맞게 입력했을 경우, 성공적으로 입력창이 비활성화 상태가 된다.", () => {
    submitCarNames("movie, halee");
  });

  it("사용자가 레이싱 횟수를 1이상 정수로 입력했을 경우, 성공적으로 입력창이 비활성화 상태가 된다.", () => {
    submitCarNames("movie, halee");
    submitRacingCount(10);
  });

  it("게임이 종료된 후 우승자를 확인할 수 있어야 한다. ", () => {
    const carNames = ["east", "west", "north"];
    const racingCount = 5;
    const delayPerTurn = 1000;
    const totalDelay = delayPerTurn * (racingCount + 1);
    const winners = [];
    let winnerScore = 0;
    let racingResult = [];

    submitCarNames(carNames.join(","));
    submitRacingCount(racingCount);

    cy.tick(totalDelay)
      .then(() => {
        racingResult = getRacingResult(carNames);
      })
      .then(() => {
        racingResult.sort((left, right) => right.location - left.location);
        winnerScore = racingResult[0].location;
      })
      .then(() => {
        racingResult.forEach(car => {
          if (car.location === winnerScore) {
            winners.push(car.name);
          }
        });
      })
      .then(() => {
        cy.get(SELECTOR.RACING_WINNER).should("have.text", winners.join(", "));
      });
  });

  it("게임을 종료되고 2초 뒤 우승자를 축하하는 메시지가 나타난다.", () => {
    const carNames = "east, west, north";
    const racingCount = 5;
    const delayPerTurn = 1000;
    const delayForCelebrating = 2000;
    const totalDelay = delayPerTurn * (racingCount + 1) + delayForCelebrating;
    const alertStub = cy.stub();

    cy.on("window:alert", alertStub);

    submitCarNames(carNames);
    submitRacingCount(racingCount);
    cy.tick(totalDelay).then(() => {
      expect(alertStub).to.be.called;
    });
  });

  it("'다시 시작하기' 버튼을 누르면 화면 내의 모든 값이 초기화되어야 한다.", () => {
    const carNames = "east, west, north";
    const racingCount = 5;
    const delayPerTurn = 1000;
    const totalDelay = delayPerTurn * (racingCount + 1);

    submitCarNames(carNames);
    submitRacingCount(racingCount);
    cy.tick(totalDelay).then(() => {
      cy.get(SELECTOR.RESTART_BUTTON).click();
      cy.get(SELECTOR.CAR_NAMES_INPUT).should("have.value", "");
      cy.get(SELECTOR.RACING_COUNT_INPUT).should("have.value", "");
      cy.get(SELECTOR.RACING_RESULT).should("have.value", "");
      cy.get(SELECTOR.RACING_WINNER).should("have.value", "");
    });
  });
});

describe("비정상 시나리오에 대해서는 사용자에게 경고를 준다.", () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  afterEach(() => {
    cy.reload();
  });

  it("자동차 이름이 아무것도 입력되지 않았을 경우 사용자에게 경고를 준다.", () => {
    submitCarNamesAlert();
  });

  it("자동차 이름의 길이가 5자를 초과했을 경우 사용자에게 경고를 준다.", () => {
    const invalidInput = "loveracingcar";

    cy.get(SELECTOR.CAR_NAMES_INPUT).type(invalidInput);
    submitCarNamesAlert();
  });

  it("중복된 이름의 자동차가 입력될 경우 사용자에게 경고를 준다.", () => {
    const invalidInput = "woowa,course,woowa";

    cy.get(SELECTOR.CAR_NAMES_INPUT).type(invalidInput);
    submitCarNamesAlert();
  });

  it("레이싱 횟수가 정수가 아닌 경우 사용자에게 경고를 준다.", () => {
    const invalidInput = 12.5;

    submitCarNames("movie, halee");
    cy.get(SELECTOR.RACING_COUNT_INPUT).type(invalidInput);
    submitRacingCountAlert();
  });

  it("레이싱 횟수가 1이상의 수가 아닌 경우 사용자에게 경고를 준다.", () => {
    const invalidInput = 0;

    submitCarNames("movie, halee");
    cy.get(SELECTOR.RACING_COUNT_INPUT).type(invalidInput);
    submitRacingCountAlert();
  });
});

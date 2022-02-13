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

const findLocation = (carNames) => {
  const carsInfo = [];

  carNames.forEach(carName => {
    cy.get(`#${carName}-container`)
      .find(".position-arrow")
      .then(position => {
        carsInfo.push({
          name: carName,
          location: Cypress.$(position).length,
        });
      });
  }, () => getWinner(carsInfo));
};

const getWinner = (carsInfo) => {
  const { RACING_WINNER } = SELECTOR;
  let maxLocation = 0;
  let winner = "";

  carsInfo.forEach(carInfo => {
    const { name, location } = carInfo;
    if (carInfo.location > maxLocation) {
      maxLocation = location;
      winner = name;
    }
  }, () => cy.get(RACING_WINNER).should("have.text", winner));
};

describe("정상 시나리오에 대해 만족해야 한다.", () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  afterEach(() => {
    cy.reload();
  });

  it("자동차 이름 입력이 제대로 되었을 경우, 입력창과 버튼이 모두 비활성화가 되어야 한다.", () => {
    submitCarNames("movie, halee");
  });

  it("레이싱 횟수 입력이 제대로 되었을 경우, 입력창과 버튼이 모두 비활성화가 되어야 한다.", () => {
    submitCarNames("movie, halee");
    submitRacingCount(10);
  });

  it("게임을 종료하고 우승자를 확인할 수 있어야 한다.", () => {
    const carNames = ["movie", "halee", "east", "west", "south", "north"];
    submitCarNames(carNames.join(","));
    submitRacingCount(10);
    findLocation(carNames);
  });

  it("다시 시작 버튼을 누르면 화면 내의 모든 값이 초기화되어야 한다.", () => {
    const {
      CAR_NAMES_INPUT,
      RACING_COUNT_INPUT,
      RACING_RESULT,
      RACING_WINNER,
      RESTART_BUTTON,
    } = SELECTOR;
    submitCarNames("movie, halee");
    submitRacingCount(10);
    cy.get(RESTART_BUTTON).click();
    cy.get(CAR_NAMES_INPUT).should("have.value", "");
    cy.get(RACING_COUNT_INPUT).should("have.value", "");
    cy.get(RACING_RESULT).should("have.value", "");
    cy.get(RACING_WINNER).should("have.value", "");
  });
});

describe("비정상 시나리오에 대해 사용자에게 alert를 띄운다.", () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  afterEach(() => {
    cy.reload();
  });

  it("자동차 이름이 아무것도 입력되지 않았을 경우 사용자에게 alert를 띄운다.", () => {
    submitCarNamesAlert();
  });

  it("이름의 길이가 5자를 초과했을 경우 alert를 띄운다.", () => {
    let invalidInput = "racingcar";
    cy.get(SELECTOR.CAR_NAMES_INPUT).type(invalidInput);
    submitCarNamesAlert();
    cy.reload();

    invalidInput = "movie,loveracingcar,halee";
    cy.get(SELECTOR.CAR_NAMES_INPUT).type(invalidInput);
    submitCarNamesAlert();
  });

  it("중복된 이름의 자동차가 입력될 경우 alert를 띄운다.", () => {
    const invalidInput = "woowa,course,woowa";

    cy.get(SELECTOR.CAR_NAMES_INPUT).type(invalidInput);
    submitCarNamesAlert();
  });

  it("레이싱 횟수가 정수가 아닌 경우 alert를 띄운다.", () => {
    const invalidInput = 12.5;

    submitCarNames("movie, halee");
    cy.get(SELECTOR.RACING_COUNT_INPUT).type(invalidInput);
    submitRacingCountAlert();
  });

  it("1이상의 수가 아닌 경우 alert를 띄운다.", () => {
    const invalidInput = 0;

    submitCarNames("movie, halee");
    cy.get(SELECTOR.RACING_COUNT_INPUT).type(invalidInput);
    submitRacingCountAlert();
  });
});

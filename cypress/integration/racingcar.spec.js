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

describe("정상 시나리오에 대해 만족해야 한다.", () => {
  before(() => {
    Cypress.Commands.add("stubRandomReturns", (returnValues = []) => {
      const randomStub = cy.stub();

      returnValues.forEach((value, index) => {
        randomStub.onCall(index).returns(value);
      });

      cy.visit(baseUrl, {
        onBeforeLoad: window => {
          window.MissionUtils = {
            Random: {
              pickNumberInRange: randomStub,
            },
          };
        },
      });
    });
  });

  beforeEach(() => {
    cy.stubRandomReturns([7, 7]);
  });

  it("자동차 이름 입력이 제대로 되었을 경우, 입력창과 버튼이 모두 비활성화가 되어야 한다.", () => {
    submitCarNames("movie, halee");
  });

  it("레이싱 횟수 입력이 제대로 되었을 경우, 입력창과 버튼이 모두 비활성화가 되어야 한다.", () => {
    submitCarNames("movie, halee");
    submitRacingCount(10);
  });

  it("게임을 종료하고 우승자를 확인할 수 있어야 한다.", () => {
    submitCarNames("movie, halee");
    submitRacingCount(10);
    cy.get(SELECTOR.RACING_WINNER).should("have.text", "movie, halee");
  });

  it("다시 시작 버튼을 누르면 화면 내의 모든 값이 초기화되어야 한다.", () => {
    const {
      CAR_NAMES_INPUT,
      CAR_NAMES_SUBMIT,
      RACING_COUNT_INPUT,
      RACING_COUNT_SUBMIT,
      RACING_RESULT,
      RACING_WINNER,
      RESTART_BUTTON,
    } = SELECTOR;
    cy.get(RESTART_BUTTON).click();
    cy.get(CAR_NAMES_INPUT).should("have.value", "");
    cy.get(RACING_COUNT_INPUT).should("have.value", "");
    cy.get(RACING_RESULT).should("have.value", "");
    cy.get(RACING_WINNER).should("have.value", "");
  });
});

describe("비정상 시나리오에 대해 사용자에게 alert를 띄운다.", () => {
  before(() => {
    Cypress.Commands.add("stubRandomReturns", (returnValues = []) => {
      const randomStub = cy.stub();

      returnValues.forEach((value, index) => {
        randomStub.onCall(index).returns(value);
      });

      cy.visit(baseUrl, {
        onBeforeLoad: window => {
          window.MissionUtils = {
            Random: {
              pickNumberInRange: randomStub,
            },
          };
        },
      });
    });
  });

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  afterEach(() => {
    cy.reload();
  });

  it("자동차 이름이 아무것도 입력되지 않았을 경우 사용자에게 alert를 띄운다.", () => {
    const alertStub = cy.stub();

    cy.on("window:alert", alertStub);
    cy.get("#car-names-submit")
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it("이름의 길이가 5자를 초과했을 경우 alert를 띄운다.", () => {
    const alertStub = cy.stub();
    const invalidInput = "loveracingcar";

    cy.on("window:alert", alertStub);

    cy.get("#car-names-input").type(invalidInput);
    cy.get("#car-names-submit")
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it("중복된 이름의 자동차가 입력될 경우 alert를 띄운다.", () => {
    const alertStub = cy.stub();
    const invalidInput = "woowa,course,woowa";

    cy.on("window:alert", alertStub);

    cy.get("#car-names-input").type(invalidInput);
    cy.get("#car-names-submit")
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it("레이싱 횟수가 정수가 아닌 경우 alert를 띄운다.", () => {
    const alertStub = cy.stub();
    const invalidInput = 12.5;

    cy.on("window:alert", alertStub);

    cy.get("#car-names-input").type("movie, halee");
    cy.get("#car-names-submit").click();
    cy.get("#racing-count-input").type(invalidInput);
    cy.get("#racing-count-submit")
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it("1이상의 수가 아닌 경우 alert를 띄운다.", () => {
    const alertStub = cy.stub();
    const invalidInput = 0;

    cy.on("window:alert", alertStub);

    cy.get("#car-names-input").type("movie, halee");
    cy.get("#car-names-submit").click();
    cy.get(SELECTOR.RACING_COUNT_INPUT).type(invalidInput);
    cy.get(SELECTOR.RACING_COUNT_SUBMIT)
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });
});

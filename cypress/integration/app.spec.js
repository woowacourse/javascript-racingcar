const invalidInputNames = "east,west,south,north,jasmin";
const inputNames = "east,west,south,north";

const alertStub = cy.stub();
cy.on("window:alert", alertStub);

const inputCarName = (name) => {
  cy.get("#car-names-input").type(name);
};
const clickCarName = () => {
  cy.get("#car-names-button").click();
};
const submitCarName = (name) => {
  inputCarName(name);
  clickCarName();
};

const inputRacingCount = (count) => {
  cy.get("#racing-count-input").type(count);
};

const clickRacingCount = () => {
  cy.get("#racing-count-button").click();
};

const submitRacingCount = (count) => {
  inputRacingCount(count);
  clickRacingCount();
};

describe("자동차 이름", () => {
  beforeEach(() => {
    cy.visit("index.html");
  });

  it("자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.", () => {
    inputCarName(invalidInputNames);
    cy.get("#car-names-button")
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it("자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.", () => {
    const splitedNames = inputNames.split(",");
    submitCarName(inputNames);
    submitRacingCount(3);
    cy.get(".car-name").each((racingResult, idx) => {
      expect(racingResult.text()).to.equal(splitedNames[idx]);
    });
  });
});

describe("시도 횟수", () => {
  beforeEach(() => {
    cy.visit("index.html");
  });

  it("사용자는 몇번의 이동을 할것인지 입력할수 있어야 한다", () => {
    submitCarName(inputNames);
    submitRacingCount(3);
    cy.get(".racing-result").should("exist");
  });

  it("자동차 경주 횟수를 아무것도 입력하지 않은 경우 경고창을 띄운다.", () => {
    submitCarName(inputNames);
    cy.get("#racing-count-button")
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });
});

describe("우승자 출력 테스트", () => {
  beforeEach(() => {
    cy.visit("index.html");
  });

  it("자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다, 우승자가 2명이상인 경우 , 로 구분한다", () => {
    submitCarName(inputNames);
    submitRacingCount(5);

    let max = -1;
    cy.get(".racing-result").each((racingResult) => {
      max = Math.max(max, racingResult.children().length);
    });

    const winners = [];
    cy.get(".racing-result")
      .each((racingResult) => {
        if (max === racingResult.children().length) {
          winners.push(racingResult.find(".car-name").text());
        }
      })
      .then(() => {
        cy.get(".winners").should(
          "have.text",
          `🏆 최종 우승자: ${winners.join(", ")} 🏆`
        );
      });
  });
});

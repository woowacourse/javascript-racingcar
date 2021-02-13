class CypressWrapper {
  type = (name, value) => {
    try {
      this._getCy(name).type(value);
    } catch (error) {
      new Error(error);
    }

    return this;
  };

  click = name => {
    try {
      this._getCy(name).click();
    } catch (error) {
      new Error(error);
    }

    return this;
  };

  should = (name, ...param) => {
    try {
      this._getCy(name).should(...param);
    } catch (error) {
      new Error(error);
    }

    return this;
  };

  _getCy = name => {
    return cy.get(name);
  };
}

const cw = new CypressWrapper();

function testCar(value) {
  cw.type("#car-input", value)
    .click("#car-btn")
    .should("#count", "have.css", "display", "block");
}

function testCount(value) {
  cw.type("#count-input", value)
    .click("#count-btn")
    .should("#process", "have.css", "display", "block");
}

describe("ui-play", () => {
  before(() => {
    cy.visit("http://localhost:5500/");
  });

  it("자동차 섹션을 입력하고 버튼을 클릭하면 횟수 영역이 보여진다", () => {
    testCar("a,b,c,d");
  });

  it("시도 횟수를 입력하고 버튼을 클릭하면 진행 영역이 보여진다", () => {
    testCount(5);
  });

  it("자동차 이름을 입력한 순서대로 자동차들을 생성한다", () => {
    const cars = ["a", "b", "c", "d"];
    cy.get(".car-player").each((v, i, arr) => {
      cw.should(v, "have.text", cars[i]);
    });
  });

  it("입력한 시도 횟수 만큼 1초 주기로 각 자동차에 스피너 div가 존재", () => {
    for (let i = 0; i < 5; i++) {
      cy.get(".process-car").each(v => {
        cy.get(v).find(".spinner-container").should("exist");
      });
      cy.clock();
      clock.tick(1000);
    }
  });

  it("시도 횟수보다 화살표의 개수가 적거나 같아야한다", () => {
    cy.get(".process-car").each(v => {
      if (v.find(".forward-icon").length > 0) {
        cy.get(v).find(".forward-icon").its("length").should("be.lte", 5);
      }
    });
  });

  it("가장많은 화살표를 가지고 있는 차의 이름이 우승자에 있어야 한다", () => {
    let largestCount = 0;
    cy.get(".process-car")
      .each(v => {
        if (v.find(".forward-icon").length > largestCount) {
          largestCount = v.find(".forward-icon").length;
        }
      })
      .then(() => {
        cy.get(".process-car").each(v => {
          if (v.find(".forward-icon").length === largestCount) {
            const winner = v.find(".car-player")[0].outerText;
            cy.get("#result-winner").contains(winner);
          }
        });
      });
  });

  it("결과 인터페이스 출력후 2초후 우승 자동차 이름이 들어간 축하 alert 출력", () => {
    const alertStub = cy.stub();
    cy.on("window:alert", alertStub);

    let largestCount = 0;
    cy.get(".process-car")
      .each(v => {
        if (v.find(".forward-icon").length > largestCount) {
          largestCount = v.find(".forward-icon").length;
        }
      })
      .then(() => {
        cy.clock();
        cy.tick(2000);
        cy.get(".process-car").each(v => {
          if (v.find(".forward-icon").length === largestCount) {
            cy.expect(alertStub.getCall(0)).to.be.calledWith(
              v.find(".car-player")[0].outerText
            );
          }
        });
      });
  });

  it("다시 시작하기 버튼을 클릭하면 자동차 섹션만 보이고, 입력 값이 초기화된다", () => {
    cw.click("#reset-btn")
      .should("#count", "have.css", "display", "none")
      .should("#process", "have.css", "display", "none")
      .should("#result", "have.css", "display", "none");

    cy.get("#process").children().should("not.exist");
    cw.should("#car-input", "have.value", "");
  });
});

describe("ui-input-vaild-check", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5500/");
    cy.window()
      .then(win => cy.stub(win, "alert"))
      .as("alertStub");
  });

  it("자동차 이름이 5글자 초과하면 alert 출력", () => {
    testCar("overFive,a,b,c,d");
    cw.should(
      "@alertStub",
      "be.calledWith",
      "자동차 이름의 길이는 최대 5글자 입니다."
    );
  });

  it("자동차 이름에 공백 있으면 alert 출력", () => {
    testCar("a,b,,c,d");
    cw.should(
      "@alertStub",
      "be.calledWith",
      "자동차 이름은 공백이 될 수 없습니다."
    );
  });

  it("자동차 이름에 중복 있으면 alert 출력", () => {
    testCar("a,b,a,c,d");
    cw.should(
      "@alertStub",
      "be.calledWith",
      "자동차 이름은 중복이 될 수 없습니다."
    );
  });

  it("입력한 시도 횟수가 공백이면 alert 출력", () => {
    testCar("a,b,c,d");
    testCount("   ");
    cw.should(
      "@alertStub",
      "be.calledWith",
      "시도 횟수는 공백 혹은 문자가 될 수 없습니다."
    );
  });

  it("입력한 시도 횟수가 0 이하면 alert 출력", () => {
    testCar("a,b,c,d");
    testCount(-1);
    cw.should(
      "@alertStub",
      "be.calledWith",
      "시도 횟수는 0보다 작거나 같을 수 없습니다."
    );
  });

  it("입력한 시도 횟수가 소수면 alert 출력", () => {
    testCar("a,b,c,d");
    testCount(4.21);
    cw.should(
      "@alertStub",
      "be.calledWith",
      "시도 횟수는 소수가 될 수 없습니다."
    );
  });
});

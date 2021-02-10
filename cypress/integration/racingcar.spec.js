describe("ui-input-click-show", () => {
  before(() => {
    cy.visit("http://localhost:5500/");
  });

  it("자동차 섹션을 입력하고 버튼을 클릭하면 횟수 영역이 보여진다", () => {
    cy.get("#car-input").type("a,b,c,d");
    cy.get("#car-btn").click();
    cy.get("#count").should("have.css", "display", "block");
  });

  it("시도 횟수를 입력하고 버튼을 클릭하면 진행 영역이 보여진다", () => {
    cy.get("#count-input").type(5);
    cy.get("#count-btn").click();
    cy.get("#process").should("have.css", "display", "block");
  });

  it("자동차 이름을 입력한 순서대로 자동차들을 생성한다", () => {
    const cars = ["a", "b", "c", "d"];
    cy.get(".car-player").each((v, i, arr) => {
      cy.get(v).should("have.text", cars[i]);
    });
  });

  it("시도 횟수보다 화살표의 개수가 적거나 같아야한다", () => {
    cy.get("#process > .d-flex > div").each(v => {
      if (v.find(".forward-icon").length > 0) {
        cy.get(v).find(".forward-icon").its("length").should("be.lte", 5);
      }
    });
  });

  it("가장많은 화살표를 가지고 있는 차의 이름이 우승자에 있어야 한다", () => {
    let largestCount = 0;
    cy.get("#process > .d-flex > div")
      .each(v => {
        if (v.find(".forward-icon").length > largestCount) {
          largestCount = v.find(".forward-icon").length;
        }
      })
      .then(() => {
        cy.get("#process > .d-flex > div").each(v => {
          if (v.find(".forward-icon").length === largestCount) {
            const winner = v.find(".car-player")[0].outerText;
            cy.get("#result > h2").contains(winner);
          }
        });
      });
  });

  it("다시 시작하기 버튼을 클릭하면 자동차 섹션만 보이고, 입력 값이 초기화된다", () => {
    cy.get("#result button").click();
    cy.get("#count").should("have.css", "display", "none");
    cy.get("#process").should("have.css", "display", "none");
    cy.get("#result").should("have.css", "display", "none");
    cy.get("#process > .d-flex").children().should("not.exist");
    cy.get("#car-input").should("have.value", "");
    cy.get("#count-input").should("have.value", "");
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
    cy.get("#car-input").type("overFive,a,b,c,d");
    cy.get("#car-btn").click();
    cy.get("@alertStub").should(
      "be.calledWith",
      "자동차 이름의 길이는 최대 5글자 입니다."
    );
  });

  it("자동차 이름에 공백 있으면 alert 출력", () => {
    cy.get("#car-input").type("a,b,,c,d");
    cy.get("#car-btn").click();
    cy.get("@alertStub").should(
      "be.calledWith",
      "자동차 이름은 공백이 될 수 없습니다."
    );
  });

  it("자동차 이름에 중복 있으면 alert 출력", () => {
    cy.get("#car-input").type("a,b,a,c,d");
    cy.get("#car-btn").click();
    cy.get("@alertStub").should(
      "be.calledWith",
      "자동차 이름은 중복이 될 수 없습니다."
    );
  });

  it("입력한 시도 횟수가 숫자가 아니면 alert 출력", () => {
    cy.get("#car-input").type("a,b,c,d");
    cy.get("#car-btn").click();
    cy.get("#count").should("have.css", "display", "block");
    cy.get("#count-input").type("string");
    cy.get("#count-btn").click();
    cy.get("@alertStub").should(
      "be.calledWith",
      "시도 횟수는 자연수여야 합니다."
    );
  });

  it("입력한 시도 횟수가 0 이하면 alert 출력", () => {
    cy.get("#car-input").type("a,b,c,d");
    cy.get("#car-btn").click();
    cy.get("#count").should("have.css", "display", "block");
    cy.get("#count-input").type(-1);
    cy.get("#count-btn").click();
    cy.get("@alertStub").should(
      "be.calledWith",
      "시도 횟수는 0보다 작거나 같을 수 없습니다."
    );
  });

  it("입력한 시도 횟수가 소수면 alert 출력", () => {
    cy.get("#car-input").type("a,b,c,d");
    cy.get("#car-btn").click();
    cy.get("#count").should("have.css", "display", "block");
    cy.get("#count-input").type(4.21);
    cy.get("#count-btn").click();
    cy.get("@alertStub").should(
      "be.calledWith",
      "시도 횟수는 소수가 될 수 없습니다."
    );
  });
});

// TDD 방식으로 random 함수 테스트하기

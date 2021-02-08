describe("ui-input-click-show", () => {
  before(() => {
    cy.visit("http://localhost:5500/");
  });

  it("자동차 섹션을 입력하고 버튼을 클릭하면 횟수 영역이 보여진다", () => {
    cy.get("#car-input").type("a,b,c,d");
    cy.get("#car-btn").click();
    cy.get("#count").should("have.css", "display", "block");
  });

  it("횟수를 입력하고 버튼을 클릭하면 진행 영역이 보여진다", () => {
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
});

describe("ui-input-vaild-check", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5500/");
  });

  it("자동차 이름이 5글자 초과하면 alert 출력", () => {
    const alertStub = cy.stub();
    cy.on("window:alert", alertStub);

    cy.get("#car-input").type("overFive,a,b,c,d");
    cy.get("#car-btn")
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(
          "자동차 이름의 길이는 최대 5글자 입니다."
        );
      });
  });

  it("자동차 이름에 공백 있으면 alert 출력", () => {
    const alertStub = cy.stub();
    cy.on("window:alert", alertStub);

    cy.get("#car-input").type("a,b,,c,d");
    cy.get("#car-btn")
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(
          "자동차 이름은 공백이 될 수 없습니다."
        );
      });
  });

  it("입력한 시도 횟수가 숫자가 아니면 alert 출력", () => {
    const alertStub = cy.stub();
    cy.on("window:alert", alertStub);

    cy.get("#car-input").type("a,b,c,d");
    cy.get("#car-btn").click();
    cy.get("#count").should("have.css", "display", "block");
    cy.get("#count-input").type("string");
    cy.get("#count-btn")
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(
          "시도 횟수는 숫자여야 합니다."
        );
      });
  });

  it("입력한 시도 횟수가 0 이하면 alert 출력", () => {
    const alertStub = cy.stub();
    cy.on("window:alert", alertStub);

    cy.get("#car-input").type("a,b,c,d");
    cy.get("#car-btn").click();
    cy.get("#count").should("have.css", "display", "block");
    cy.get("#count-input").type(-1);
    cy.get("#count-btn")
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(
          "시도 횟수는 자연수여야 합니다."
        );
      });
  });
});

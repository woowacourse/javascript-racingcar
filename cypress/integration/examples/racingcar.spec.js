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

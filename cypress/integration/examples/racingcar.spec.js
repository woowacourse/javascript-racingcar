describe("ui-click-and-input", () => {
  before(() => {
    cy.visit("http://localhost:5500/");
  });

  it("자동차 섹션, 횟수 섹션, 진행과정 섹션이 순서대로 보여진다", () => {
    cy.get("#car-input").type("a,b,c,d");
    cy.get("#car-btn").click();
    cy.get("#count").should("have.css", "display", "block");
    cy.get("#count-input").type(5);
    cy.get("#count-btn").click();
    cy.get("#process").should("have.css", "display", "block");
  });
});

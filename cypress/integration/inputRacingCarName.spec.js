describe("자동차 이름 입력하기", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/");
  });

  it("최초 실행시 타이틀과 자동차 이름 입력란, 확인 버튼민 보인다.", () => {
    cy.get(".title-container").should("be.visible");
    cy.get(".carname-input-container").should("be.visible");
    cy.get(".lap-input-container").should("not.be.visible");
    cy.get(".game-progress-container").should("not.be.visible");
    cy.get(".game-result-container").should("not.be.visible");
  });

  it("자동차 이름은 5자 이하이다.", () => {
    //
  });

  it("자동차 이름은 두 개 이상이다.", () => {
    //
  });

  it("자동차 이름은 빈 값이 아니다.", () => {
    //
  });

  it("올바른 이름이 되었을 때", () => {
    //
  });
});

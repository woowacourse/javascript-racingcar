describe("자동차 경주 게임 테스트", () => {
  before(() => {
    cy.visit("http://127.0.0.1:5500/javascript-racingcar");
  });

  it("자동차 이름이 잘 입력되었는지 테스트합니다.", () => {
    cy.get("input[type='text']")
      .type("엘라, 그루밍 , 준,포코")
      .should("have.value", "엘라, 그루밍 , 준,포코");
  });

  it("첫번째 확인 버튼을 눌렀을 때, 시도 횟수 section이 보여지는지 테스트합니다.", () => {
    cy.get("button").first().click();
    cy.get("section.mt-5").should("exist");
  });

  it("시도할 횟수가 잘 입력되었는지 테스트합니다.", () => {
    cy.get("input[type='number']").type(5).should("have.value", 5);
    cy.get("section.mt-5 > div > button").click();
  });

  it("두번째 확인 버튼을 눌렀을 때, 결과 section이 보여지는지 테스트합니다.", () => {
    cy.get("button").first().click();
    cy.get("section.mt-4").should("exist");
  });
});

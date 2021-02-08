describe("자동차 경주 게임 테스트", () => {
  before(() => {
    cy.visit("http://127.0.0.1:5500/");
  });

  // it("자동차 이름이 입력됐을 경우", () => {
  //   cy.get("input[type='text']")
  //     .type("엘라, 그루밍 , 준,포코")
  //     .should("have.value", "엘라, 그루밍 , 준,포코");
  // });

  it("올바르지 않은 자동차 이름이 입력됐을 경우 - 1. 5자 초과일 때", () => {
    const txt = "엘라라라라라, 그루밍 , 준,포코";
    cy.get("input[type='text']").type(txt);

    cy.get(".btn").first().click();
    // 자동차 이름에 대한 Validation
    // if validation 이 잘못되면
    // alert

    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("올바르지 않은 자동차 이름이 입력되었습니다.");
    });

    // 입력 값 초기화

    // cy.get(".w-100").first().should("have.value", "");
  });

  // it("올바르지 않은 자동차 이름이 입력됐을 경우 - 2. 이름 앞뒤에 공백이 있을 때", () => {
  //   cy.get(".w-100").first().should("have.property", "top");
  // });

  // it("올바르지 않은 자동차 이름이 입력됐을 경우 - 3. 입력이 없을 때", () => {
  //   cy.get(".w-100").first().should("have.property", "top");
  // });
});

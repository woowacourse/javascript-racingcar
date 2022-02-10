describe("구현 결과가 요구사항과 일치해야 한다.", () => {
  const baseUrl = "../../index.html";

  before(() => {
    cy.visit(baseUrl);
  });

  it("잘못된 자동차 이름을 입력하면 alert가 호출되어야 한다.", () => {
    //given
    const alertStub = cy.stub();
    const invalidInput = "juunzzi";

    cy.on("window:alert", alertStub);

    //when
    cy.get("#car-name-input").type(invalidInput);

    //then
    cy.get("#car-name-btn")
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it("횟수 입력란에 음수 값이 주어지면 alert가 호출되어야 한다.", () => {
    //given
    const alertStub = cy.stub();
    const invalidInput = -1;

    cy.on("window:alert", alertStub);

    //when
    cy.get("#count-input").type(invalidInput);

    //then
    cy.get("#count-btn")
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });
});

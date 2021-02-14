describe("레이싱 우승자 테스트", () => {
  before(() => {
    cy.visit("http://localhost:5500/index.html");
  });

  it("자동차 경주 게임을 완료한 후, 누가 우승했는지 확인한다.", () => {
    let winners = [];
    let maxPosition = 0;

    cy.get("#car-names-input").type("a,b,c,d,e");
    cy.get("#car-names-submit").click();
    cy.get("#count-input").type(5);
    cy.get("#count-submit").click();

    cy.get("#racing-container > section > div > div")
      .each((element, index) => {
        const carElement = element[0];
        const length = carElement.innerText.split("\n").length;
        if (maxPosition < length) {
          maxPosition = length;
          winners = [carElement.innerText.split("\n")[0]];
        } else if (maxPosition === length) {
          winners.push(carElement.innerText.split("\n")[0]);
        }
      })
      .then(() => {
        cy.get("#winner-container > section > h2").should(
          "have.text",
          `🏆 최종 우승자: ${winners.join(", ")} 🏆`
        );
      });
  });
});

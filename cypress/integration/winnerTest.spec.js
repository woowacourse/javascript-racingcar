describe("레이싱 우승자 테스트", () => {
  before(() => {
    cy.visit("http://localhost:5500/index.html");
  });

  it("자동차 경주 게임을 완료한 후, 누가 우승했는지 확인한다.", () => {
    let winners = [];
    let maxPosition = 0;

    cy.get("#car-names-input").type("a,b,c,d,e");
    cy.get("#car-names-submit").click();
    cy.get("#count-input").type(3);
    cy.get("#count-submit").click();
    cy.wait(3000);

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
    cy.wait(2000); // alert 기다리기 용도
  });

  it("자동차 경주 게임이 완료된 후, 2초 뒤에 alert 창이 나타나는 것을 확인한다.", () => {
    cy.get("#restart-button").click();
    cy.get("#car-names-input").type("a,b,c,d,e");
    cy.get("#car-names-submit").click();
    cy.get("#count-input").type(3);
    cy.get("#count-submit").click();
    cy.wait(3000);
    cy.wait(2000); // alert 기다리기 용도

    cy.on('docuemnt:alert', (str) => {
      expect(str).to.equal("🎉 축하합니다 🎉");
    })

  });
});

describe("Racing Car 게임", () => {
  before(() => {
    cy.visit("http://localhost:5500/");
  });

  it("이름/횟수를 입력한 이후 게임결과 창에 올바르게 표시되는지 확인", () => {
    const carNames = ["EAST", "WEST", "SOUTH", "NORTH"];

    cy.get("[data-test=car-name-input]").type(carNames.join(","));
    cy.get("[data-test=car-name-button]").click();
    cy.get("[data-test=try-count-input]").type("4");
    cy.get("[data-test=car-name-input]").should("be.disabled");
    cy.get("[data-test=car-name-button]").should("be.disabled");
    cy.get("[data-test=try-count-button]").click();
    cy.get("[data-test=try-count-input]").should("be.disabled");
    cy.get("[data-test=try-count-button]").should("be.disabled");
    cy.get(".racing-result-container").should("be.visible");
    cy.get(".car-player").each(($el, index) =>
      cy.wrap($el).should("have.text", carNames[index]),
    );
  });

  it("우승자가 제대로 출력됐는지 확인", () => {
    const scores = [];
    const winners = [];

    cy.document().then((document) => {
      const carPlayers = document.querySelectorAll(".car-player");
      const carPlayerContainers = document.querySelectorAll(
        ".car-player-container",
      );

      carPlayerContainers.forEach(($carPlayerContainer) => {
        scores.push(
          $carPlayerContainer.querySelectorAll(".forward-icon").length,
        );
      });

      const maxScore = Math.max(...scores);
      carPlayers.forEach(($carPlayer, index) => {
        if (scores[index] === maxScore) {
          winners.push($carPlayer.innerText);
        }
      });

      cy.get(".racing-winner-container")
        .find("h2")
        .should("have.text", `🏆 최종 우승자: ${winners.join(", ")} 🏆`);
    });
  });

  it.only("재시작 버튼 동작 확인", () => {
    cy.get("[data-test=restart-button]").click();

    cy.get("[data-test=car-name-input]").should("not.be.disabled");
    cy.get("[data-test=car-name-input]").should("have.value", "");
    cy.get("[data-test=car-name-button]").should("not.be.disabled");

    cy.get("[data-test=try-count-input]").should("not.be.disabled");
    cy.get("[data-test=try-count-input]").should("have.value", "");
    cy.get("[data-test=try-count-button]").should("not.be.disabled");

    cy.get(".racing-result-container").should("not.be.visible");
  });
});

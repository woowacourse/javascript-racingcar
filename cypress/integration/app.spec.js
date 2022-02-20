// [V] 주어진 횟수 동안 n 대의 자동차는 전진 또는 멈출 수 있다.
// [V] 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
// [V] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
// [V] 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
// [V] 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
// [V] 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
// [V] 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
// [V] 사용자가 잘못된 입력 값을 작성한 경우 alert을 이용해 메시지를 보여주고, 다시 입력할 수 있게 한다.

beforeEach(() => {
  cy.visit("index.html");
});
it("사용자가 자동차 이름이 5자 초과인 입력 값을 작성한 경우 alert을 이용해 메시지를 보여주고, 다시 입력할 수 있게 한다.", () => {

  const alertStub = cy.stub();

  cy.on("window:alert", alertStub);
  cy.get(".car-name-input").type("abcdef");
  cy.get(".car-name-button")
    .click()
    .then(() => {
      expect(alertStub.getCall(0));
    });
});

it("자동차 이름은 쉼표(,)를 기준으로 구분한다.", () => {
  cy.get(".car-name-input").type("car1,car2,car3");
  cy.get(".car-name-button").click();
  cy.get(".race-count-input").type("10");
  cy.get(".race-count-button").click();

  cy.get(".racing-cars").children().eq(0).contains("car1");
  cy.get(".racing-cars").children().eq(1).contains("car2");
  cy.get(".racing-cars").children().eq(2).contains("car3");
});

it("사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.", () => {
  cy.get(".car-name-input").type("car1,car2,car3");
  cy.get(".car-name-button").click();
  cy.get(".race-count-input").type(3);
  cy.get(".race-count-input").should("have.value", 3);
})

it("사용자가 잘못된 이동 값을 작성한 경우 alert을 이용해 메시지를 보여주고, 다시 입력할 수 있게 한다.", () => {
  const alertStub = cy.stub();

  cy.get(".car-name-input").type("car1,car2,car3");
  cy.get(".car-name-button").click();

  cy.on("window:alert", alertStub);
  cy.get(".race-count-button")
    .click()
    .then(() => {
      if (cy.get(".race-count-input").should("have.value", "")) {
        expect(alertStub.getCall(0));
      }
    });
});

it("자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.", () => {
  cy.get(".car-name-input").type("car1,car2");
  cy.get(".car-name-button").click();
  cy.get(".race-count-input").type(3);
  cy.get(".race-count-button").click();

  cy.get(".racing-cars").children().eq(0).contains("car1");
  cy.get(".racing-cars").children().eq(1).contains("car2");
});

it("정상적으로 게임의 턴이 다 동작된 후에는 결과를 보여주고, 2초 후에 축하의 alert 메세지를 띄운다", () => {
  const alertStub = cy.stub();


  cy.get(".car-name-input").type("car1,car2,car3");
  cy.get(".car-name-button").click();
  cy.get(".race-count-input").type(1);
  cy.get(".race-count-input").should("have.value", 1);

  cy.clock().then((clock) => {
    clock.tick(3000);
    cy.on("window:alert", alertStub);
  })
});


// [] 주어진 횟수 동안 n 대의 자동차는 전진 또는 멈출 수 있다.
// [V] 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
// [V] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
// [V] 사용자는 몇 번의 이동을 할 것인지 1 이상의 수를 입력할 수 있어야 한다.
// [] 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
// [] 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
// [] 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
// [V] 사용자가 잘못된 입력 값을 작성한 경우 alert을 이용해 메시지를 보여주고, 다시 입력할 수 있게 한다.

// - [ ] 자동차 경주 게임의 턴이 진행 될 때마다 1초의 텀(progressive 재생)을 두고 진행한다.
// - [ ] 1초의 텀동안 로딩 애니메이션을 보여준다.
// - [ ] 애니메이션 구현을 위해 setInterval, setTimeout, requestAnimationFrame 을 활용한다.
// - [ ]정상적으로 게임의 턴이 다 동작된 후에는 결과를 보여주고, 2초 후에 축하의 alert 메세지를 띄운다.

describe("자동차 경주 게임 테스트", () => {
  beforeEach(() => {
    cy.visit("index.html");
  });

  it("자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.", () => {
    cy.get(".car-name-input").type("abcdef");
    cy.checkAlert(".car-name-button");
  });

  it("사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.", () => {
    cy.get(".car-name-input").type("car1,car2,car3");
    cy.get(".car-name-button").click();
    cy.checkAlert(".race-count-button");
  });

  it("자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.", () => {
    cy.get(".car-name-input").type("car1,car2,car3");
    cy.get(".car-name-button").click();
    cy.get(".race-count-input").type("10");
    cy.get(".race-count-button").click();

    cy.get(".racing-cars").children().eq(0).contains("car1");
    cy.get(".racing-cars").children().eq(1).contains("car2");
    cy.get(".racing-cars").children().eq(2).contains("car3");
  });
});

describe("자동차 경주 게임 로딩 테스트", () => {
  beforeEach(() => {
    cy.clock();
    cy.visit("index.html");
  });

  it("자동차 경주 게임을 정상적으로 완료하고 2초 뒤에 축하 메시지를 확인할 수 있다.", () => {
    const raceCount = 5;
    const delayPerRace = 1000;
    const delayAfterEnd = 2000;
    const totalDelay = delayPerRace * raceCount + delayAfterEnd;
    const alertStub = cy.stub();

    cy.on("window:alert", alertStub);

    cy.get(".car-name-input").type("a,b");
    cy.get(".car-name-button").click();
    cy.get(".race-count-input").type(raceCount);
    cy.get(".race-count-button").click();
    cy.tick(totalDelay).then(() => {
      expect(alertStub).to.be.called;
    });
  });
});

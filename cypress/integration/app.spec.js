import { alertMessage } from "../../src/constants/ConstantsManager.js";

describe("자동차 경주 게임 테스트", () => {
  beforeEach(() => {
    cy.visit("index.html");
  });

  it("자동차 이름을 입력하지 않고 확인 버튼을 눌렀을 경우 경고 메세지를 띄워야한다.", () => {
    cy.get(".car-name-input").type("abcdef");
    cy.checkAlert(".car-name-button", alertMessage.InvalidCarNameLength);
  });

  it("자동차 이름을 5자 초과로 입력했을 경우 경고 메세지를 띄워야한다.", () => {
    cy.get(".car-name-input").type("abcdef");
    cy.checkAlert(".car-name-button", alertMessage.InvalidCarNameLength);
  });

  it("사용자가 횟수 입력을 하지 않고 확인 버튼을 눌렀을 경우 경고 메세지를 띄워야한다.", () => {
    cy.get(".car-name-input").type("car1,car2,car3");
    cy.get(".car-name-button").click();
    cy.checkAlert(".race-count-button", alertMessage.InvalidRaceCount);
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

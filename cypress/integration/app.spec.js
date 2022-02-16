describe("자동차 경주 게임 테스트", () => {
  beforeEach(() => {
    cy.visit("index.html");
  });

  it("사용자가 이름을 횟수를 등록하고 승자를 확인할 수 있다.", () => {
    //given
    const names = "a, b, c";
    //when
    cy.get("#car-name-input").type(names);
    cy.get("#car-name-input-button").click();
    cy.get("#racing-number-input").type(3);
    cy.get("#racing-number-input-button").click();
    //then
    cy.get("#racing-winner").should("not.have.text", "");
  });

  it("게임 중 로딩창을 보여준다.", () => {
    //given
    const validNames = "1, 2, 3";
    const validNumber = "5";
    const alertStub = cy.stub();
    cy.on("window:alert", alertStub);

    //when
    cy.get("#car-name-input").type(validNames);
    cy.get("#car-name-input-button").click();
    cy.get("#racing-number-input").type(validNumber);
    cy.get("#racing-number-input-button").click();
    //then
    cy.get("span", { timeout: 5000 }).should("have.class", "spinner");
  });

  it("정상적으로 게임의 턴이 다 동작된 후에는 결과를 보여주고, 2초 후에 축하의 alert 메세지를 띄운다.", () => {
    //given
    const validNames = "1, 2, 3";
    const validNumber = "3";
    const alertStub = cy.stub();
    cy.on("window:alert", alertStub);
    //when
    cy.get("#car-name-input").type(validNames);
    cy.get("#car-name-input-button").click();
    cy.get("#racing-number-input").type(validNumber);
    cy.get("#racing-number-input-button").click();
    //then
    cy.wait(6000).then(() => {
      expect(alertStub).to.be.called;
    });
  });
});

describe("입력 예외처리 테스트", () => {
  beforeEach(() => {
    cy.visit("index.html");
  });

  it("사용자가 6자이상의 이름을 설정한 경우, alert 호출한다.", () => {
    //given
    const invalidNames = "abcdefgh";
    const alertStub = cy.stub();
    cy.on("window:alert", alertStub);
    //when
    cy.get("#car-name-input").type(invalidNames);
    //then
    cy.get("#car-name-input-button")
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it("사용자가 중복된 이름을 설정한 경우, alert 호출한다.", () => {
    //given
    const invalidNames = "1, 2, 1";
    const alertStub = cy.stub();
    cy.on("window:alert", alertStub);
    //when
    cy.get("#car-name-input").type(invalidNames);
    //then
    cy.get("#car-name-input-button")
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it("사용자가 공백으로된 이름을 설정한 경우, alert 호출한다.", () => {
    //given
    const invalidNames = "1 , , 2";
    const alertStub = cy.stub();
    cy.on("window:alert", alertStub);
    //when
    cy.get("#car-name-input").type(invalidNames);
    //then
    cy.get("#car-name-input-button")
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it("사용자가 입력한 시도할 횟수가 0이하인 경우, alert 호출한다.", () => {
    //given
    const validNames = "1, 2, 3";
    const invalidNumber = "-1";
    const alertStub = cy.stub();
    cy.on("window:alert", alertStub);
    //when
    cy.get("#car-name-input").type(validNames);
    cy.get("#car-name-input-button").click();
    cy.get("#racing-number-input").type(invalidNumber);
    //then
    cy.get("#racing-number-input-button")
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it("사용자가 입력한 시도할 횟수가 정수가 아닌 경우, alert 호출한다.", () => {
    //given
    const validNames = "1, 2, 3";
    const invalidNumber = "1.23";
    const alertStub = cy.stub();
    cy.on("window:alert", alertStub);
    //when
    cy.get("#car-name-input").type(validNames);
    cy.get("#car-name-input-button").click();
    cy.get("#racing-number-input").type(invalidNumber);
    //then
    cy.get("#racing-number-input-button")
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });
});

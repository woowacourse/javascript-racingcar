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
    cy.get("#round-count-input").type(3);
    cy.get("#round-count-input-button").click();
    //then
    cy.get("#racing-winner").should("not.have.text", "");
  });

  it("게임의 턴 마다 로딩창을 보여준다.", () => {
    //given
    const LOADING_TERM = 1000;
    const LOADING_NUMBER = 5;
    const validNames = "1, 2, 3";
    const validNumber = "5";
    //when
    cy.get("#car-name-input").type(validNames);
    cy.get("#car-name-input-button").click();
    cy.get("#round-count-input").type(validNumber);
    cy.get("#round-count-input-button").click();
    //then
    for (let i = 0; i < LOADING_NUMBER; i++) {
      cy.wait(LOADING_TERM);
      cy.get("span").should("have.class", "spinner");
    }
  });

  it("정상적으로 게임의 턴이 다 동작된 후에는 결과를 보여주고, 2초 후에 축하의 alert 메세지를 띄운다.", () => {
    //given
    const validNames = "1, 2, 3";
    const validNumber = "3";
    //when
    cy.get("#car-name-input").type(validNames);
    cy.get("#car-name-input-button").click();
    cy.get("#round-count-input").type(validNumber);
    cy.get("#round-count-input-button").click();
    //then
    cy.checkAlertWinners();
  });
});

describe("입력 예외처리 테스트", () => {
  beforeEach(() => {
    cy.visit("index.html");
  });

  it("사용자가 6자이상의 이름을 설정한 경우, alert 호출한다.", () => {
    //given
    const invalidNames = "abcdefgh";
    const ERROR_HAS_LONG_NAME = "5글자 이하의 이름을 입력해주세요.";
    //when
    cy.get("#car-name-input").type(invalidNames);
    //then
    cy.checkAlertWithMessage("#car-name-input-button", ERROR_HAS_LONG_NAME);
  });

  it("사용자가 중복된 이름을 설정한 경우, alert 호출한다.", () => {
    //given
    const invalidNames = "1, 2, 1";
    const ERROR_HAS_DUPLICATE_NAME = "중복된 이름이 있습니다.";
    //when
    cy.get("#car-name-input").type(invalidNames);
    //then
    cy.checkAlertWithMessage(
      "#car-name-input-button",
      ERROR_HAS_DUPLICATE_NAME
    );
  });

  it("사용자가 공백으로된 이름을 설정한 경우, alert 호출한다.", () => {
    //given
    const invalidNames = "1 , , 2";
    const ERROR_HAS_EMPTY_NAME = "공백으로된 이름이 있습니다.";
    //when
    cy.get("#car-name-input").type(invalidNames);
    //then
    cy.checkAlertWithMessage("#car-name-input-button", ERROR_HAS_EMPTY_NAME);
  });

  it("사용자가 입력한 시도할 횟수가 0이하인 경우, alert 호출한다.", () => {
    //given
    const validNames = "1, 2, 3";
    const invalidNumber = "-1";
    const ERROR_NUMBER_UNDER_ZERO = "1이상의 수를 입력해주세요.";
    //when
    cy.get("#car-name-input").type(validNames);
    cy.get("#car-name-input-button").click();
    cy.get("#round-count-input").type(invalidNumber);
    //then
    cy.checkAlertWithMessage(
      "#round-count-input-button",
      ERROR_NUMBER_UNDER_ZERO
    );
  });

  it("사용자가 입력한 시도할 횟수가 정수가 아닌 경우, alert 호출한다.", () => {
    //given
    const validNames = "1, 2, 3";
    const invalidNumber = "1.23";
    const ERROR_NUMBER_NOT_INTEGER = "소수점을 제외하고 입력해주세요.";
    //when
    cy.get("#car-name-input").type(validNames);
    cy.get("#car-name-input-button").click();
    cy.get("#round-count-input").type(invalidNumber);
    //then
    cy.checkAlertWithMessage(
      "#round-count-input-button",
      ERROR_NUMBER_NOT_INTEGER
    );
  });
});

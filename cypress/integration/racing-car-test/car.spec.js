describe("자동차 경주 게임 테스트", () => {
  before(() => {
    cy.visit("http://127.0.0.1:5500/javascript-racingcar/");
  });
  // const carNamesSection = cy.get("#car-names");
  // const tryNumSection = cy.get("#try-num");
  // const resultSection = cy.get("#result");
  // const winnerSection = cy.get("#winners");
  const carNames = "엘라, 그루밍 , 준,포코";

  it("자동차 이름이 잘 입력되었는지 테스트합니다.", () => {
    cy.get("#car-names")
      .find("input")
      .type(carNames)
      .should("have.value", carNames);
  });

  it("첫번째 확인 버튼을 눌렀을 때, 시도 횟수 section이 보여지는지 테스트합니다.", () => {
    cy.get("#car-names").find("button").click();
    cy.get("#try-num").should("exist");
  });

  it("시도 횟수가 잘 입력되었는지 테스트합니다.", () => {
    cy.get("#try-num").find("input").type(5).should("have.value", 5);
  });

  it("두번째 확인 버튼을 눌렀을 때, 결과 section이 보여지는지 테스트합니다.", () => {
    cy.get("#try-num").find("button").click();
    cy.get("#result").should("exist");
  });

  // TODO: carNames를 "," 기준으로 split 했을 때, 생성된 배열의 개수와 생성된 div의 개수가 같은지 확인
  it("입력된 자동차 이름에 따라 car-player라는 class를 가진 div가 잘 생성되는지 테스트합니다.", () => {
    const carNamesArray = carNames.split(",").map((carName) => {
      return carName.trim();
    });

    cy.get(".car-player").each((car, idx) => {
      expect(car).to.contain(carNamesArray[idx]);
    });
  });

  it("게임이 성공적으로 끝나면 alert가 잘 보이는지 테스트합니다.", () => {
    cy.wait(8000);
    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("축하합니다.");
    });
  });

  it("다시 시작하기 버튼이 잘 눌리는지 테스트합니다.", () => {
    cy.on("window:confirm", () => true); // alert 끄기
    cy.get("#winners").find("button").click();

    cy.get("#title").should("exist");
    cy.get("#car-names").should("exist");
  });

  it("빈 자동차 이름이 입력되었을 때를 테스트합니다.", () => {
    cy.get("#car-names").find("input").type("포코, ,, 엘라, 그루밍");
    cy.get("#car-names").find("button").click();
    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("올바른 자동차 이름을 입력하세요.");
    });
  });

  it("5글자 초과인 이름이 입력되었을 때를 테스트합니다.", () => {
    cy.get("#car-names").find("input").type("포코포포코코,,엘라, 그루밍");
    cy.get("#car-names").find("button").click();
    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("올바른 자동차 이름을 입력하세요.");
    });
  });

  it("다시 올바른 이름이 입력되는지 테스트합니다.", () => {
    cy.get("#car-names").find("input").type("포코코,코코,엘라, 그루밍");
    cy.get("#car-names").find("button").click();
  });

  it("음수인 시도 횟수가 입력되었을 때를 테스트합니다.", () => {
    cy.get("#try-num").find("input").type(-5);
    cy.get("#try-num").find("button").click();
    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("올바른 시도 횟수를 입력하세요.");
    });
  });

  it("숫자가 아닌 시도 횟수가 입력되었을 때를 테스트합니다.", () => {
    cy.get("#try-num").find("input").type("ㅇㅇㅇ");
    cy.get("#try-num").find("button").click();
    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("올바른 시도 횟수를 입력하세요.");
    });
  });

  // 미션 2단계 테스트
  it("loading icon이 1초마다 잘 나오는지 테스트합니다.", () => {
    cy.get("#try-num").find("input").type(3).should("have.value", 3);
    cy.get("#try-num").find("button").click();
    cy.get("#result").should("exist");
    cy.wait(1000);
    cy.get(".spinner-box").should("exist");
    cy.wait(1000);
    cy.get(".spinner-box").should("exist");
    cy.wait(1000);
    cy.get("#winners").should("exist");
  });
});

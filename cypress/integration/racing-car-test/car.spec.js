const validCarNames = "엘라, 그루밍 , 준,포코";
const emptyCarNames = "포코, ,, 엘라, 그루밍";
const longCarNames = "포코포포코코,,엘라, 그루밍";
const validCarNumber = 5;
const minusNumberInput = -5;
const notNumberInput = "ㅁ";

describe("자동차 경주 게임 테스트", () => {
  before(() => {
    cy.visit("http://127.0.0.1:5500/");
  });

  function validInputTest(testTitle, inputType, inputValue) {
    it(testTitle, () => {
      cy.wait(1000);
      cy.get(inputType).type(inputValue).should("have.value", inputValue);
    });
  }

  validInputTest(
    "자동차 이름이 잘 입력되었는지 테스트합니다.",
    "input[type='text']",
    validCarNames
  );

  it("첫번째 확인 버튼을 눌렀을 때, 시도 횟수 section이 보여지는지 테스트합니다.", () => {
    cy.wait(1000);
    cy.get("button").eq(0).click();
    cy.get("section.mt-5").should("exist");
  });

  validInputTest(
    "시도할 횟수가 잘 입력되었는지 테스트합니다.",
    "input[type='number']",
    validCarNumber
  );

  it("두번째 확인 버튼을 눌렀을 때, 결과 section이 보여지는지 테스트합니다.", () => {
    cy.wait(1000);
    cy.get("button").eq(1).click();
    cy.get("section.mt-4").should("exist");
  });

  // TODO: carNames를 "," 기준으로 split 했을 때, 생성된 배열의 개수와 생성된 div의 개수가 같은지 확인
  it("입력된 자동차 이름에 따라 car-player라는 class를 가진 div가 잘 생성되는지 테스트합니다.", () => {
    cy.wait(1000);
    const validCarNamesArray = validCarNames.split(",").map((carName) => {
      return carName.trim();
    });

    cy.get(".car-player").each((car, idx) => {
      expect(car).to.contain(validCarNamesArray[idx]);
    });
  });

  it("게임 진행이 정상적으로 동작된 후, 2초 후에 축하의 alert가 나오는지 확인합니다.", () => {
    cy.wait(1000);
    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("축하합니다! 게임이 모두 끝났습니다!");
    });
  });

  it("다시 시작하기 버튼이 잘 눌리는지 테스트합니다.", () => {
    cy.wait(1000);
    cy.get("button").eq(2).click();
    cy.get("section").eq(0).should("exist");
    cy.get("section").eq(1).should("exist");
  });

  it("빈 자동차 이름이 입력되었을 때를 테스트합니다.", () => {
    cy.wait(1000);
    cy.get("input[type='text']").type(emptyCarNames);
    cy.get("button").eq(0).click();
    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("올바른 자동차 이름을 입력하세요.");
    });
  });

  it("5글자 초과인 이름이 입력되었을 때를 테스트합니다.", () => {
    cy.wait(1000);
    cy.get("input[type='text']").type(longCarNames);
    cy.get("button").eq(0).click();
    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("올바른 자동차 이름을 입력하세요.");
    });
  });

  it("다시 올바른 이름이 입력되는지 테스트합니다.", () => {
    cy.wait(1000);
    cy.get("input[type='text']").type(validCarNames);
    cy.get("button").eq(0).click();
  });

  it("음수인 시도 횟수가 입력되었을 때를 테스트합니다.", () => {
    cy.wait(1000);
    cy.get("input[type='number']").type(minusNumberInput);
    cy.get("button").eq(1).click();
    cy.get("input[type='number']").should("have.value", "");
    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("올바른 시도 횟수를 입력하세요.");
    });
  });

  it("다시 시도할 횟수가 잘 입력되었는지 테스트합니다.", () => {
    cy.wait(1000);
    cy.get("input[type='number']").should("have.value", "");
    cy.get("input[type='number']").type(validCarNumber);
  });

  it("두번째 확인 버튼을 눌렀을 때, 결과 section이 보여지는지 테스트합니다.", () => {
    cy.wait(1000);
    cy.get("button").eq(1).click();
    cy.get("section.mt-4").should("exist");
    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("축하합니다! 게임이 모두 끝났습니다!");
    });
  });
});

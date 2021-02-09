describe("자동차 경주 게임 테스트", () => {
  before(() => {
    cy.visit("http://127.0.0.1:5500/javascript-racingcar");
  });
  const carNames = "엘라, 그루밍 , 준,포코";
  it("자동차 이름이 잘 입력되었는지 테스트합니다.", () => {
    cy.get("input[type='text']").type(carNames).should("have.value", carNames);
  });

  it("첫번째 확인 버튼을 눌렀을 때, 시도 횟수 section이 보여지는지 테스트합니다.", () => {
    cy.get("button").first().click();
    cy.get("section.mt-5").should("exist");
  });

  it("시도할 횟수가 잘 입력되었는지 테스트합니다.", () => {
    cy.get("input[type='number']").type(5).should("have.value", 5);
    cy.get("section.mt-5 > div > button").click();
  });

  it("두번째 확인 버튼을 눌렀을 때, 결과 section이 보여지는지 테스트합니다.", () => {
    cy.get("button").first().click();
    cy.get("section.mt-4").should("exist");
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
  // it("게임의 결과가 잘 나오는지 확인합니다.", () => {
  //   cy.get("");
  // });

  // it("다시시작하기 버튼이 잘 눌리는지 테스트합니다.", () => {});
});

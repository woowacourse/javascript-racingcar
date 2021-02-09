describe("자동차 기능 테스트", () => {
  before(() => {
    cy.visit("http://localhost:5500/index.html");
  });


  it("입력된 이름의 자동차들이 생성된다.", () => {
    const tc = '1,2,3,4';
    const tcList = tc.split(',');

    // 자동차 이름 입력
    cy.get("#car-names-input").type(tc);
    // 확인 클릭
    cy.get("#car-names-submit").click();
    // 화면에 보여지는 이름이 맞는지 확인(비교)
    cy.get(".car-player").each((car, i) => {
      expect(car).to.have.text(tcList[i])
    })
  });

});

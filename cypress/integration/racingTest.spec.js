// import { expect } from "chai";
import { getRandomNumber } from "../../src/js/controller/utils.js";
import Car from "../../src/js/model/Car.js";

describe("자동차 레이싱 테스트", () => {
  before(() => {
    cy.visit("http://localhost:5500/index.html");
  });

  // it("자동차 객체가 올바르게 생성되었는지 확인한다.", () => {
  //   // carInputTest 가져와서 이름이랑, 시도횟수 클릭 => Car객체생성 App this.car
  //   // App.cars === 이름
  //   const carNames = "a,b,c,d,e"; // ['a', 'b', 'c'] => 'a,b,c'
  //   cy.get("#car-names-input").type(carNames); // 생성을 확인하기 위해서 정상적인 값 입력
  //   cy.get("#car-names-submit").click();
  //   cy.get("#count-input").type(5); // 생성을 확인하기 위해서 정상적인 값 입력
  //   cy.get("#count-submit").click();
  //   cy.get(".car-player").each((element, index) => {
  //     const carNameElement = element[0]; // jquery
  //     expect(carNameElement.innerText).to.equal(carNames.split(",")[index]);
  //   });
  // });

  // it("random 값이 0에서 9 사이의 정수인지 확인한다.", () => {
  //   const numberList = Array.from({ length: 10 }, (_, i) => i);
  //   for(let i=0;i<1000;i++){
  //     expect(numberList).to.include(getRandomNumber());
  //   }
  // });

  it("자동차는 random 값이 4 이상일 경우 전진하고, 3 이하의 값이면 멈추는지 확인한다.", ()=>{
    const newCar = new Car('test');
    newCar.moveForward(1);
    expect(newCar.position).to.equal(0);
    newCar.moveForward(4);
    expect(newCar.position).to.equal(1);
  });
});

import { app } from "../index.js";
import { displayWinners } from "../view/winnerView.js";

export const chooseWinners = function () {
  const maxPosition = Math.max(...app.cars.map((car) => car.position));
  const winners = app.cars
    .filter((car) => car.position === maxPosition)
    .map((car) => car.name);

  displayWinners(winners);
};

export const handleRestartButton = function(){
  // 자동차 이름 input 빈칸인지 체크
// 시도횟수 input 빈칸, display none 인지 체크
// racing car도 display none // , 엘리먼트 없어야함
// winner container도 display none // , 엘리먼트 없어야함
  const h2Element = document.querySelector('#winner-container > section > h2');
  console.log(h2Element)
  document.querySelector('#car-names-input').value = '';
  document.querySelector('#count-input').value = '';
  document.querySelector('#count-container').style.display = 'none';
  document.querySelector('#racing-cars').style.display = 'none';
  document.querySelector('#racing-cars').innerHTML = '';
  document.querySelector('#winner-container').style.display = 'none';
  document.querySelector('#winner-container > section').removeChild(h2Element);
}
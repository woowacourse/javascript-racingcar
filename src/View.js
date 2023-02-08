import Console from './utils/Console.js';

const View = {
  naming() {
    Console.print('경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).');
  },
  tryCount() {
    Console.print('시도할 회수는 몇회인가요?');
  },
  result() {
    Console.print('실행 결과');
  },
  carResult(cars) {
    cars.forEach((car) => {
      Console.print(`${car.name} : ${Array.from({ length: car.distance }, () => '-').join('')}`);
    });
    View.newLine();
  },
  winnerResult(winner) {
    Console.print(`${winner.join(',')}가 최종 우승했습니다.`);
  },
  newLine() {
    Console.print('');
  },
  error(e) {
    Console.print(e.message);
  },
};

export default View;

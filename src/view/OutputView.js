import Console from '../utils/Console';

class OutputView {
  static printResultMessage() {
    Console.print('\n실행 결과');
  }

  static printCarpositionAndName(result) {
    for (const [name, position] of Object.entries(result)) {
      Console.print(`${name} : ${'-'.repeat(position)}`);
    }
  }
}

export default OutputView;

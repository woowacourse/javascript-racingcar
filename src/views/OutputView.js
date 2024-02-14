import consolePrint from '../utils/consolePrint';

const OutputView = {
  printError(error) {
    consolePrint(error.message);
  },
};

export default OutputView;

import CarNameInputView from './view/CarNameInputView.js';
import RacingCountInputView from './view/RacingCountInputView.js';
import RacingProgressView from './view/RacingProgressView.js';
import RacingResultView from './view/RacingResultView.js';

import RacingCarGame from './controller/RacingCarGame.js';

import Model from './model/Model.js';

new RacingCarGame(
  new Model(),
  new CarNameInputView(),
  new RacingCountInputView(),
  new RacingProgressView(),
  new RacingResultView()
);

import { setCarNamesClick, setRoundClick, restartBtnClick } from './controllers/userController.js';

export const state = {
  cars: [],
  racingNumber: 0,
};

setCarNamesClick(state);
setRoundClick(state);
restartBtnClick(state);

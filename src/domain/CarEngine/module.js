import { CAR_MOVE_COUNT, MOVABLE_VALUE } from './constant.js';

const CarEngine = Object.freeze({
  triggerMove(carDetail, randomMoveCount) {
    if (randomMoveCount >= MOVABLE_VALUE.min) {
      carDetail.moveCount += CAR_MOVE_COUNT;
    }

    return carDetail;
  },
});

export default CarEngine;

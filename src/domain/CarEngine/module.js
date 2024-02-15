import { CAR_MOVE_COUNT, MIN_MOVABLE_VALUE } from './constant.js';

const CarEngine = Object.freeze({
  triggerMove(carDetail, randomMoveCount) {
    if (randomMoveCount >= MIN_MOVABLE_VALUE) {
      carDetail.moveCount += CAR_MOVE_COUNT;
    }

    return carDetail;
  },
});

export default CarEngine;

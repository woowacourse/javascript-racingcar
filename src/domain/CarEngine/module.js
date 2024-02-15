const CarEngine = Object.freeze({
  triggerMove(carDetail, randomMoveCount) {
    //TODO: 4 하드 코딩 된 거 수정
    if (randomMoveCount >= 4) {
      carDetail.moveCount += 1;
    }

    return carDetail;
  },
});

export default CarEngine;

export function validateMoveCount(moveCount){
    const regex = /^(?:[1-9]\d*)$/;

  if (!regex.test(moveCount)) {
    throw new Error("1 이상의 숫자를 입력해주세요.");
  }

  return Number(moveCount)
}

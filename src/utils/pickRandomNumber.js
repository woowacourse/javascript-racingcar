function pickRandomNumber() {
  // 0에서 9사이 숫자 하나를 랜덤으로 추출

  return Math.floor(Math.random() * 10); // 0이상 9이하
}

export default pickRandomNumber;

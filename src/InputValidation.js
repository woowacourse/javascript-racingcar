function checkValidCarName(carName) {
  if (!carName) {
    alert("차 이름을 입력해주세요.");
    return carName;
  }
  const zeroLengthCar = carName
    .split(",")
    .filter((carName) => carName.length === 0);
  if (zeroLengthCar) {
    alert("차 이름에 빈칸은 불가능합니다")
    return false;
  }
  const overFiveLengthCar = carName
    .split(",")
    .filter((carName) => carName.length > 5);
  if (overFiveLengthCar.length > 0) {
    alert("차 이름은 5자 이하만 가능합니다.");
    return false;
  }
  
  return true;
}

function checkRaceNumber(raceCount) {
  if (raceCount === "" || raceCount <= 0) {
    alert("올바른 수를 입력해주세요.");
    return false;
  }

  return true;
}

export { checkValidCarName, checkRaceNumber };
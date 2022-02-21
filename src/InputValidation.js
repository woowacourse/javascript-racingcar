function checkValidCarName(carName) {
  if (!carName) {
    alert("차 이름을 입력해주세요.");
    return carName;
  }
  const eachCarList = carName.split(",");
  if (eachCarList.length > 5) {
    alert("자동차는 5대까지 입력할 수 있습니다");
    return false;
  }
  const zeroLengthCar = eachCarList
    .filter((carName) => carName.length === 0);
  if (zeroLengthCar.length) {
    alert("자동차 이름에 빈칸은 불가능합니다")
    return false;
  }
  const overFiveLengthCar = eachCarList
    .filter((carName) => carName.length > 5);
  if (overFiveLengthCar.length > 0) {
    alert("자동차 이름은 5자 이하만 가능합니다.");
    return false;
  }
  
  return true;
}

function checkRaceNumber(raceCount) {
  if (raceCount === "" || raceCount <= 0) {
    alert("올바른 수를 입력해주세요.");
    return false;
  }

  if (raceCount > 10) {
    alert("게임은 10번까지 가능합니다.")
    return false;
  }

  return true;
}

export { checkValidCarName, checkRaceNumber };
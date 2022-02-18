function checkValidCarName(carName) {
  if (!carName) {
    alert("차 이름을 입력해주세요.");
    return false;
  }
  const noValidateCarname = carName
    .split(",")
    .filter((carName) => carName.length > 5);
  if (noValidateCarname.length > 0) {
    alert("차 이름은 5자 이하만 가능합니다.");
    return false;
  }
  
  return true;
}

function checkRaceNumber(raceCount) {
  if (raceCount === "" || raceCount <= 0) {
    alert("옳바른 수를 입력해주세요.");
    return false;
  }

  return true;
}

export { checkValidCarName, checkRaceNumber };
export function setCarNames(state) {
  const carNamesInputBtn = document.getElementById('car-name-input-button');
  carNamesInputBtn.addEventListener('click', () => {
    eventHanlder(event, state);
  });

  // 이름 가져오기
  // 이름 , 분리
  // 이름 유효성 검사
}

function eventHanlder(event, state) {
  event.preventDefault();
  const carNamesInput = document.getElementById('car-name-input');
  //todo:유효성
  const carNames = doTrim(carNamesInput.value.split(','));
  console.log(carNames);
  if (!isNameValid(carNames)) {
    state.cars = carNames;
  }
  console.log(state);
}

function isNameValid(names) {
  if (hasDuplicatedName(names)) {
    showAlertMsg('중복된 이름 있음');
    return false;
  }
  if (hasEmptyName(names)) {
    showAlertMsg('공백 이름 있음');
    return false;
  }
}
function hasDuplicatedName(names) {
  const tempNames = new Set(names);
  if (tempNames.size !== names.length) {
    return true;
  }
  return false;
}

function isEmptyName(name) {
  if (name === '') {
    return true;
  }
  return false;
}

function hasEmptyName(names) {
  for (let i = 0; i < names.length; i++) {
    if (isEmptyName(names[i])) {
      return true;
    }
  }
  return false;
}

function doTrim(names) {
  const newNames = names.map((item) => {
    return item.trim();
  });
  return newNames;
}

function clearInput() {
  const carNamesInput = document.getElementById('car-name-input');
  carNamesInput.value = '';
  carNamesInput.focus();
}

function showAlertMsg(message) {
  alert(message);
  clearInput();
}

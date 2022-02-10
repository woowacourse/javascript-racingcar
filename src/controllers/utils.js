export function doTrim(names) {
  const newNames = names.map((item) => {
    return item.trim();
  });
  return newNames;
}

export function clearInput(inputId) {
  const inputLocation = document.getElementById(inputId);
  inputLocation.value = '';
  inputLocation.focus();
}

export function showAlertMsg(message) {
  alert(message);
  clearInput(findAlertInputId(message));
}

function findAlertInputId(message) {
  if (message[0] === '이') {
    return 'car-name-input';
  }
  if (message[0] === '숫') {
    return 'racing-number-input';
  }
}

export function makeRandomNumber() {
  return Math.floor(Math.random() * 10);
}

export function isNumberOverStandard(number) {
  if (number > 4) {
    return true;
  }
  return false;
}

export function doTrim(names) {
  const newNames = names.map((item) => {
    return item.trim();
  });
  return newNames;
}

export function clearInput() {
  const carNamesInput = document.getElementById('car-name-input');
  carNamesInput.value = '';
  carNamesInput.focus();
}

export function showAlertMsg(message) {
  alert(message);
  clearInput();
}

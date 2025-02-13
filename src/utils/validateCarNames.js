export function validateCarNames(names) {
  // 글자 수 5개 초과 금지
  // 구분자는 쉼표

  // A, B, C, D
  // ,A, B
  const namesArr = names.split(",").map((name) => name.trim());
  // ['A', ' B', ' C', ' D']
  // ['', 'A', 'B']
  validateEmptyString(namesArr);
  validateCarNameLength(namesArr);
  validateDuplicate(namesArr);

  return namesArr;
}

export function validateEmptyString(names) {
  names.forEach((name) => {
    if (name.length === 0) {
      throw new Error("이름이 비어있습니다.");
    }
  });
}

export function validateCarNameLength(names) {
  names.forEach((name) => {
    if (name.length > 5) {
      throw new Error("5자 이하로 설정해주세요.");
    }
  });
}

export function validateDuplicate(names) {
  let uniqueCars = []; // 중복 없는 자동차들

  for (let name of names) {
    if (uniqueCars.includes(name)) {
      // 중복일 때
      throw new Error("중복된 이름은 사용할 수 없습니다.");
    }
    uniqueCars.push(name);
  }
}

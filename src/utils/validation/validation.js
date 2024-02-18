const validation = {
  isInteger: (value) => Number.isInteger(value), // 값이 정수인지 검증하는 함수
  isUnique: (array) => new Set(array).size === array.length, // 배열에 중복이 없는지 검증하는 함수
  isPositive: (value) => value > 0, // 값이 양수인지 검증하는 함수
  isInRange: (value, min, max) => value >= min && value <= max // 값이 주어진 범위 내에 있는지 검증하는 함수
};

export default validation;

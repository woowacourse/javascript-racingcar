const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

const deepFreeze = (object) => {
  // 객체에 정의된 속성명을 추출
  const propNames = Object.getOwnPropertyNames(object);
  // 스스로를 동결하기 전에 속성을 동결
  for (const name of propNames) {
    const value = object[name];
    object[name] = value && typeof value === 'object' ? deepFreeze(value) : value;
  }
  return Object.freeze(object);
};

const toInt = (string) => parseInt(string, 10);

module.exports = { deepClone, deepFreeze, toInt };

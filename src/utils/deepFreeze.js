function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);

  for (let name of propNames) {
    let value = object[name];

    object[name] = value && typeof value === 'object' ? deepFreeze(value) : value;
  }

  return Object.freeze(object);
}

export default deepFreeze;

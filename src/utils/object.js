const deepFreeze = (object) => {
  const propNames = Object.getOwnPropertyNames(object);

  propNames.forEach((name) => {
    let value = object[name];

    object[name] = value && typeof value === 'object' ? deepFreeze(value) : value;
  });

  return Object.freeze(object);
};

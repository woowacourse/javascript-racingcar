export const deepFreeze = (object) => {
  const propNames = Object.getOwnPropertyNames(object);

  propNames.forEach((name) => {
    const value = object[name];

    value && typeof value === 'object' ? deepFreeze(value) : value;
  });

  return Object.freeze(object);
};

const deepFreeze = (object) => {
  Object.keys(object).forEach((key) => {
    const property = object[key];

    if (
      !property ||
      typeof property !== 'object' ||
      Object.isFrozen(property)
    ) {
      return;
    }

    deepFreeze(property);
  });

  return Object.freeze(object);
};

export default deepFreeze;

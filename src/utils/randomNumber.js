const validateRange = (min, max) => {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new Error('');
  }

  if (min > max) {
    throw new Error('');
  }
};

const pickNumberInRange = (min, max) => {
  validateRange(min, max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default pickNumberInRange;

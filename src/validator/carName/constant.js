// CarNameValidator 디렉터리 내에서만 사용할 것!

export const CAR_NAME_REGEX = /^[a-z0-9A-Z가-힣]+([,][a-z0-9A-Z가-힣]*)*[,]?$/;

export const CAR_LENGTH_RANGE = Object.freeze({
  min: 2,
});

export const CAR_NAME_RANGE = Object.freeze({
  min: 1,
  max: 5,
});

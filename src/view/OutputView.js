const { FORMATTING_TYPE, FORMAT } = require('../constants');

const output = (data, formattingType = '') => {
  if (!formattingType) return console.log(data);

  if (formattingType === FORMATTING_TYPE.ERROR) {
    return console.log(`${FORMAT.ERROR}${data}`);
  }

  if (formattingType === FORMATTING_TYPE.MOVING_LOG) {
    Object.entries(data).forEach(([key, value]) => {
      console.log(`${key} : ${value ? FORMAT.POSITION.repeat(value) : ''}`);
    });
    return console.log();
  }

  if (formattingType === FORMATTING_TYPE.WINNERS) {
    return console.log(`${data}${FORMAT.WINNERS}`);
  }
};

module.exports = { output };

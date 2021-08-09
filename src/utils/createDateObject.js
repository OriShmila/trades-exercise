const moment = require("moment");

const createDateObject = (date, format) => {
  const momentDate = moment(date, format);

  return momentDate.toDate();
};

module.exports = createDateObject;

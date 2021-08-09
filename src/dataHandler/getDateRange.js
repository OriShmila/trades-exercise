const { createDateObject } = require("../utils");
const { constants } = require("../utils");

const DATE_FORMAT = constants.DATE_FORMAT;

const getDateRange = (trades = []) =>
  trades.reduce(
    (dates, trade) => {
      const startDate = createDateObject(trade.startDate, DATE_FORMAT);
      const endDate = createDateObject(trade.endDate, DATE_FORMAT);

      if (dates.startDate >= startDate) {
        dates.startDate = startDate;
      }

      if (dates.endDate <= endDate) {
        dates.endDate = endDate;
      }

      return dates;
    },
    {
      startDate: createDateObject(trades[0].startDate, DATE_FORMAT),
      endDate: createDateObject(trades[0].startDate, DATE_FORMAT),
    }
  );

module.exports = getDateRange;

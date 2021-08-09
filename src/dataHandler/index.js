const getDateRange = require("./getDateRange");
const moment = require("moment");
const getTradeChangeByDate = require("./getTradeChangeByDate");

const DATE_FORMAT = "DD/MM/YYYY";

/**
 * A method that receives an array of trades and dates and returns an object where
 * for each date we have the total volume of all the active trades for that day.
 *
 * @param {Array} trades An array of 'trade' objects each holding the trade data.
 */
// TODO
const convertData = (trades = []) => {
  const tradeChangeByDate = getTradeChangeByDate(trades);
  const { startDate: currentDate, endDate } = getDateRange(trades);
  const result = [];
  let tradeChangeDatesIndex = 0;
  let currentVolume = 0;
  let index = 0;

  while (currentDate <= endDate) {
    if (tradeChangeByDate.has(moment(currentDate).format(DATE_FORMAT))) {
      currentVolume += tradeChangeByDate.get(
        moment(currentDate).format(DATE_FORMAT)
      );

      tradeChangeDatesIndex++;
    }

    result[index++] = {
      date: moment(currentDate, DATE_FORMAT).toDate(),
      volume: currentVolume,
    };

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return result;
};

module.exports = convertData;

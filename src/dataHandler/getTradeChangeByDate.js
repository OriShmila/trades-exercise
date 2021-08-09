const moment = require("moment");
const { constants } = require("../utils");

const DATE_FORMAT = constants.DATE_FORMAT;

const getTradeChangeByDate = (trades = []) =>
  trades.reduce((tradeChangeDates, trade) => {
    const endDateString = moment(trade.endDate, DATE_FORMAT)
      .add(1, "day")
      .format(DATE_FORMAT);

    tradeChangeDates.set(
      trade.startDate,
      (tradeChangeDates.get(trade.startDate) || 0) + trade.volume
    );

    tradeChangeDates.set(
      endDateString,
      (tradeChangeDates.get(endDateString) || 0) - trade.volume
    );

    return tradeChangeDates;
  }, new Map());

module.exports = getTradeChangeByDate;

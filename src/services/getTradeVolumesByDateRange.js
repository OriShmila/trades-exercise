const moment = require("moment");
const TradeQueries = require("../DAL/volumeDataCollectionHandler");
const { constants } = require("../utils");

const getTradeVolumesByDateRange = async (range) => {
  const result = await TradeQueries.getDataForDateRange(range);

  return result
    ? result.reduce((tradesObject, trade) => {
        tradesObject[moment(trade.date).format(constants.DATE_FORMAT)] =
          trade.volume;

        return tradesObject;
      }, {})
    : {};
};

module.exports = getTradeVolumesByDateRange;

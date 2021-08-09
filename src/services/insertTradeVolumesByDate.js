const convertData = require("../dataHandler");
const TradeQueries = require("../DAL/volumeDataCollectionHandler");

const insertTradeVolumesByDate = (trades) =>
  TradeQueries.insertVolumeDataToMongo(convertData(trades));

module.exports = insertTradeVolumesByDate;

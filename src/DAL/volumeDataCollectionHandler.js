const volumeDataModel = require("./models/volumeDataModel");

// TODO
const insertVolumeDataToMongo = (trades = []) => {
  const tradesUpdate = trades.map((trade) => ({
    replaceOne: {
      upsert: true,
      filter: { date: trade.date },
      replacement: trade,
    },
  }));

  return volumeDataModel.bulkWrite(tradesUpdate);
};

// TODO
const getDataForDateRange = ({ startDate, endDate }) =>
  volumeDataModel.find({
    date: {
      $gte: startDate,
      $lt: endDate,
    },
  });

module.exports = { getDataForDateRange, insertVolumeDataToMongo };

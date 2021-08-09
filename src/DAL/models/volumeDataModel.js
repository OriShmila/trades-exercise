const mongoose = require("mongoose");

const volumeDataSchema = new mongoose.Schema(
  {
    date: Date,
    volume: Number,
  },
  { timestamps: true, strict: false }
);

const volumeDataModel = mongoose.model(
  "volumeData",
  volumeDataSchema,
  "volumeData"
);

module.exports = volumeDataModel;

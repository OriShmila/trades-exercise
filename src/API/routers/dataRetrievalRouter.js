const { Router } = require("express");
const Services = require("../../services");
const basicAuthMiddleware = require("../middlewares");
const { constants, createDateObject } = require("../../utils");

const router = Router();
const DATE_FORMAT = constants.DATE_FORMAT;

router.use(basicAuthMiddleware);

// TODO
router.get("/", async (req, res) => {
  const startDate = req.query.startDate;
  const endDate = req.query.endDate;

  if (!startDate || !endDate) {
    res.status(422).json("missing properties");
    return;
  }

  const rangeDate = {
    startDate: createDateObject(startDate, DATE_FORMAT),
    endDate: createDateObject(endDate, DATE_FORMAT),
  };

  try {
    const result = await Services.getTradeVolumesByDateRange(rangeDate);

    res.status(200).json(result);
  } catch (error) {
    res.status(404).json("Not found");
  }
});

module.exports = router;

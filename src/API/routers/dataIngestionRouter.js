const { Router } = require("express");
const Services = require("../../services");

const router = Router();

router.get("/health", (req, res) => {
  return res.status(200).send("healthy");
});

// TODO
router.post("/data", async (req, res) => {
  const trades = req.body;

  if (
    !trades.length ||
    trades?.some(
      (trade) =>
        !trade.startDate || !trade.endDate || typeof trade.volume !== "number"
    )
  ) {
    res.status(422).json("missing properties");
    return;
  }

  try {
    await Services.insertTradeVolumesByDate(trades);

    res.status(201).json("trades added");
  } catch (error) {
    res.status(404).json("Not found");
  }
});

module.exports = router;

const express = require("express");
const mongoose = require("mongoose");
const { Routers } = require("./API");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", Routers.dataIngestionRouter);
app.use("/private", Routers.dataRetrievalRouter);

// Mongo DB connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is listening on port : ${port}`);
    });
  });

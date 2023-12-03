const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const imageRouter = require("./route/imageRoute");
const breedRouter = require("./route/breedRoute");
const top10Router = require("./route/top10Route");
const errorHandler = require("./middleware/errorHandler");
const notFound = require("./middleware/notFound");

const port = 3000;
app.use(cors());
app.get("/", (req, res) => {
  res.send("dog wiki");
});

app.use("/api/v1/images", imageRouter);
app.use("/api/v1/breeds", breedRouter);
app.use("/api/v1/top10", top10Router);

app.use(errorHandler);
app.use(notFound);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

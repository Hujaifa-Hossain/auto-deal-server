const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const carRoute = require("./routes/carRoute");
const reviewRoute = require("./routes/reviewRoute");
const orderRoute = require("./routes/orderRoute");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello from auto deal server!");
});

// ROUTES
app.use("/api", userRoute);
app.use("/api", carRoute);
app.use("/api", reviewRoute);
app.use("/api", orderRoute);

// CONNECTION & LISTENING
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running @ http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error, "not connected!");
  });

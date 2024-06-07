require("dotenv").config();
const express = require("express");
const { pgClient } = require("./db/connection");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", require("./routers/userRouter"));

pgClient.connect((err) => {
  if (!err) {
    console.log("connected");
    app.listen(process.env.PORT, () => {
      console.log(`Serevr is running on ${process.env.PORT}`);
    });
  } else {
    console.log({ status: "connection failed", error: err });
  }
});

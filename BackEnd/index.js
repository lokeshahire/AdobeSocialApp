const express = require("express");
const { dbConnection } = require("./configs/db");

const cors = require("cors");
const { userRouter } = require("./routes/user.route");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use("/users", userRouter);

app.listen(8000, async () => {
  try {
    await dbConnection;
    console.log("Connected to db");
  } catch (e) {
    console.log(e.message);
  }
  console.log("listening on port 8000");
});

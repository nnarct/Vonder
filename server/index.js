const express = require("express");
const cors = require("cors");
const data = require("./data.json");
const { addNewTransaction } = require("./addNewTransaction");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json(data);
});

app.post("/addNewTransaction", addNewTransaction);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
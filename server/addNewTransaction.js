const fs = require("fs");
const addNewTransaction = (req, res) => {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err)
      return res.json({ status: false, message: "Error reading JSON file" });
    const json = JSON.parse(data);
    const transactions = json.transactions;

    if (json.transactions.hasOwnProperty(req.body.category)) {
      json.transactions[req.body.category].push(req.body.data);
      json.info.totalTransaction += 1;
      let sum = 0;
      Object.values(transactions).forEach((category) => {
        category.forEach((transaction) => {
          if (transaction.value < 0) {
            sum += transaction.value;
          }
        });
      });
      json.info.remainingQuota = json.info.totalQuota + sum;
      json.info.resetAt = new Date().getTime();
      json.info.lastUpdateAt = new Date().getTime();
    } else
      return res.json({
        status: false,
        message: "Category not found in JSON file",
      });
    // json.transactions[req.body.category] = [req.body.data];
    fs.writeFile("data.json", JSON.stringify(json, null, 2), (err) => {
      if (err)
        return res.json({ status: false, message: "Error writing JSON file" });
      return res.json({ status: true, message: "Success" });
    });
  });
};

module.exports = { addNewTransaction };
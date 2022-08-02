const models = require("../models");

class CounterStarterController {
  static browse = (req, res) => {
    models.product
      .get()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

}

module.exports = CounterStarterController;
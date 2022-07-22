const models = require("../models");

class MenuController {
  static browse = (req, res) => {
    models.menu_of_the_day
      .get()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.menu_of_the_day
      .getOne(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const menu_of_the_day = req.body;

    menu_of_the_day.id = parseInt(req.params.id, 10);

    models.menu_of_the_day
      .update(menu_of_the_day)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const menu_of_the_day = req.body;

    // TODO validations (length, format...)

    models.menu_of_the_day
      .insert(menu_of_the_day)
      .then(([result]) => {
        res.status(201).send({ ...menu_of_the_day, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.menu_of_the_day
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = MenuController;

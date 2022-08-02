const models = require("../models");

class ProductController {

  static counterstarter = async (req, res) => {
    models.product
      try {
        const counterStarter = await models.product.counterStarter(req.query);
        res.status(200).json(counterStarter);
      } catch {
          res.status(500).send("erreur");
      }
  };

  static countermaincourse = async (req, res) => {
    models.product
      try {
        const counterMainCourse = await models.product.counterMainCourse(req.query);
        res.status(200).json(counterMainCourse);
      } catch {
          res.status(500).send("erreur");
      }
  };

  static counterdessert = async (req, res) => {
    models.product
      try {
        const counterDessert = await models.product.counterDessert(req.query);
        res.status(200).json(counterDessert);
      } catch {
          res.status(500).send("erreur");
      }
  };

  static counterdrink = async (req, res) => {
    models.product
      try {
        const counterDrink = await models.product.counterDrink(req.query);
        res.status(200).json(counterDrink);
      } catch {
          res.status(500).send("erreur");
      }
  };


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

  static read = (req, res) => {
    models.product
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
    const product = req.body;

    product.id = parseInt(req.params.id, 10);

    models.product
      .update(product)
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
    const product = req.body;

    // TODO validations (length, format...)

    models.product
      .insert(product)
      .then(([result]) => {
        res.status(201).send({ ...product, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.product
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

module.exports = ProductController;

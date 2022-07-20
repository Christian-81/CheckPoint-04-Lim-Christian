const AbstractManager = require("./AbstractManager");

class ProductManager extends AbstractManager {
  static table = "product";

  get() {
    return this.connection.query(`SELECT * FROM ${ProductManager.table}`);
  }

  getOne(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`,
    [id]);
  }
}

module.exports = ProductManager;

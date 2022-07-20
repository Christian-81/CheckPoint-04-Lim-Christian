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

  update(product) {
    return this.connection.query(
      `update ${ProductManager.table} set ? where id = ?`,
      [product, product.id]
    );
  }

  insert(product) {
    return this.connection.query(
      `insert into ${ProductManager.table} (title, price, img, alt, description, category_id) values (?, ?, ?, ?, ?, ?)`,
      [product.title, product.price, product.img, product.alt, product.description, product.category_id]
    );
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }

}

module.exports = ProductManager;

const AbstractManager = require("./AbstractManager");

class ProductManager extends AbstractManager {
  static table = "product";

  get() {
    return this.connection.query(`SELECT * FROM ${ProductManager.table}`);
  }

  getOne(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  counterStarter() {
    return this.connection
      .query(
        `SELECT COUNT(*) AS cs 
        FROM ${ProductManager.table} 
        INNER JOIN category ON category.id = product.category_id 
        WHERE category_id = 1`)
      .then((res) => res[0][0].cs);
  }

  counterMainCourse() {
    return this.connection
      .query(
        `SELECT COUNT(*) AS cmc 
        FROM ${ProductManager.table} 
        INNER JOIN category ON category.id = product.category_id 
        WHERE category_id = 2`)
      .then((res) => res[0][0].cmc);
  }

  counterDessert() {
    return this.connection
      .query(
        `SELECT COUNT(*) AS cd 
        FROM ${ProductManager.table} 
        INNER JOIN category ON category.id = product.category_id 
        WHERE category_id = 3`)
      .then((res) => res[0][0].cd);
  }

  counterDrink() {
    return this.connection
      .query(
        `SELECT COUNT(*) AS cdk 
        FROM ${ProductManager.table} 
        INNER JOIN category ON category.id = product.category_id 
        WHERE category_id = 4`)
      .then((res) => res[0][0].cdk);
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
      [
        product.title,
        product.price,
        product.img,
        product.alt,
        product.description,
        product.category_id,
      ]
    );
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }
}

module.exports = ProductManager;

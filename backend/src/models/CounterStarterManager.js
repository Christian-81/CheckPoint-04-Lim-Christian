const AbstractManager = require("./AbstractManager");

class CounterStarterManager extends AbstractManager {
  static table = "product";

  get() {
    return this.connection.query(
        `SELECT COUNT(*) 
        FROM ${CounterStarterManager.table} 
        INNER JOIN category ON category.id = product.category_id 
        WHERE category_id = 1`);
  }


}

module.exports = CounterStarterManager;

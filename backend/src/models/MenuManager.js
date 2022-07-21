const AbstractManager = require("./AbstractManager");

class MenuManager extends AbstractManager {
  static table = "menu_of_the_day";

  get() {
    return this.connection.query(`
      SELECT m.label, m.price_menu, p.title AS start_title, p2.title AS main_course, p3.title AS dessert 
      FROM ${MenuManager.table} AS m 
      INNER JOIN product AS p ON p.id = m.starter_id 
      INNER JOIN product AS p2 ON p2.id = m.main_course_id 
      INNER JOIN product AS p3 ON p3.id = m.dessert_id 
      `);
  }

  // get() {
  //   return this.connection.query(`SELECT * FROM ${MenuManager.table}`);
  // }

  getOne(id) {
    return this.connection.query(`SELECT * FROM  ${this.table} where id = ?`,
    [id]);
  }

  update(menu_of_the_day) {
    return this.connection.query(
      `update ${MenuManager.table} set ? where id = ?`,
      [menu_of_the_day, menu_of_the_day.id]
    );
  }

  insert(menu_of_the_day) {
    return this.connection.query(
      `insert into ${MenuManager.table} (label, price_menu, starter_id, main_course_id, dessert_id, drink_id) values (?, ?, ?, ?, ?, ?)`,
      [menu_of_the_day.label, menu_of_the_day.price_menu, menu_of_the_day.starter_id, menu_of_the_day.main_course_id, menu_of_the_day.dessert_id, menu_of_the_day.drink_id]
    );
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }

}

module.exports = MenuManager;

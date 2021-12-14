const db = require("../database/connection");

export function createModule(data) {
  return db.query("INSERT INTO module (module,user_id) VALUES($1,$2)", [
    data.module,
    data.userId,
  ]);
}

export function getModules(userId) {
  return db
    .query("SELECT * FROM modules WHERE id=$1", userId)
    .then((data) => data.rows);
}

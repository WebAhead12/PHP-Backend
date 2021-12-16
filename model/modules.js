const db = require("../database/connection");

function createModule(data) {
  return db.query(
    "INSERT INTO modules (module,user_id) VALUES($1,$2) RETURNING id",
    [data.module, data.userId]
  );
}

function getModules(userId) {
  return db
    .query("SELECT * FROM modules WHERE user_id=$1", [userId])
    .then((data) => data.rows);
}

function updateModule(module, moduleId) {
  return db.query("UPDATE modules SET module=$1 WHERE id=$2", [
    module,
    moduleId,
  ]);
}

function deleteModule(moduleId) {
  return db.query("DELETE FROM modules WHERE id=$1", [moduleId]);
}
module.exports = { createModule, getModules, updateModule, deleteModule };

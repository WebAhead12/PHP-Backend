const db = require("../database/connection");
//inserts the user's module from the database
function createModule(data) {
  return db.query("INSERT INTO modules (module,user_id) VALUES($1,$2) RETURNING id", [data.module, data.userId]);
}
//gets all the user's modules from the database
function getModules(userId) {
  return db.query("SELECT * FROM modules WHERE user_id=$1", [userId]).then((data) => data.rows);
}
//updates the user's module from the database
function updateModule(module, moduleId) {
  return db.query("UPDATE modules SET module=$1 WHERE id=$2", [module, moduleId]);
}
//deltes the user's module from the database
function deleteModule(moduleId) {
  return db.query("DELETE FROM modules WHERE id=$1", [moduleId]);
}
module.exports = { createModule, getModules, updateModule, deleteModule };

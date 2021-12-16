const model = require("../model/modules");

function createModules(req, res, next) {
  const obj = { module: req.body, userId: req.id };
  model
    .createModule(obj)
    .then((id) => res.status(200).send(id))
    .catch(next);
}

function updateModules(req, res, next) {
  model
    .updateModule(req.body.module, req.body.id)
    .then(() => res.status(200).send("updatedModule"))
    .catch(next);
}

function deleteModules(req, res, next) {
  model
    .deleteModule(req.body.id)
    .then(() => res.status(200).send("deletedModule"))
    .catch(next);
}

function sendModules(req, res, next) {
  model
    .getModules(req.id)
    .then((data) => res.status(200).send(data))
    .catch(next);
}

module.exports = { createModules, updateModules, deleteModules, sendModules };

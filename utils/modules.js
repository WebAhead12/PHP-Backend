const model = require("../model/modules");

function createModules(req, res, next) {
  const obj = { module: req.body, userId: req.id };
  model
    .createModule(obj)
    .then((data) => res.status(200).send({ response: "success", moduleId: data.rows[0].id }))
    .catch((_error) => {
      const error = new Error("Something went wrong while trying to create a module");
      error.status = 404;
      next(error);
    });
}

function updateModules(req, res, next) {
  model
    .updateModule(req.body.module, req.body.id)
    .then(() => res.status(200).send({ response: "updatedModule" }))
    .catch((_error) => {
      const error = new Error("Something went wrong while updating the module");
      error.status = 404;
      next(error);
    });
}

function deleteModules(req, res, next) {
  model
    .deleteModule(req.body.id)
    .then(() => res.status(200).send({ response: "deletedModule" }))
    .catch((_error) => {
      const error = new Error("Something went wrong while trying to delete the module");
      error.status = 404;
      next(error);
    });
}

function sendModules(req, res, next) {
  model
    .getModules(req.id)
    .then((data) => res.status(200).send({ message: success, modules: data }))
    .catch((_error) => {
      const error = new Error("Something went wrong while trying to get the modules");
      error.status = 404;
      next(error);
    });
}

module.exports = { createModules, updateModules, deleteModules, sendModules };

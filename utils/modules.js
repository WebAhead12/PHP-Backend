const model = require("../model/modules");
//creates user's module
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
//updates user's module
function updateModules(req, res, next) {
  console.log(req.id);
  model
    .getModules(req.id)
    .then((data) => {
      console.log(data);
      const findModule = data.find((element) => element.id === req.body.id);
      if (findModule) {
        model
          .updateModule(req.body.module, req.body.id)
          .then(() => res.status(200).send({ response: "updatedModule" }))
          .catch((_error) => {
            const error = new Error("Something went wrong while updating the module");
            error.status = 404;
            next(error);
          });
      }
      res.status(401).send({ response: "You can't change a module which is not yours" });
    })
    .catch((_error) => {
      const error = new Error("Something went wrong while trying to get the modules");
      error.status = 404;
      next(error);
    });
}
//deletes user's module
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
//sends all user's modules
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

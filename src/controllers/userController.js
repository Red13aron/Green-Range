const db = require("../models");

// Defining methods for the booksController
module.exports = {
  
  findUserId: function(req, res) {
    // console.log("redsjad", req.query)
    db.User
    .findOne(req.query)
    .then(dbModel => res.json(dbModel._id))
    .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({_id:-1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("controller test");
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
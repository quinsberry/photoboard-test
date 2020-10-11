const { validationResult } = require("express-validator");

const Board = require("../models/Board");
const Image = require("../models/Image");

function BoardsController() {}

const create = function (req, res) {
  const data = {
    name: req.body.name,
    images: [],
  };

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(403).json({
      success: false,
      errors: errors,
    });
  }

  Board.create(data, function (err, doc) {
    if (err) {
      return res.status(500).json({
        success: false,
        errors: err,
      });
    }

    res.status(201).json({
      success: true,
      data: doc,
    });
  });
};

const all = function (req, res) {
  Board.find({}, function (err, doc) {
    if (err) {
      return res.status(500).json({
        success: false,
        errors: [err],
      });
    }

    res.status(200).json({
      success: true,
      data: doc.map((board) => ({ _id: board._id, name: board.name })),
    });
  });
};

const show = async function (req, res) {
  const id = req.params.id;
  Board.findOne({ _id: id }, function (err, doc) {
    if (!doc) {
      return res.status(500).json({
        success: false,
        errors: "Cannot find the board",
      });
    }

    if (err) {
      return res.status(500).json({
        success: false,
        errors: "Something wrong with boards",
      });
    }

    Image.find({ board: doc.name }, function (error, images) {
      let data = doc;
      data.images = images;
      res.status(200).json({
        success: true,
        data,
      });
    });
  });
};

BoardsController.prototype = {
  show,
  all,
  create,
};

module.exports = BoardsController;

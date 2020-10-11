const { validationResult } = require("express-validator");
const fetch = require("node-fetch");

const Image = require("../models/Image");

function ImagesController() {}

const addArray = function (req, res) {
  const images = req.body.images;

  const correctArr = images.map((item) => {
    return {
      imageUrl: item,
      tags: [],
      board: "default",
    };
  });

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(403).json({
      success: false,
      errors: errors,
    });
  }

  Image.insertMany(correctArr, function (err, doc) {
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

const create = function (req, res) {
  const data = {
    imageUrl: req.body.imageUrl,
    board: req.body.board,
    tags: req.body.tags,
  };

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(403).json({
      success: false,
      errors: errors,
    });
  }

  Image.create(data, function (err, doc) {
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
  Image.find({}, function (err, doc) {
    if (err) {
      return res.status(500).json({
        success: false,
        errors: [err],
      });
    }

    res.status(200).json({
      success: true,
      data: doc,
    });
  });
};

const showBoard = function (req, res) {
  const board = req.query.name;
  Image.find({ board }, function (err, doc) {
    if (err) {
      return res.status(500).json({
        success: false,
        errors: [err],
      });
    }

    res.status(200).json({
      success: true,
      data: doc,
    });
  });
};

const removeAllTags = async function (req, res) {
  const board = req.params.name;

  Image.updateMany({ board }, { tags: [] }, function (err, _) {
    if (err) {
      return res.status(500).json({
        success: false,
        errors: "Error with updating tags",
      });
    }

    Image.find({ board }, function (err, doc) {
      if (err) {
        return res.status(500).json({
          success: false,
          errors: "Cannot find images from this board",
        });
      }

      res.status(200).json({
        success: true,
        data: doc,
      });
    });
  });
};

const addTags = async function (req, res) {
  const board = req.params.name;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(403).json({
      success: false,
      errors: errorsConverter(errors),
    });
  }

  Image.find({ board }, function (err, doc) {
    if (!doc) {
      return res.status(400).json({
        success: false,
        errors: "Board is empty",
      });
    }

    if (err) {
      return res.status(500).json({
        success: false,
        errors: err,
      });
    }
    let arr = [];

    class Observable {
      constructor(exec) {
        this.listeners = new Set();
        exec({
          next: (value) =>
            this.listeners.forEach(({ next }) => next && next(value)),
          error: (err) =>
            this.listeners.forEach(({ error }) => error && error(err)),
          complete: () =>
            this.listeners.forEach(({ complete }) => complete && complete()),
        });
      }
      subscribe(listeners) {
        this.listeners.add(listeners);
        return { unsubscribe: () => this.listeners.delete(listeners) };
      }
    }
    const interval = new Observable(({ next }) => {
      setInterval(() => next(doc), 1000);
    });

    let i = -1;
    const subscription = interval.subscribe({
      next: (data) => {
        if (i === doc.length - 1) {
          console.log("FINISH");
          subscription.unsubscribe();

          Image.deleteMany({ board }, function (err, _) {
            if (err) {
              return res.status(500).json({
                success: false,
                errors: "Error with deleting old collection",
              });
            }
            Image.insertMany(data, function (err, doc) {
              if (err) {
                return res.status(500).json({
                  success: false,
                  errors: "Error with insert new collection",
                });
              }

              res.status(200).json({
                success: true,
                data: data,
              });
            });
          });
          return;
        }
        i++;
        console.log(i);
        fetch(`https://api.imagga.com/v2/tags?image_url=${data[i].imageUrl}`, {
          method: "GET",
          headers: {
            apiKey: process.env.IMAGGA_KEY,
            apiSecret: process.env.IMAGGA_SECRET,
            Authorization: process.env.IMAGGA_AUTH,
          },
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.result) {
              return (data[i].tags = res.result.tags
                .slice(0, 6)
                .map((tag) => ({ ...tag, tag: tag.tag.en })));
            } else {
              console.log("error with id: ", data[i]._id);
              data[i].tags = ["undefined"];
            }
          });
      },
    });
  });
};

ImagesController.prototype = {
  addArray,
  all,
  create,
  addTags,
  showBoard,
  removeAllTags,
};

module.exports = ImagesController;

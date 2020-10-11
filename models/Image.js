const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    imageUrl: String,
    board: String,
    tags: Array,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Image", schema);

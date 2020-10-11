const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: String,
    images: Array,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Board", schema);

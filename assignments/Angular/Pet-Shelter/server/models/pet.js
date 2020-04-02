const mongoose = require('mongoose');
const { Schema } = mongoose;

const petSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      min: 3,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      min: 3,
      trim: true,
    },
    skillOne: String,
    skillTwo: String,
    skillThree: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Pet', petSchema);

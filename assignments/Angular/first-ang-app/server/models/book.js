const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      min: 3,
      trim: true,
    },
    pages: {
      type: Number,
      required: true,
      min: 1,
    },
    year: {
      type: Number,
      required: true,
      min: 1800,
      max: 2018,
    },
    publisher: {
      type: String,
      required: true,
      min: 3,
    },
  },
  {
    timestamps: true,
  }
);

// collection => books
module.exports = mongoose.model('Book', bookSchema);

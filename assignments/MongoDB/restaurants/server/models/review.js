const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema(
  {
    customer: {
      type: String,
      required: [true, 'enter your name'],
      min: 3,
      trim: true,
    },
    stars: {
      type: Number,
      required: [true, 'enter star rating'],
      min: 1,
      max: 5,
    },

    description: {
      type: String,
      required: [true, 'enter review content'],
      min: 3,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Review', reviewSchema);

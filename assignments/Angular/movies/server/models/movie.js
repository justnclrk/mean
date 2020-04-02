const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Please enter title'],
      min: 3,
      trim: true,
    },
    reviewer: {
      type: String,
      required: [true, 'Please enter name'],
      min: 3,
      trim: true,
    },

    stars: {
      type: Number,
      required: [true, 'Please add stars'],
      min: 1,
      max: 5,
    },

    content: {
      type: String,
      required: [true, 'Please enter your review'],
      min: 3,
      trim: true,
    },

    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Movie', movieSchema);

const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema(
  {
    reviewer: {
      type: String,
      required: [true, 'Enter a name you must.'],
      min: 3,
      trim: true,
    },

    stars: {
      type: Number,
      required: [true, 'Dont leave the stars empty'],
      min: 1,
      max: 5,
    },

    content: {
      type: String,
      required: [true, 'Tell us how this movie made you feel, enter a review'],
      min: 3,
      trim: true,
    },
    movie: { type: Schema.Types.ObjectId, ref: 'Movie' },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Review', reviewSchema);

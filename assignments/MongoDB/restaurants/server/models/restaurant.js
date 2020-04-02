const mongoose = require('mongoose');
const { Schema } = mongoose;

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'please enter restaurant name'],
      min: 3,
      trim: true,
    },
    cuisine: {
      type: String,
      required: [true, 'please enter restaurant cuisine'],
      min: 3,
      trim: true,
    },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Restaurant', restaurantSchema);

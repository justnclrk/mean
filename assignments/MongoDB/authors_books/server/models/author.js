const mongoose = require('mongoose');
const { Schema } = mongoose;

const authorSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [3, 'Author name must be at least 3 chars']
    },
    age: Number,
    isAlive: {
        type: Boolean,
        default: true,
    },
    books: [{
        type: Schema.Types.ObjectId,
        ref: 'Book',
    },
    ], 
}, {
    timestamps: true,
});

module.exports = mongoose.model('Author', authorSchema);
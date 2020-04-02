const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema({
    title: {
        type: String,
        required: [true, 'A book title is required'],
        trim: true,
        minlength: [2, 'Book title length must be at least 3 chars']
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
    },
    pages: Number,
    year: Number,
    publisher: String,
});

module.exports = mongoose.model('Book', BookSchema);

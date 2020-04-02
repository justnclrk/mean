const mongoose = require('mongoose');
module.exports = mongoose.model('User', {
name: String
});

module.exports = mongoose.model('Quote', {
quote: String
});
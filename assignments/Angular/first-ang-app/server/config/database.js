const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const reg = new RegExp('\\.js$', 'i');
const modelsPath = path.join(__dirname, '../models');

mongoose.connect('mongodb://localhost/books'); // use username/password for db protection!
mongoose.connection.on('connected', () => console.log('connected to mongodb'));

fs.readdirSync(modelsPath).forEach(file => {
  if (reg.test(file)) {
    require(path.join(modelsPath, file));
  }
});

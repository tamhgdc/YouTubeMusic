const {Schema, model, ObjectId} = require('mongoose');

const MainSlider = new Schema({
  img: {type: 'String', required: true},
  name: {type: 'String', required: true},
  author: {type: 'String', required: true},
});

module.exports = model('MainSlider', MainSlider);
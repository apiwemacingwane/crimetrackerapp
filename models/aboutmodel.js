const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const aboutSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: [true, 'Enter your name']
  },
  email: {
    type: String,
    required: [true, 'Please provide your email']
  },
  description: {
    type: String,
    required: [true, 'Please provide a query']
  },
});

const About = mongoose.model('About', aboutSchema);
module.exports = About;
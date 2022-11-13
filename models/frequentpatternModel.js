const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const patternsSchema = mongoose.Schema({
    pattern1:{
        type : Array
    }
});

const patterns = mongoose.model('patterns', patternsSchema);
module.exports = patterns;

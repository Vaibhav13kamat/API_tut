const mongoose = require('mongoose');



const AuthorSchema = mongoose.Schema({
    name: {
        type : String,
        required: true
    },
    description: {
        type : String,
        required: true
    }
});

module.exports = mongoose.model('Authors',AuthorSchema);
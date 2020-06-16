const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    totalpoint: {
        type: Number,
        required: true
    }
});

userSchema.methods.check = function(guess) {
     
}

module.exports = mongoose.model('user', userSchema);
const mongoose = require('mongoose');

const userSchema = {
    _id: mongoose.Schema.Types.ObjectId,
    email: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
}

module.exports = mongoose.model("User", userSchema);
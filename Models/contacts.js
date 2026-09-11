const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(

    {
        name: String,
        age: Number,
        email: { type: String, required: true }

    }
)

module.exports = mongoose.model('topContact', contactSchema)
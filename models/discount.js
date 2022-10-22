const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const discount = new Schema({

    code: {type: String, required: true, lowercase: true,},
    partner: {type: String, required: true},
    amount: {type: Number, required: true},
    validity: {type: String, required: false},
},
{timestamps: true}
); 
module.exports = mongoose.model("discount", discount)
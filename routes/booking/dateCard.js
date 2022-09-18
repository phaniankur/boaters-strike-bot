const express = require('express');
const router = express.Router();

const baseAPI = require('../../config/baseAPI.js')
const {rideCards} = require('../../config/data.js')
const booking = require('../../models/booking.js');
const Create = require('../../interfaces/strike');
const dateCardMethod = require('../../methods/dateCardMethod.js');

router.post('/', async (req,res) => {

    let strikeObj = await dateCardMethod(req);
    
    res.status(200).json(strikeObj.Data());
});

module.exports = router;
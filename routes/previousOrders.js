const express = require('express');
const baseAPI = require('../config/baseAPI');
const Create = require('../interfaces/strike');
const router = express.Router();
const booking = require("../models/booking");

//template
router.post('/previousorder', async(req,res) => {
    // console.log('previous order', req.body)
    try{
        const strikeBody = req.body.bybrisk_session_variables;
        const allBookings = await booking.find({
        "riderPhone" :parseInt(strikeBody.phone),
        "rideDetails.bookingStatus": "booked"
        }).sort({_id: -1});
    
        let totalBookings = allBookings.length;
        let allDetails = {
        totalBookings,
        allBookings
        }
        res.status(200).json(allDetails)
        console.log("All details", allDetails)
    }catch(err){
        console.log(err)
    }
    const strikeObj = new Create('getting_started', '');
    // const strikeObj = new Create('getting_started', `${baseAPI}timecard/${newBooking._id}`);

    // Question date
    rideDateObj = strikeObj.Question('dateOfRide');

    // Answer date
    rideDateObj.QuestionText().
        SetTextToQuestion("👇Select your ride date");
    rideDateObj.DateInput('Select Date');
});


  module.exports = router;
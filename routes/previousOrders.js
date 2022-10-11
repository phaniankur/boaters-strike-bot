<<<<<<< HEAD
const express = require('express');
const Create = require('../interfaces/strike');
const router = express.Router();
const booking = require("../models/booking");
const { orange } = require('../config/constants');

router.post('/previousorder', async(req,res) => {
    // console.log('previous order', req.body)
    let allBookings = [];
    const strikeBody = req.body.bybrisk_session_variables;
    try{
         allBookings = await booking.find({
        "riderPhone" :parseInt(strikeBody.phone),
        "rideDetails.bookingStatus": "booked"
        }).sort({_id: -1});
    
        // let totalBookings = allBookings.length;
        // let allDetails = {
        // totalBookings,
        // allBookings
        // }
        // res.status(200).json(allBookings)
        // console.log("All details", allBookings)
    }catch(err){
        console.log(err)
    }
    const strikeObj = new Create('getting_started', '');
    console.log(allBookings)
    
        // Question interface 2
    //defining question obj
    questionNumberObj = strikeObj.Question('rideRoute');
    questionNumberObj.QuestionText().
        SetTextToQuestion("👇 Your Rides");
    
    // Answer interface 2
    // defining an answer obj for the above  question
    timeSlotAnswerObj = questionNumberObj.Answer(true);
    timeSlotAnswerObj.AnswerCardArray(strikeObj.VERTICAL_ORIENTATION);

    if(allBookings.length >0){
      for(let i=0;i<allBookings.length;i++) {

        timeSlotAnswerObj = timeSlotAnswerObj.AnswerCard().
            SetHeaderToAnswer(10,strikeObj.HALF_WIDTH).
            AddTextRowToAnswer(strikeObj.H4,`Scheduled on: ${allBookings[i].rideDetails.rideDate}` ,"#E14D2A",false).
            AddTextRowToAnswer(strikeObj.H4, `Time: ${allBookings[i].rideDetails.rideTime}`,"Black",true).
            AddTextRowToAnswer(strikeObj.H4, `Paid Amount: ₹${allBookings[i].orderDetails.bookingPrice} `,"#Black",true).
            AddTextRowToAnswer(strikeObj.H4, `Pick-Up Station: ${allBookings[i].rideDetails.pickupGhat} `, orange , true).
            AddTextRowToAnswer(strikeObj.H5 ,`Booking Status: ${allBookings[i].orderDetails.bookingStatus}`,"Black",false).
            AddTextRowToAnswer(strikeObj.H5, `Order ID: ${allBookings[i].orderDetails.orderID} `,"#687987",false);
	}  
    }else{
        timeSlotAnswerObj = timeSlotAnswerObj.AnswerCard().
            SetHeaderToAnswer(10,strikeObj.HALF_WIDTH).
            AddTextRowToAnswer(strikeObj.H4,'You do not have any rides with us yet. 😅'  ,"#E14D2A",false)
    }

    

    res.status(200).json(strikeObj.Data());
    });


=======
const express = require('express');
const Create = require('../interfaces/strike');
const router = express.Router();
const booking = require("../models/booking");
const { orange } = require('../config/constants');

router.post('/previousorder', async(req,res) => {
    // console.log('previous order', req.body)
    let allBookings = [];
    const strikeBody = req.body.bybrisk_session_variables;
    try{
         allBookings = await booking.find({
        "riderPhone" :parseInt(strikeBody.phone),
        "rideDetails.bookingStatus": "booked"
        }).sort({_id: -1});
    
        // let totalBookings = allBookings.length;
        // let allDetails = {
        // totalBookings,
        // allBookings
        // }
        // res.status(200).json(allBookings)
        // console.log("All details", allBookings)
    }catch(err){
        console.log(err)
    }
    const strikeObj = new Create('getting_started', '');
    
        // Question interface 2
    //defining question obj
    questionNumberObj = strikeObj.Question('rideRoute');
    questionNumberObj.QuestionText().
        SetTextToQuestion("👇 Your Rides");
    
    // Answer interface 2
    // defining an answer obj for the above  question
    timeSlotAnswerObj = questionNumberObj.Answer(true);
    timeSlotAnswerObj.AnswerCardArray(strikeObj.VERTICAL_ORIENTATION);

    for(let i=0;i<allBookings.length;i++) {

        timeSlotAnswerObj = timeSlotAnswerObj.AnswerCard().
            SetHeaderToAnswer(10,strikeObj.HALF_WIDTH).
            AddTextRowToAnswer(strikeObj.H4,`Scheduled on: ${allBookings[i].rideDetails.rideDate}` ,"#E14D2A",false).
            AddTextRowToAnswer(strikeObj.H4, `Time: ${allBookings[i].rideDetails.rideTime}`,"Black",true).
            AddTextRowToAnswer(strikeObj.H4, `Paid Amount: ₹${allBookings[i].rideDetails.bookingPrice} `,"#Black",true).
            AddTextRowToAnswer(strikeObj.H4, `Pick-Up Station: ${allBookings[i].rideDetails.pickupGhat} `, orange , true).
            AddTextRowToAnswer(strikeObj.H5 ,`Booking Status: ${allBookings[i].rideDetails.bookingStatus}`,"Black",false).
            AddTextRowToAnswer(strikeObj.H5, `Order ID: ${allBookings[i].rideDetails.orderID} `,"#687987",false);
	}

    res.status(200).json(strikeObj.Data());
    });


>>>>>>> 4b194cbb85be9d87af25db80cee9158f9f361797
  module.exports = router;
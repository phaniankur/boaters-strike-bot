const express = require('express');
const router = express.Router();
const booking = require("../../models/booking");

//template
router.get('/getallbookings', async(req,res) => {

  let phone = req.body.riderPhone;
  let status = req.body.status;
  try{

    if(phone === '' && status === ''){
      allBookings = await booking.find({}).sort({_id: -1})
    } else{
      phone !== '' && status === 'all' ?
    allBookings = await booking.find({
      "riderPhone" :parseInt(phone)
      }).sort({_id: -1})
      :
      allBookings = await booking.find({
        "riderPhone" :parseInt(phone),
        "orderDetails.bookingStatus": status
        }).sort({_id: -1})
    }
    
    let totalBookings = allBookings.length;
    let allDetails = {
      totalBookings,
      allBookings
    }
    res.status(200).json(allDetails)
  }catch(err){
    console.log(err)
    res.status(400).json("validation error")
  }
    
  });

  module.exports = router;
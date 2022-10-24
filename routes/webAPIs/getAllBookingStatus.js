const express = require('express');
const router = express.Router();
const booking = require("../../models/booking");

//template
router.get('/getallbookings', async(req,res) => {

  let phone = parseInt(req.body.riderPhone);
  let status = req.body.status;
  let orderId = req.body.orderId;
  try{
    let allBookings = await booking.find({
      "$and": [
        phone?
        {'riderPhone': phone}: {},
        status?
        {'orderDetails.bookingStatus': status}: {},
        orderId?
        {'orderDetails.orderID': orderId}: {}
      ]        
    }).sort({_id: -1})   
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
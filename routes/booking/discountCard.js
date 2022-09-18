const express = require('express');
const router = express.Router();

const booking = require('../../models/booking.js');
const getUserData = require('../../middlewares/getUserData.js');
const discount = require('../../methods/discount');

router.post('/:id', getUserData, async(req,res,next) => {

    const strikeBody = req.body.bybrisk_session_variables;
    const userResp = req.body.user_session_variables;
    const dbRes = req.body.user_session_variables.rideDetails;
    // console.log('dicount Price', req.body)

    try{
         userResp.basePrice[0] = userResp.basePrice[0].replace('₹', '')
        await booking.findByIdAndUpdate(req.params.id,{
            riderPhone: strikeBody.phone,
            rideDetails:{
                rideTime: dbRes.rideTime,
                rideDate: dbRes.rideDate,
                rideRoute: dbRes.rideRoute,
                bookingPrice: userResp.basePrice[0]
            },
        })
    }catch(err){
        console.log(err)
    }

    let strikeObj = await discount(req);

    res.status(200).json(strikeObj.Data());
});

module.exports = router;
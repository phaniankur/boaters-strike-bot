const express = require('express');
const router = express.Router();

const booking = require('../../models/booking.js');
const getUserData = require('../../middlewares/getUserData.js');
const acceptDiscountMethod = require('../../methods/acceptDiscountMethod.js');
const price = require('../../methods/price.js');
const emailMethod = require('../../methods/emailMethod.js');

router.post('/:id', getUserData, async(req,res) => {
try{
    // console.log('Email', req.body)
    const strikeBody = req.body.bybrisk_session_variables;
    const userResp = req.body.user_session_variables;
    const dbRes = req.body.user_session_variables.rideDetails;

    let strikeObj;
    if(userResp.confirmBooking[0] === 'Proceed to Payment'){
        // do something
        strikeObj = await emailMethod(req);
    } else if(userResp.confirmBooking[0] === 'Cancel'){
        strikeObj = await cancelBookingMethod(req);
    }
    // if(rideTime === '↩️ Go Back'){
    //     strikeObj = await price(req)
    // } else{
    //     strikeObj = await acceptDiscountMethod(req);
    // }
    res.status(200).json(strikeObj.Data());
} catch(err){
    console.log(err)
}
    
});

module.exports = router;
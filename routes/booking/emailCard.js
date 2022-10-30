const express = require('express');
const router = express.Router();

const getUserData = require('../../middlewares/getUserData.js');
const emailMethod = require('../../methods/emailMethod.js');
const cancelBookingMethod = require('../../methods/cancelBookingMethod.js');
const booking = require('../../models/booking.js');

router.post('/:id', getUserData, async(req,res) => {
try{
    const strikeBody = req.body.bybrisk_session_variables;
    const userResp = req.body.user_session_variables;
    const dbRes = req.body.user_session_variables.rideDetails;

    let strikeObj;
    // if(userResp.confirmBooking[0] === 'Proceed to Payment'){
    if(userResp.confirmBooking[0].split(" ").includes("Pay")){
        // do something
        strikeObj = await emailMethod(req);
    } else if(userResp.confirmBooking[0].split(" ").includes("Cancel")){
        await booking.findByIdAndUpdate(req.params.id,{
            riderPhone: strikeBody.phone,
            riderEmail: '',
            rideDetails:{
                rideTime: dbRes.rideTime,
                rideDate: dbRes.rideDate,
                rideRoute: dbRes.rideRoute,
                discountCode: dbRes.discountCode,
                orderID: dbRes.orderID,
                pickupGhat: 'Kedar Ghat',
                bookingPrice: dbRes.bookingPrice,    
            },
            orderDetails:{
                bookingStatus: 'cancelled'
            }
                   
        }).catch(err=> console.log(err))
        strikeObj = await cancelBookingMethod(req);
    }
    res.status(200).json(strikeObj.Data());
} catch(err){
    console.log(err)
}
    
});

module.exports = router;
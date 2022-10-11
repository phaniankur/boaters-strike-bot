<<<<<<< HEAD
const express = require('express');
const router = express.Router();

const confirmBookingMethod = require('../../methods/confirmBookingMethod.js');
const emailNotification = require('../../methods/emailNotification.js');
const invalidPaymentMethod = require('../../methods/invalidPaymentMethod.js');
const pushNotification = require('../../methods/pushNotification.js');
const booking = require('../../models/booking.js');

router.post('/:id', async(req,res) => {

    try{
        let strikeObj;
        const paymentConfirm = await booking.findById(req.params.id)

        console.log('check confirmation',paymentConfirm)
        console.log('check RideTime', req.body)
    
        if(paymentConfirm.orderDetails.paymentStatus === 'SUCCESS'){

            strikeObj = await confirmBookingMethod(req, paymentConfirm);
        } else{
            strikeObj = await invalidPaymentMethod(req);
        }

    res.status(200).json(strikeObj.Data());
    } catch(err){
        console.log(err)
    }
});

=======
const express = require('express');
const router = express.Router();

const getUserData = require('../../middlewares/getUserData.js');
const getOrderID = require('../../middlewares/getOrderID.js');
const confirmBookingMethod = require('../../methods/confirmBookingMethod.js');
const cancelBookingMethod = require('../../methods/cancelBookingMethod');

router.post('/:id',getUserData, getOrderID, async(req,res,next) => {
    const userResp = req.body.user_session_variables;
    
    try{
        let strikeObj;
        if(userResp.confirmBooking[0] === 'Confirm Booking'){
            // do something
            strikeObj = await confirmBookingMethod(req);
        } else if(userResp.confirmBooking[0] === 'Cancel'){
            strikeObj = await cancelBookingMethod(req);
        }

    res.status(200).json(strikeObj.Data());
    } catch(err){
        console.log(err)
    }
});

>>>>>>> 4b194cbb85be9d87af25db80cee9158f9f361797
module.exports = router;
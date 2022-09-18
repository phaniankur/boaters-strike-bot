const express = require('express');
const router = express.Router();

const baseAPI = require('../../config/baseAPI.js')

const Create = require('../../interfaces/strike');
const booking = require('../../models/booking.js');
const getUserData = require('../../middlewares/getUserData.js');
const getOrderID = require('../../middlewares/getOrderID.js');

router.post('/:id',getUserData, getOrderID, async(req,res,next) => {
    // console.log('confirmbooking',req.body)

    const strikeBody = req.body.bybrisk_session_variables;
    const userResp = req.body.user_session_variables;
    const dbRes = req.body.user_session_variables.rideDetails;
    userResp.basePrice[0] = userResp.basePrice[0].replace('₹', '');

    try{
        await booking.findByIdAndUpdate(req.params.id,{
            riderPhone: strikeBody.phone,
            riderEmail: '',
            rideDetails:{
                rideTime: dbRes.rideTime,
                rideDate: dbRes.rideDate,
                rideRoute: dbRes.rideRoute,
                discountCode:dbRes.discount,
                bookingStatus: 'booked',
                orderID: dbRes.orderID,
                noofRiders: '',
                pickupGhat: 'Kedar Ghat',
                typeofBoat: '',
                bookingPrice: userResp.basePrice[0],
                txnId: '',
                paymentStatus: ''
            },
        })
    }catch(err){
        console.log(err)
    }
    
    const strikeObj = new Create('getting_started', '');
    
    quesObj = strikeObj.Question('val1');
    quesObj.
        QuestionText().
            SetTextToQuestion(`Hi ${strikeBody.username},\nYour boat ride is booked with Boaters!\nScheduled on: ${dbRes.rideDate}\nTime: ${dbRes.rideTime}\nPick up: ${dbRes.pickupGhat}\nRoute: ${dbRes.rideRoute}\nPaid Amount:${userResp.basePrice}`)

    res.status(200).json(strikeObj.Data());
});

module.exports = router;
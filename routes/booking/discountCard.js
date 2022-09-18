const express = require('express');
const router = express.Router();

const booking = require('../../models/booking.js');
const getUserData = require('../../middlewares/getUserData.js');
const timeCardMethod = require('../../methods/timeCardMethod.js');
const acceptDiscountMethod = require('../../methods/acceptDiscountMethod.js');

router.post('/:id', getUserData, async(req,res) => {
try{
    const strikeBody = req.body.bybrisk_session_variables;
    const userResp = req.body.user_session_variables;
    const dbRes = req.body.user_session_variables.rideDetails;
    // console.log('dicount Price', req.body)

    userResp.basePrice[0] = userResp.basePrice[0].replace('₹', '')
    await booking.findByIdAndUpdate(req.params.id,{
        riderPhone: strikeBody.phone,
        rideDetails:{
            rideTime: dbRes.rideTime,
            rideDate: dbRes.rideDate,
            rideRoute: dbRes.rideRoute,
            bookingPrice: userResp.basePrice[0]
        },
    }).catch(err=> console.log(err))

    let strikeObj;
    if(userResp.basePrice[0] === '↩️ Back to Previous handler'){
        strikeObj = await timeCardMethod(req)
    } else{
        strikeObj = await acceptDiscountMethod(req);
    }
    res.status(200).json(strikeObj.Data());
} catch(err){
    console.log(err)
}
    
});

module.exports = router;
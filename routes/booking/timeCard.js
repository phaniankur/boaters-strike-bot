const express = require('express');
const router = express.Router();

const booking = require('../../models/booking.js');
const getUserData = require('../../middlewares/getUserData');
const timeCardMethod = require('../../methods/timeCardMethod.js');
const dateCardMethod = require('../../methods/dateCardMethod.js');
const acceptDiscountMethod = require('../../methods/acceptDiscountMethod.js');

router.post('/:id', getUserData, async(req,res) => {
    
    try{
        const strikeBody = req.body.bybrisk_session_variables;
        const userResp = req.body.user_session_variables;
        const dbRes = req.body.user_session_variables.rideDetails;

        let strikeObj;
        if(userResp.basePrice[0].toLowerCase() === '↩️ change ride date'){
            strikeObj = await dateCardMethod(req)
        } else{
            let rideTime;
            if(dbRes.rideRoute.toLowerCase() === 'ganga aarti boat-ride'){
                strikeObj = await acceptDiscountMethod(req);
                rideTime = '6:00 PM';
            } else{
                strikeObj = await timeCardMethod(req);
                rideTime = '';
            }
            userResp.basePrice[0] = userResp.basePrice[0].replace('₹', '')
            await booking.findByIdAndUpdate(req.params.id,{
                riderPhone: strikeBody.phone,
                rideDetails:{
                    rideTime: rideTime,
                    bookingPrice: userResp.basePrice[0],
                    rideDate: dbRes.rideDate,
                    rideRoute: dbRes.rideRoute
                },
                
            }).catch(err=> console.log(err))
        }
        res.status(200).json(strikeObj.Data());
    } catch(err){
        console.log(err)
    } 

});

module.exports = router;
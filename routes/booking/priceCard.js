const express = require('express');
const router = express.Router();

const booking = require('../../models/booking.js');
const getUserData = require('../../middlewares/getUserData.js');
const price = require('../../methods/price.js');
const dateCardMethod = require('../../methods/dateCardMethod.js');

router.post('/:id', getUserData, async(req,res) => {
    
    try{
        const strikeBody = req.body.bybrisk_session_variables;
        const userResp = req.body.user_session_variables;
        const dbRes = req.body.user_session_variables.rideDetails;
        console.log('price card', userResp)

        await booking.findByIdAndUpdate(req.params.id,{
            riderPhone: strikeBody.phone,
            rideDetails:{
                rideTime: userResp.rideTime[0],
                rideDate: dbRes.rideDate,
                rideRoute: dbRes.rideRoute
            },
        }).catch(err=> console.log(err))

        let strikeObj;
        if(userResp.rideTime[0] === '↩️ Back to Previous handler'){
            strikeObj = await dateCardMethod(req)
        } else{
            strikeObj = await price(req);
        }
        res.status(200).json(strikeObj.Data());
    }catch(err){
        console.log(err)
    }
});

module.exports = router;
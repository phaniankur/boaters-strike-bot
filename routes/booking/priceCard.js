const express = require('express');
const router = express.Router();

const booking = require('../../models/booking.js');
const getUserData = require('../../middlewares/getUserData.js');
const price = require('../../methods/price.js');

router.post('/:id', getUserData, async(req,res,next) => {

    const strikeBody = req.body.bybrisk_session_variables;
    const userResp = req.body.user_session_variables;
    const dbRes = req.body.user_session_variables.rideDetails;

    try{
        await booking.findByIdAndUpdate(req.params.id,{
            riderPhone: strikeBody.phone,
            rideDetails:{
                rideTime: userResp.rideTime[0],
                rideDate: dbRes.rideDate,
                rideRoute: dbRes.rideRoute
            },
        })
    }catch(err){
        console.log(err)
    }

    let strikeObj = await price(req);

    res.status(200).json(strikeObj.Data());
});

module.exports = router;
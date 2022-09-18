const express = require('express');
const router = express.Router();

const baseAPI = require('../../config/baseAPI.js')
const {timeSlots} = require('../../config/data.js');

const Create = require('../../interfaces/strike');
const booking = require('../../models/booking.js');
const getUserData = require('../../middlewares/getUserData');
const timeCardMethod = require('../../methods/timeCardMethod.js');

router.post('/:id', getUserData, async(req,res) => {
    try{
        const strikeBody = req.body.bybrisk_session_variables;
        const userResp = req.body.user_session_variables;

        await booking.findByIdAndUpdate(req.params.id,{
            riderPhone: strikeBody.phone,
            rideDetails:{
                rideDate: userResp.dateOfRide[0],
                rideRoute: userResp.rideRoute[0],
                bookingStatus: 'initiated'
            },
        }).catch(err=> console.log(err))
        let strikeObj = await timeCardMethod(req);
        res.status(200).json(strikeObj.Data());
    } catch(err){
        console.log(err)
    } 

});

module.exports = router;
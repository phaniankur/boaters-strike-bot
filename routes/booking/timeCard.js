const express = require('express');
const router = express.Router();

const baseAPI = require('../../config/baseAPI.js')
const {timeSlots} = require('../../config/data.js');

const Create = require('../../interfaces/strike');
const booking = require('../../models/booking.js');
const getUserData = require('../../middlewares/getUserData')

router.post('/:id', getUserData, async(req,res) => {

    const strikeBody = req.body.bybrisk_session_variables;
    const userResp = req.body.user_session_variables;

    try{
        await booking.findByIdAndUpdate(req.params.id,{
            riderPhone: strikeBody.phone,
            rideDetails:{
                rideDate: userResp.dateOfRide[0],
                rideRoute: userResp.rideRoute[0],
                bookingStatus: 'initiated'
            },
        })
    }catch(err){
        console.log(err)
    }
    
    const strikeObj = new Create('getting_started',`${baseAPI}pricecard/${req.params.id}`);
    
    // Question interface 5
    //defining question obj
    questionNumberObj = strikeObj.Question('rideTime');
    questionNumberObj.QuestionText().
        SetTextToQuestion("Please select your preferred time");
    
    // Answer interface 5
    // defining an answer obj for the above  question
    timeSlotAnswerObj = questionNumberObj.Answer(true);
    timeSlotAnswerObj.AnswerCardArray(strikeObj.VERTICAL_ORIENTATION);
    for(let i=0;i<timeSlots.length;i++) {
        // apennding answers for the above answer obj
        timeSlotAnswerObj.AnswerCard().SetHeaderToAnswer(1, strikeObj.HALF_WIDTH).AddTextRowToAnswer(strikeObj.H5, timeSlots[i], "#009646", true)
	}
    res.status(200).json(strikeObj.Data());
});

module.exports = router;
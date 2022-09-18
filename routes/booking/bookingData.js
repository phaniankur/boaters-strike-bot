const express = require('express');
// const timeSlots = require('../../config/timeSlots');
const router = express.Router();

// Import this to use the interface library
const Create = require('../../interfaces/strike');

const timeSlots = [
    '1:00',
    '2:00',
    '3:00',
]
router.post('/',(req,res,next) => {

    const strikeObj = new Create('getting_started', baseAPI+'bookingResponse');

    //Question Card interface 1
    questionCardObj = strikeObj.Question('welcome'); 

    // Answer Card Interface 1
    answerCardObj = questionCardObj.Answer(true);
    answerCardObj.AnswerCardArray(strikeObj.VERTICAL_ORIENTATION);

    answerCardObj.AnswerCard().SetHeaderToAnswer(2,strikeObj.HALF_WIDTH).
        AddGraphicRowToAnswer(strikeObj.PICTURE_ROW,["https://www.worldatlas.com/r/w960-q80/upload/e8/0a/5f/shutterstock-569901058.jpg"],[]).
        AddTextRowToAnswer(strikeObj.H3,"Welcome to Boaters!\nWhen do you want to schedule your boat ride?","#008fcc",false);

    // Question Text interface 2
    questionDateObj = strikeObj.Question('dor');

    // Answer Date interface 2
    questionDateObj.DateInput('Select Date');

    // // Question Text interface 3
    // questionrideTimeObj = strikeObj.Question('tor');
    // // questionrideTimeObj.QuestionText().
    // //     SetTextToQuestion("Your preferred ride time?");

    // // Answer Date interface 3
    // questionrideTimeObj = questionCardObj.Answer(true);
    // questionrideTimeObj.AnswerCardArray(strikeObj.VERTICAL_ORIENTATION);
    // for(let i = 0;i<1; i++){

    //     questionrideTimeObj.AnswerCard().SetHeaderToAnswer(2,strikeObj.HALF_WIDTH).
    //         AddGraphicRowToAnswer(strikeObj.HALF_WIDTH,["1", "2"],[]).
    //         AddTextRowToAnswer(strikeObj.H5,i,false);
    // }
    
    // Question interface 4
    questionRiderObj = strikeObj.Question('riders');
    questionRiderObj.QuestionText().
        SetTextToQuestion("Number of Riders?");

    // Answer interface 4
    questionRiderObj.NumberInput();
    
    // Question interface 5
    //defining question obj
    questionNumberObj = strikeObj.Question('time');
    questionNumberObj.QuestionText().
        SetTextToQuestion("PTime bolo");
    
    // Answer interface 5
    // defining an answer obj for the above  question
    timeSlotAnswerObj = questionNumberObj.Answer(true);
    timeSlotAnswerObj.AnswerCardArray(strikeObj.VERTICAL_ORIENTATION);
    for(let i=0;i<timeSlots.length;i++) {
        console.log(timeSlots[i])
        // apennding answers for the above answer obj
        timeSlotAnswerObj.AnswerCard().SetHeaderToAnswer(1, strikeObj.HALF_WIDTH).AddTextRowToAnswer(strikeObj.H5, timeSlots[i], "#009646", true)
	}
console.log(JSON.stringify(strikeObj.Data()))
    res.status(200).json(strikeObj.Data());
});

module.exports = router;
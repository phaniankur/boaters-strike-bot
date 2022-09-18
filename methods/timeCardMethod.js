const baseAPI = require("../config/baseAPI");
const { timeSlots } = require("../config/data");
const Create = require("../interfaces/strike");

async function timeCardMethod(req){
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
        timeSlotAnswerObj.AnswerCard().SetHeaderToAnswer(1, strikeObj.HALF_WIDTH).AddTextRowToAnswer(strikeObj.H4, timeSlots[i], "#c91a3a", true)
	}
    timeSlotAnswerObj.AnswerCard().SetHeaderToAnswer(1, strikeObj.HALF_WIDTH).AddTextRowToAnswer(strikeObj.H4, "↩️ Back to Previous handler", "#009646", )
    return strikeObj;
}
module.exports = timeCardMethod
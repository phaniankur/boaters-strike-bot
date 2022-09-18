const baseAPI = require("../config/baseAPI");
const Create = require("../interfaces/strike");

function finalprice(req){

    const dbRes = req.body.user_session_variables.rideDetails;

    const strikeObj = new Create('getting_started', `${baseAPI}confirmBooking/${req.params.id}`);
    
    // Question interface 5
    //defining question obj
    questionNumberObj = strikeObj.Question('basePrice');
    questionNumberObj.QuestionText().
        SetTextToQuestion("Your Final Price");
    
    // Answer interface 5
    // defining an answer obj for the above  question
    timeSlotAnswerObj = questionNumberObj.Answer(true);
    timeSlotAnswerObj.AnswerCardArray(strikeObj.VERTICAL_ORIENTATION);

        // apennding answers for the above answer obj
    timeSlotAnswerObj.AnswerCard().SetHeaderToAnswer(1, strikeObj.HALF_WIDTH).AddTextRowToAnswer(strikeObj.H5, "₹" + dbRes.bookingPrice, "#009646", true)

    return strikeObj
}
module.exports = finalprice; 
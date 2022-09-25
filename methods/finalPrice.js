const baseAPI = require("../config/baseAPI");
const Create = require("../interfaces/strike");

function finalprice(req){

    const dbRes = req.body.user_session_variables.rideDetails;

    const strikeObj = new Create('getting_started', `${baseAPI}confirmBooking/${req.params.id}`);
    
    questionNumberObj = strikeObj.Question('confirmBooking');
    questionNumberObj.QuestionText().
        SetTextToQuestion("Confirm Your Booking Details 👇");

    timeSlotAnswerObj = questionNumberObj.Answer(true);
    timeSlotAnswerObj.AnswerCardArray(strikeObj.VERTICAL_ORIENTATION);

    timeSlotAnswerObj.AnswerCard().SetHeaderToAnswer(10, strikeObj.HALF_WIDTH).
    AddTextRowToAnswer(strikeObj.H4, "Type: " + dbRes.rideRoute, "Black", false).
    AddTextRowToAnswer(strikeObj.H4, "Date: " + dbRes.rideDate, "red", false).
    AddTextRowToAnswer(strikeObj.H4, "Time: " + dbRes.rideTime, "red", false).
    AddTextRowToAnswer(strikeObj.H4, "Pickup Point: Kedar Ghat", "red", false).
    AddTextRowToAnswer(strikeObj.H4, "Total Payable Amount: ₹" + dbRes.bookingPrice, "Black", true)

    timeSlotAnswerObj = timeSlotAnswerObj.AnswerCard().
        SetHeaderToAnswer(1, strikeObj.HALF_WIDTH).
        AddTextRowToAnswer(strikeObj.H5, 'Confirm Booking', "#009646", true);

    timeSlotAnswerObj = timeSlotAnswerObj.AnswerCard().
        SetHeaderToAnswer(1, strikeObj.HALF_WIDTH).
        AddTextRowToAnswer(strikeObj.H5, 'Cancel', "red", true);

    return strikeObj
}
module.exports = finalprice; 
<<<<<<< HEAD
const baseAPI = require("../config/baseAPI");
const Create = require("../interfaces/strike");

function finalprice(req){

    const dbRes = req.body.user_session_variables.rideDetails;

    const strikeObj = new Create('getting_started', `${baseAPI}emailcard/${req.params.id}`);
    
    questionNumberObj = strikeObj.Question('confirmBooking');
    questionNumberObj.QuestionText().
        SetTextToQuestion("Confirm Your Booking Details 👇");

    timeSlotAnswerObj = questionNumberObj.Answer(true);
    timeSlotAnswerObj.AnswerCardArray(strikeObj.VERTICAL_ORIENTATION);

    timeSlotAnswerObj.AnswerCard().SetHeaderToAnswer(10, strikeObj.HALF_WIDTH).
    AddTextRowToAnswer(strikeObj.H4, "Type: " + dbRes.rideRoute, "#1746A2", true).
    AddTextRowToAnswer(strikeObj.H4, "Date: " + dbRes.rideDate, "#FF731D", false).
    AddTextRowToAnswer(strikeObj.H4, "Time: " + dbRes.rideTime, "#FF731D", false).
    AddTextRowToAnswer(strikeObj.H4, "Pickup Point: Kedar Ghat", "#FF731D", false).
    AddTextRowToAnswer(strikeObj.H4, "Total Payable Amount: ₹" + dbRes.bookingPrice, "#1746A2", true)

    timeSlotAnswerObj = timeSlotAnswerObj.AnswerCard().
        SetHeaderToAnswer(1, strikeObj.WRAP_WIDTH).
        AddTextRowToAnswer(strikeObj.H5, 'Proceed to Payment', "#1746A2", true);

    timeSlotAnswerObj = timeSlotAnswerObj.AnswerCard().
        SetHeaderToAnswer(1, strikeObj.WRAP_WIDTH).
        AddTextRowToAnswer(strikeObj.H5, 'Cancel', "#FF731D", true);

    return strikeObj
}
=======
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
>>>>>>> 4b194cbb85be9d87af25db80cee9158f9f361797
module.exports = finalprice; 
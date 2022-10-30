const baseAPI = require("../config/baseAPI");
const Create = require("../interfaces/strike");

function finalprice(req){

    const userResp = req.body.user_session_variables;
    const dbRes = req.body.user_session_variables.rideDetails;
    
    const strikeObj = new Create('getting_started', `${baseAPI}emailcard/${req.params.id}`);

    let msg;
    userResp && userResp.discount ? msg= 'Yay! Discount Applied. Here is your ride summary 👇'
    : msg = 'Confirm Your Booking Details 👇'
    
    questionNumberObj = strikeObj.Question('confirmBooking');
    questionNumberObj.QuestionText().
        SetTextToQuestion(`${msg}\n\nType: ${dbRes.rideRoute}\nDate: ${dbRes.rideDate}\nTime: ${dbRes.rideTime}\nPick-up Station: Kedar Ghat\n\nTotal Payable Amount: ₹${dbRes.bookingPrice}`);

    timeSlotAnswerObj = questionNumberObj.Answer(false);
    timeSlotAnswerObj.AnswerCardArray(strikeObj.VERTICAL_ORIENTATION);
    
    // userResp && userResp.discount ?
    // timeSlotAnswerObj.AnswerCard().SetHeaderToAnswer(10, strikeObj.FULL_WIDTH).
    // AddTextRowToAnswer(strikeObj.H4, 'Yay! Discount Applied. Here is your ride summary 👇', "#1746A2", false) : null

    // timeSlotAnswerObj.AnswerCard().SetHeaderToAnswer(10, strikeObj.HALF_WIDTH).
    // AddTextRowToAnswer(strikeObj.H4, "Type: " + dbRes.rideRoute, "#1746A2", true).
    // AddTextRowToAnswer(strikeObj.H4, "Date: " + dbRes.rideDate, "#FF731D", false).
    // AddTextRowToAnswer(strikeObj.H4, "Time: " + dbRes.rideTime, "#FF731D", false).
    // AddTextRowToAnswer(strikeObj.H4, "Pickup Point: Kedar Ghat", "#FF731D", false).
    // AddTextRowToAnswer(strikeObj.H4, "Total Payable Amount: ₹" + dbRes.bookingPrice, "#1746A2", true)

    timeSlotAnswerObj = timeSlotAnswerObj.AnswerCard().
        SetHeaderToAnswer(1, strikeObj.WRAP_WIDTH).
        AddTextRowToAnswer(strikeObj.H4, `Proceed to Pay ₹${dbRes.bookingPrice}`, "#1746A2", true);

    timeSlotAnswerObj = timeSlotAnswerObj.AnswerCard().
        SetHeaderToAnswer(1, strikeObj.WRAP_WIDTH).
        AddTextRowToAnswer(strikeObj.H4, 'Cancel', "#FF731D", true);

    return strikeObj
}
module.exports = finalprice; 
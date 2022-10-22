const Create = require("../interfaces/strike");

async function confirmBookingMethod(req, paymentConfirm){

    const strikeBody = req.body.bybrisk_session_variables;
    
    const strikeObj = new Create('confirm booking', '');
    
    quesObj = strikeObj.Question('val1');
    quesObj.
        QuestionText().
            SetTextToQuestion(`Yay! Your boat-ride is booked with boatrr!\nHere are your ride details.👇`)
            // SetTextToQuestion(`Hi ${strikeBody.username}, your ride is Booked with Boatrr.`)
            timeSlotAnswerObj = quesObj.Answer(true);
            timeSlotAnswerObj.AnswerCardArray(strikeObj.VERTICAL_ORIENTATION);

            timeSlotAnswerObj.AnswerCard().SetHeaderToAnswer(10, strikeObj.HALF_WIDTH).
            AddTextRowToAnswer(strikeObj.H4, "Scheduled on: " + paymentConfirm.rideDetails.rideDate, "#1746A2", false).
            AddTextRowToAnswer(strikeObj.H4, "At: " + paymentConfirm.rideDetails.rideTime, "#FF731D", false).
            AddTextRowToAnswer(strikeObj.H4, "Ride Type: " + paymentConfirm.rideDetails.rideRoute, "#FF731D", true).
            AddTextRowToAnswer(strikeObj.H4, "Pickup Point: Kedar Ghat", "#FF731D", false).
            AddTextRowToAnswer(strikeObj.H4, "Amount Paid: ₹" + paymentConfirm.orderDetails.bookingPrice, "#1746A2", true).
            AddTextRowToAnswer(strikeObj.H5, "Scheduled on: " + paymentConfirm.orderDetails.orderID, "#5F9DF7", false);

            timeSlotAnswerObj.AnswerCard().SetHeaderToAnswer(1, strikeObj.HALF_WIDTH).AddTextRowToAnswer(strikeObj.H5, "Ride details have been sent to your email.\nYou may now close this conversation.", "#628E90", false )
    return strikeObj
}
module.exports = confirmBookingMethod
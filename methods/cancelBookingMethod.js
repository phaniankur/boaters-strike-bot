const Create = require("../interfaces/strike");
const booking = require("../models/booking");

async function confirmBookingMethod(req){

    const strikeBody = req.body.bybrisk_session_variables;
    const userResp = req.body.user_session_variables;
    const dbRes = req.body.user_session_variables.rideDetails;
    // userResp.basePrice[0] = userResp.basePrice[0].replace('₹', '');

    await booking.findByIdAndUpdate(req.params.id,{
        riderPhone: strikeBody.phone,
        riderEmail: '',
        rideDetails:{
            rideTime: dbRes.rideTime,
            rideDate: dbRes.rideDate,
            rideRoute: dbRes.rideRoute,
            discountCode: dbRes.discountCode,
            orderID: dbRes.orderID,
            pickupGhat: 'Kedar Ghat',
            bookingPrice: dbRes.bookingPrice,

        },
        orderDetails:{
            bookingStatus: 'cancelled'
        }
               
    }).catch(err=> console.log(err))
    
    const strikeObj = new Create('cancel_booking', '');
    
    quesObj = strikeObj.Question('val1');
    quesObj.
        QuestionText().
            SetTextToQuestion(`Hi ${strikeBody.username}, Your booking is cancelled. You may now close this conversation.`)

    return strikeObj
}
module.exports = confirmBookingMethod